---
date: 2026-10-20
title: Nobody, some!
description: Nobody will know your name.
tags: [arch]
---

One thing I've always enjoyed about open source is that any frustration I have
is often shared thought with other users.

On fresh Arch boxes a lot of packages are close to stock.
Meaning they ship things you might not want!

# Somebody did enjoy the work !

<img width="802" height="440" alt="thatsme" src="https://github.com/user-attachments/assets/9622e0ae-95e5-4fa3-9895-c8eeb2399ad9" />

Reported [here](https://gitlab.archlinux.org/archlinux/packaging/packages/avahi/-/work_items/5)

A deep rabbit hole. But essentially here is what you'd want to know:

In it's essence any package is built using a [`pkgfile`](https://crux.nu/doc/handbook.html#Pkgfile)
Which is just bash... With pre-made definitions.

In the case of arch: `pacman`'s `makepkg` and friends (`devtools`).

Further-more, the very rules who check a done "packaging":
[`namcap`](https://gitlab.archlinux.org/pacman/namcap/)

This brought me to further exploration of Alpine's
[`abuild`](https://gitlab.alpinelinux.org/alpine/abuild/)

This introduces the concept of "auto-splits" meaning the build system itself lacks
certain features; that would make packages lighter and more explicit.

If ended up making a "fork" of `makepkg` itself to try for myself:
[scaling-eureka](https://github.com/h8d13/scaling-eureka)

Which attempts to split automatically (`-docs`, `-lang`, `-pyc`, `-completions`)...
Similar to how alpine does it. And Fedora's spec files can produce several binary RPMs.

You declare each extra one with `%package` and give it its own `%files` section...
Plus some [tiny details](https://pagure.io/rpmdevtools/)

My main takeaway is that the KISS philosophy here is to improve the tools, not have
more packaging work, for the already too few maintainers...

### Problem 1: `PKGBUILD` boilerplate

`makepkg` has no built-in split partitioner, so each split PKGBUILD carries something like:

```diff
+_pick() {
+  local p="$1" f d; shift
+  for f; do
+    d="$srcdir/$p/$f"
+    mkdir -p "$(dirname "$d")"
+    mv "$f" "$d"
+    rmdir -p --ignore-fail-on-non-empty "$(dirname "$f")"
+  done
```

This **once** per package that has sub-packages.

There is a maintainer's richer declarative [alternative](https://gitlab.archlinux.org/pacman/pacman/-/tree/allan/splitpkg2).

Full [thread](https://gitlab.archlinux.org/pacman/pacman/-/merge_requests/314#note_561561)
has been lingering for 6+ months, on how to handle splits with built-in functions,
instead of the boilerplate above.

### Problem 2: Lint rules

Arch's own tooling, [`namcap`](https://gitlab.archlinux.org/pacman/namcap/),
defines the `lots-of-docs` rule as docs making up more than 50% of a package.

This ties back directly to the "bad cases of waste" seen above.

As seen in my bug report [108](https://gitlab.archlinux.org/pacman/namcap/-/work_items/108),
the checked paths were wrong, and **do not cover all common docs paths**.

I can conclude that many other packages will have A LOT of docs (you will never read).

A more "dev-ish" example, `clang`: pulls in ~21 MiB of docs, then `llvm` pulls in another
~50 MiB. (Installed: 20% of the total 380MB)

### Problem 3: Duplicated licenses

Split packages often restate licenses for each split:

```shell
  install -Dm644 openjpeg-"${pkgver}"/LICENSE \
    -t "${pkgdir}"/usr/share/licenses/${pkgname}/
```

Repeated for every split, where the license is (usually) the same and the parent package
that is likely, already installed.
More broadly, a full desktop install carries several MiB of license files that are
identical except for the `<name/company> <year>` and SPDX headers.

## Abstract

To start with a more "abstract" motivation:

From [wiki](https://wiki.archlinux.org/title/Arch_Linux#Simplicity)

> Arch Linux official packages do not provide system-wide GUI configuration utilities
> (i.e. there is neither a GUI installation wizard nor a GUI system configuration tool,
> and Arch as a distribution does not promote GUI tools for system configuration),
> encouraging users to perform most system configuration from a command-line shell and
> a text editor.

The same applies to packages including "debug UI tools" or other non-essentials. Examples:

- [`avahi`](https://gitlab.archlinux.org/archlinux/packaging/packages/avahi/-/merge_requests/4)
- [`v4l-utils`](https://gitlab.archlinux.org/archlinux/packaging/packages/v4l-utils/-/merge_requests/1)

> In a similar fashion, Arch ships the configuration files provided by upstream with changes
> limited to distribution-specific issues like adjusting the system file paths.
> It does not add automation features such as enabling a service simply because the package
> was installed.

> Packages are only split when compelling advantages exist, such as to save disk space in
> particularly bad cases of waste.

The `openjpeg2` example below cuts 94.7 % of installed size, which is a "particularly
bad case of waste" by any measure.

Yet was also [closed directly.](https://gitlab.archlinux.org/archlinux/packaging/packages/openjpeg2/-/merge_requests/1)

Splits already happen in `extra`:

- [`libguestfs`](https://gitlab.archlinux.org/archlinux/packaging/packages/libguestfs/-/commit/e67304a4ad46f9c769f919acc4394228fcffd559)
- [`suil`](https://gitlab.archlinux.org/archlinux/packaging/packages/suil/-/blob/main/PKGBUILD?ref_type=heads)
- A `-docs` convention also exists, i.e.[`wireplumber-docs`](https://gitlab.archlinux.org/archlinux/packaging/packages/wireplumber/-/blob/main/PKGBUILD?ref_type=heads)

These take a **bit of work and due process**. The problems below are what make
that work harder than it needs to be.

A `python` interpreter takes ~74MB on Arch vs ~23MB on Alpine (with many splits).

Compression helps over the wire (HTML docs compress ~15:1), **but the full size still
ends up on users' systems.**

It also varies by type: PNG icons barely compress at all, binaries and plain text sit
somewhere in between.
If anything the compression here, does a remarkable job at hiding the extent of the
issue, not fixing it at root cause.

`man` pages are deliberately almost always left in the base package.

## Save electrons on both ends !

Since `pacman` doesn't do delta updates...

```txt
API CHANGES BETWEEN 5.1 AND 5.2
===============================

[REMOVED]
- package delta support
```

Saving ~30 MiB installed across 3 packages
at a ~6:1 compression ratio, is ~5 MiB over the wire.

Let's us do the basic math:

5 MiB × 100,000 affected machines × 10 releases a year comes to about 5 TB a year.

And also kind of makes for leaner, more explicit systems, in my opinion.

For instance ones that are commonly used in containers, CI, or even just frequently
installed, should be prioritized for splits.

As seen in [monitoring](https://dashboards.archlinux.org/dashboards), the load on
mirrors providers makes this a compelling argument.

DevOps/Back-end people might also find this interesting as a whole.

The same applies to end-users (not the gamer 1000W type):

Differences in speed/cost/accessibility of "good" [internet](https://www.speedtest.net/global-index)
... prices being higher at certain times or even slower during peak usage
around you, or not many mirrors around!

In certain countries, even actually sharing USB sticks with software, movies, etc.
Which are totally not pirated ever !

Storage prices/speed are the same deal and even more relevant to people who directly
benefit from packagers' work. [StoragePrices](https://pcpartpicker.com/trends/price/internal-hard-drive/)

## Conclusion

It's a non-attractive route in terms of packaging time, but is more optimal both for infrastructure and
for people who actually use the packagers' very work.

---
