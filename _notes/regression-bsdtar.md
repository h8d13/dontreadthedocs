---
date: 2026-10-20
title: Regression
description: Found a bug in `libarchive`
tags: [bugs]
---

`bsdtar -p` drops sticky/setgid bits on entries carrying ACLs,
which was already being fixed in [PR#3430](https://github.com/libarchive/libarchive/pull/3430)

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

Bisected to [exact-commit](https://github.com/libarchive/libarchive/commit/2d8a5760c5ec553283a95a1aaca746f6eb472d0f);
builds before it are fine.

"Parse tar headers incrementally" [#2127](https://github.com/libarchive/libarchive/pull/2127),
first in v3.7.5.

Found while extracting Arch bootstrap tarballs. `systemd` warns on differing perms.
On Debian 13 trixie for instance the bug would not be present (< 3.7.5)

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

Meaning any files with sticky/setgid AND ACLs that went through `libarchive` in the last
two years may have lost those bits.

---
