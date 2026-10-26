---
date: 2026-10-20
title: Traumarchy
description: Licensing weirdness and AI.
tags: [arch]
---

## Abstract

First of all for full disclosure, I'm not pro or against Omarchy, think any Linux
adoption is a good thing. I'm also contributing to arch's projects on both GitLab
and also to the installer running [their installations](https://github.com/omacom/omarchy-iso/blob/7cfb7111a06873d61c45d37034577d4ba08d3f4f/configs/airootfs/usr/share/omarchy-iso/orchestrator/archinstall_adapter.py#L85-L100)
(`archinstall`).

> Recently there was a lot of marketing efforts mainly on YT and other socials.
> But little talked about its origins.
> This made me skip most of these videos and unsubscribe to a couple of people.

## Licenses

They also heavily rely on just drop-in configs to `archiso` (also [GPLv3](https://gitlab.archlinux.org/archlinux/archiso/-/blob/master/LICENSE)).

I tried to do some research on the subject, but I can't find any proper answers.

So here we go:
The Omarchy ISO [repo](https://github.com/omacom/omarchy-iso) has a single [LICENSE file](https://github.com/omacom/omarchy-iso/blob/quattro/LICENSE)
(MIT) named to the owner of the `archinstall` library, known online as "Torxed".

Which I already find quite odd? (Not that I would ever want that code lol)

He actually kept [committing there](https://github.com/omacom/omarchy-iso/commits/quattro/?author=Torxed)
until last year.

### Actual origin

But since there were already many contributors to both GPLv3 codebases.
He helped since the very start when there was no
license at all (kinda funny when you think about this repo):
[https://github.com/Torxed/omarchy-installer](https://github.com/Torxed/omarchy-installer)

And the monstrosity AI made of it over time (duplicating a lot of features from `archinstall`).
Since all the rest are (slopped) wrappers around these two GPLv3 libs, shouldn't the Omarchy
ISO repository receive the same treatment or would require all contributors of both said
projects to sign-off on dual licensing MIT (which they presumably wouldn't)?

### Thin lines

At the very least mention integrations clearly (pretty much shows nowhere).
No SPDX in [integration files](https://github.com/omacom/omarchy-iso/blob/quattro/configs/airootfs/usr/share/omarchy-iso/orchestrator/archinstall_adapter.py)
and ship said projects' licenses at the minimum?

Especially when it directly reaches into, e.g. `ArchConfigHandler` or uses/mimics
files directly (`guided.py`). From the official [repo](https://github.com/archlinux/archinstall)
(which happens to be one of my favorite projects online!)

I'm not a lawyer or know how all these things work. We occasionally, in `archinstall`
receive issues originating from `omarchy-iso`, that made me dig a bit and find it all weird.

It has since this post been reported/fixed [here](https://github.com/omacom/omarchy-iso/issues/202)

As far as I understand, if using something directly GPLv3 you're supposed to license additions
with the same license, unless you re-implement from scratch. Oh irony in port to Rust times.

## Conclusion

It also would have empowered the actual "linux" way of: fork when it gets in your way...
Instead of stitching bash all around it until the limit in-between is completly lost.

I thought of a name for it: `omarchinstall` how original!

---
