---
date: 2026-10-20
title: Regression
description: Found a bug in `libarchive`
tags: [bugs]
---

## Abstract

`bsdtar` drops sticky/setgid bits on entries carrying ACLs whenever permission
restore is in effect (explicit `-p`, or extracting as root, where it is the
default per `tar/bsdtar.c:242`). The `mode 0000`
facet has an open (unmerged) fix in
[PR#3430](https://github.com/libarchive/libarchive/pull/3430); the sticky/setgid
part is my own addition to that thread.

## Simple repro

Also very simple to reproduce in a scratch dir:

Expected: 1777 1777

```bash
#!/usr/bin/env bash
# sticky bit lost on a dir carrying an ACL
set -eu
cd "$(mktemp -d)"
mkdir -m 1777 d out
setfacl -m "u:$(id -u):rwx" d
bsdtar -c --format pax --acls --no-xattrs -f t.tar d
bsdtar -x -p --no-acls --no-xattrs -f t.tar -C out
stat -c %a d out/d
```

Output:

```text
1777
777
```

Note the extraction uses `--no-acls`: merely having an ACL *in the archive entry*
corrupts the mode, even when you explicitly ask not to restore ACLs on the way out.

Bigger security concern than it might seem:

```console
ls -l / |grep tmp
drwxrwxrwt  29 root root         820 Oct 20 23:01 tmp
```

The `t` here denotes the sticky bit. From `man chmod`:

```text
RESTRICTED DELETION FLAG OR STICKY BIT
     The restricted deletion flag or sticky bit is a single bit, whose
     interpretation depends on the file type. For directories, it prevents
     unprivileged users from removing or renaming a file in the directory
     unless they own the file or the directory; this is called the
     restricted deletion flag for the directory, and is commonly found on
     world-writable directories like /tmp. For regular files on some older
     systems, the bit saves the program's text image on the swap device so
     it will load more quickly when run; this is called the sticky bit.
```

### Affected versions

Bisected to [exact-commit](https://github.com/libarchive/libarchive/commit/2d8a5760c5ec553283a95a1aaca746f6eb472d0f);
builds before it are fine.

"Parse tar headers incrementally" [#2127](https://github.com/libarchive/libarchive/pull/2127),
first in v3.7.5.

Found while extracting Arch bootstrap tarballs. `systemd` warns on differing perms.

Version-gated to `>= 3.7.5`, so Debian stable is clean until forky:

| distro | libarchive | affected |
|---|---|---|
| Debian 13 trixie | 3.7.4 | no |
| Debian 12 bookworm | 3.6.2 | no |
| Debian sid / forky | 3.8.9 | yes |
| Arch (current) | 3.8.10 | yes |
| openEuler 25.09 | 3.8.1 | yes |

Meaning any files with sticky/setgid, ACLs that went through `libarchive` in the last
two years may have lost those bits. Funnily enough it is used by projects like:

Package-manager `pacman`, especially to preserve permissions. But since arch packages don't
ship any ACLs and `systemd` takes care of tmpiles, the bug is not visible.

Similarly `archiso` tarballs do not ship ACLs either.

The bug would occur in darker places, where a sysadmin did setup ACLs and special bits. And
uses `libarchive` in the pipeline.

So this got me to wonder: **what does?**

And the most interesting case I found was OpenEuler containers (`iSulad`):

→ set an ACL inside the container fs

→ iSulad's `tar_all` reads it off disk and bakes it into the layer (pax/SCHILY)

→ iSulad later unpacks that layer with the buggy write-to-disk path

→ mode comes out mangled (0000, or setgid/sticky silently dropped).

## PoC

The PoC runs `bsdtar`, not `isula`, but `bsdtar -c/-x` *is* iSulad's
`archive_read_disk` → `archive_write_disk` pair against the same linked libarchive.

Two failure modes: `repo` → `0` (unusable dir, loud) and `shared` → `770`
(setgid silently gone).

```console
podman run --rm -it docker.io/openeuler/openeuler:25.09 bash -c "sed -i -E 's#https?://[^/]*repo\.openeuler\.org#https://de-repo.openeuler.org#g' /etc/yum.repos.d/openEuler.repo && dnf install -y bsdtar acl && bsdtar --version && exec bash"
OS                                                                        456 kB/s | 3.1 MB     00:06
everything                                                                1.3 MB/s |  16 MB     00:12
EPOL                                                                      1.4 MB/s | 9.2 MB     00:06
debuginfo                                                                 998 kB/s | 4.6 MB     00:04
source                                                                    476 kB/s | 1.7 MB     00:03
update                                                                     22  B/s | 241  B     00:10
Package acl-2.3.2-3.oe2509.x86_64 is already installed.
Dependencies resolved.
==========================================================================================================
 Package              Architecture         Version                         Repository                Size
==========================================================================================================
Installing:
 bsdtar               x86_64               3.8.1-1.oe2509                  everything                49 k

Transaction Summary
==========================================================================================================
Install  1 Package

Total download size: 49 k
Installed size: 119 k
Downloading Packages:
bsdtar-3.8.1-1.oe2509.x86_64.rpm                                           72 kB/s |  49 kB     00:00
----------------------------------------------------------------------------------------------------------
Total                                                                      14 kB/s |  49 kB     00:03
everything                                                                688  B/s | 3.0 kB     00:04
Importing GPG key 0xB675600B:
 Userid     : "openeuler <openeuler@compass-ci.com>"
 Fingerprint: 8AA1 6BF9 F2CA 5244 010D CA96 3B47 7C60 B675 600B
 From       : https://de-repo.openeuler.org/openEuler-25.09/everything/x86_64/RPM-GPG-KEY-openEuler
Key imported successfully
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Preparing        :                                                                                  1/1
  Installing       : bsdtar-3.8.1-1.oe2509.x86_64                                                     1/1
  Verifying        : bsdtar-3.8.1-1.oe2509.x86_64                                                     1/1

Installed:
  bsdtar-3.8.1-1.oe2509.x86_64

Complete!
bsdtar 3.8.1 - libarchive 3.8.1 zlib/1.3.1 liblzma/5.8.1 bz2lib/1.0.8 liblz4/1.10.0 libzstd/1.5.7 openssl/3.0.12 libb2/bundled libacl/2.3.2 libattr/2.3.2


Welcome to 7.2.11-zen1-1-zen

System information as of time: 	Thu Oct 22 09:39:10 UTC 2026

System load: 	1.08
Memory used: 	25.6%
Swap used: 	1.2%
Usage On: 	19%
Users online: 	0


[root@95d71d25de3e /]# cd /root && mkdir -p src/shared src/repo
[root@95d71d25de3e ~]# chmod 2770 src/shared; chmod 2775 src/repo
[root@95d71d25de3e ~]# setfacl -m g:bin:rwx -m d:g:bin:rwx src/shared
[root@95d71d25de3e ~]# setfacl -d -m g:bin:rwx src/repo
[root@95d71d25de3e ~]# echo "intended: shared=$(stat -c%a src/shared) repo=$(stat -c%a src/repo)"
intended: shared=2770 repo=2775
[root@95d71d25de3e ~]# cd /root/src && bsdtar --acls -cf /root/layer.tar shared repo && cd /root
[root@95d71d25de3e ~]# mkdir -p out && bsdtar -C out -xp --acls -f layer.tar
[root@95d71d25de3e ~]# echo "restored: shared=$(stat -c%a out/shared) repo=$(stat -c%a out/repo)"
restored: shared=770 repo=0
```

Control: GNU tar on the *same* archive restores correctly, proving it's libarchive
and not the environment, kernel, or ACL support:

```console
# dnf install -y tar; mkdir g && tar --acls -C g -xpf layer.tar
# stat -c%a g/shared g/repo
2770
2775
```

This occurs for any container layer carrying a POSIX ACL. The catch: standard
docker/buildah OCI images usually don't ship ACLs, their Go `archive/tar`
layer-diff doesn't capture `system.posix_acl_*`, so the ACL is already gone before
libarchive sees it.

iSulad is affected precisely because its *own* layer-creation
(`tar_all`) preserves disk ACLs into the layer, so the extract-side bug then eats
them. Same for any backup/restore or rootfs-capture pipeline that both archives and
restores ACL-bearing trees through libarchive `>= 3.7.5`.

## Conclusion

This bug would be most relevant on shared multi-tenant servers/file sharing instances,
or over-granting web-servers proxies vs dev groups.

A simple:

```console
gh search code 'ARCHIVE_EXTRACT_ACL'
```

Returns over 3000 results. Some harmless as they do not generally take inputs with ACLs
but others pure consumer like `compress-tools-rs` would silently swollow the SysAdmin's
work.

---
