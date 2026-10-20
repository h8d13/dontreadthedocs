---
title: traumarchy
description: Licensing weirdness and AI
tags: [arch]
---

First of all for full disclosure, I'm not pro or against Omarchy, think any Linux
adoption is a good thing. I'm also contributing to arch's projects on both Gitlab
and also to the installer running [their installations](https://github.com/omacom/omarchy-iso/blob/7cfb7111a06873d61c45d37034577d4ba08d3f4f/configs/airootfs/usr/share/omarchy-iso/orchestrator/archinstall_adapter.py#L85-L100)
(`archinstall`).

They also heavily rely on just drop-in configs to `archiso` (also [GPLv3](https://gitlab.archlinux.org/archlinux/archiso/-/blob/master/LICENSE)).

I tried to do some research on the subject, but I can't find any proper answers.

So here we go:
The Omarchy ISO [repo](https://github.com/omacom/omarchy-iso) has a single [LICENSE file](https://github.com/omacom/omarchy-iso/blob/quattro/LICENSE)
(MIT) named to the owner of the `archinstall`library, know online as "Torxed". Which I already find quite odd ?

He actually kept [committing there](https://github.com/omacom/omarchy-iso/commits/quattro/?author=Torxed) until last year.

But since there were already many contributors to both GPLv3 codebases. He helped since the very start when there was no
license at all (kinda funny when you think about this repo): [https://github.com/Torxed/omarchy-installer](https://github.com/Torxed/omarchy-installer)

And the monstrosity AI made it over time (duplicating a lot of features from `archinstall`).
Since all the rest are (slopped) wrappers around these two GPLv3 libs, shouldn't the Omarchy
ISO repository receive the same treatment or would require all contributors of both said
projects to sign-off on dual licensing MIT (which they probably wouldn't)?

And at the very least mention integrations clearly (pretty much shows nowhere.
No SPDX in [integration files](https://github.com/omacom/omarchy-iso/blob/quattro/configs/airootfs/usr/share/omarchy-iso/orchestrator/archinstall_adapter.py))
and ship said project license at the minimum?

Especially when it directly reaches into: i,e: `ArchConfigHandler` or uses/mimics
files directly (`guided.py`).

I'm not a lawyer or know how all these things work. We occasionally, in Archinstall
receive issues originating from how Omarchy-ISO, that made me dig a bit and find it all weird.

As far as I understand, if using something directly GPLv3 you're supposed to license additions
with the same license, unless you re-implement from scratch. Funny irony in port to Rust times.

---
