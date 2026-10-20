---
date: 2026-10-20
title: Regression
description: Found a bug in `libarchive`
tags: [bugs]
---

It simply discards the ACLs AND sticky/setgid
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

Building pre [exact-commit](https://github.com/libarchive/libarchive/commit/2d8a5760c5ec553283a95a1aaca746f6eb472d0f)
to pin cause of the regression, before this no-issues.

"Parse tar headers incrementally" [#2127](https://github.com/libarchive/libarchive/pull/2127),
first in v3.7.5.

Found while extracting Arch bootstrap tarballs. `systemd` warns on differing perms.
On Debian 13 trixie for instance the bug would not be present (< 3.7.5)

---
