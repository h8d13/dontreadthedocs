---
date: 2026-10-19
title: Hello, World!
description: Found a bug in `btrfs-progs`
tags: [bugs]
---

## Abstract

> Don't read the docs. Read the source!

The issue with docs is often they go stale, unlike source which IS the moving
target. A program should do what it says, and if what it says is 20 versions
behind... Well, it's lying to you.

## Scripting is unforgiving

It simply discards the exit code which I found out the hard way; when
my code (from a running fedora install) tried to create `/swap/swapfile`
inside a subvolume.

You can reproduce it simply without ever needing to even have a `btrfs` FS.
Or to be running a scripted installation.

```console
$ btrfs filesystem mkswapfile --size 64M nocow; echo "$?"
ERROR: cannot set NOCOW flag: Operation not supported
0
$ ls -l nocow
-rw------- 1 user user 0 Oct 19 23:13 nocow
```

Link: [#1186](https://github.com/kdave/btrfs-progs/issues/1186)

---
