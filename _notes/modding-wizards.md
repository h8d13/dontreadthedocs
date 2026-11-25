---
date: 2026-11-25
title: Modding Wizards
description: How unpaid wizards are spat on.
tags: [modding]
---

## Abstract

> **wizard**, n. A person who knows how a complex piece of software or hardware works
> (that is, who [groks][grok-wiki] it); esp. someone who can find and fix bugs quickly
> in an emergency.
>
> [The Jargon File][wizard-jargon]

The word fits modding better than it seems. In [MUD1][mud1-wiki], the first multi-user
text adventure, wizard was the debug mode its two authors used to test new rooms, before
it became [a rank players could earn][wizard-mud]: a user holding the powers of a developer.

![MUD1 screenshot](https://upload.wikimedia.org/wikipedia/en/6/64/MUD1_screenshot.gif)

The world of gaming has always **relied on its users**. This is a strong idea by itself.

After all, they are the ones paying the product at first
and **keeping it alive** as they play and **build around common interests**.

Cf: Minecraft mods that became part of the game. Bethesda modders fixing bugs on release.
Because they wanted to play one of their favorite titles, **on their own terms.**

Similarly, GTA is no different: Fusion Fix became the standard way to play GTA IV.
Bugstar (or GamePlayFixes) for V... Anyways the idea is that a game always has rough edges...

ARMA players creating dozens of gamemodes (Enfusion is one of the rare projects that does
**recognize the value this has**, holding contests and community modding tutorials/discourse)

Including: DayZ, Battle royales/KOTH, Roleplay, Flightschool...
Which keeps players on the game engaged, by **what they like**.

Providing their users with infrastructure to load custom servers, hosting, browsing mods...

And like any good software, dogfooding issues can only be achieved with thorough
testing and incremental fixes for identified parts that are problematic.

For instance, in ARMA reforger, my main annoyance was the lack of a melee system.
Blocking, heavy hits, standard fist fighting outside of melee weapons. ([Mod link][arma-r-mod])

Which then, gets implemented **by a wizard** and used across many popular servers.

## Spitting on the free work

Most modding is treated as "outside warranty" work: external changes that the
publisher never endorses, however much the community enjoys them.

Whether it's QOL, fixes, or added functionality doesn't really matter.

What does matter on the other hand is how releasing on specific platforms only
is used as a monetisation weapon. I.e. forcing you to buy a console, while
your perfectly fine working gaming PC is held back, on purpose, to sell you
hardware you probably did not even want.

## It carried you for 13 years

Basically, if it wasn't for GTA V online modders, the game would have died out.
Not that people wouldn't have relaunched it once in a while, doing the story for the 20th
time. But that there would not have been hundreds of thousands of players and viewers,
playing daily for so long, without FiveM's communities, and their tinkerers.

Imagine a release where they provide these tools to empower the user. Where it is
supported within reason. This then changes the whole dynamic of user generated/centric games.

This is not hypothetical, it is what Valve did with [Garry's Mod][gmod-wiki]. It started
in December 2004 as a free Half-Life 2 mod by one person. Instead of sending lawyers,
Valve put it on Steam in November 2006 for $10 and split the profits with its author.
Its users then did the rest: Prop Hunt, TTT, DarkRP and hundreds of other gamemodes
are all community work, and the mod went on to sell
[over 25 million copies][gmod-25m].

Its successor [s&box][sbox-wiki] pushes the same logic further. Valve licensed Source 2
to Facepunch, the first time a third party got it. Facepunch then put its own code
[on GitHub under MIT][sbox-oss] (Valve's engine part stays closed), lets creators export
what they build as standalone Steam games without taking royalties, and
[pays the people making games on the platform][sbox-pay], $500,000 so far by its
own count. It launched on Steam on [April 28, 2026][sbox-release].

And it is still how Valve recruits. Counter-Strike, Team Fortress and Dota 2 all exist
because Valve hired the people who made the mods. In August 2026 that pattern was
[reported for Deadlock][deadlock-hire]: Kirill Senzu, a 3D artist known for fan
[redesigns of Yamato][deadlock-mod] and Holiday, was brought on to work on the game
itself. Valve has not confirmed it, and it may be freelance rather than a staff job,
but the direction is the point: the wizard gets a contract, not a cease and desist.

Same starting point as FiveM, a hobbyist bolting things onto somebody else's game.
One publisher answered with a storefront and a revenue split, the other with bans.

## Re-fucking yourself.

Then releasing on console only while that delays their magical free work...
And honestly will just create more piracy that has the game already running.

### Case study: FiveM, from banned to bought

The GTA V multiplayer mod FiveM is the cleanest example of the full cycle:
ban it, threaten it, watch it outgrow you, then buy it.

**2015: the ban.** In August 2015 the people behind FiveM had their Social Club
accounts suspended. Rockstar's line was that the project was designed to
facilitate piracy. In November, lead dev NTAuthority wrote on Reddit that two
private investigators turned up at his home, said Take-Two sent them, and handed
him a phone with a Take-Two representative who wanted the mod stopped "without
lawyers". The account is his own and was never independently verified, but
public development of FiveM stopped, and so did the competing GTA:MP project.
([PC Gamer][pi-pcgamer], [GameSpot][pi-gamespot], [Daily Dot][pi-dailydot])

**2017: OpenIV.** Take-Two sent a cease and desist to OpenIV, the tool most
single-player GTA mods depend on. The team complied and shut down. The community
answered with a wave of negative Steam reviews, and within days Take-Two backed
off. The outcome is the policy still quoted today: Take-Two "generally will not
take legal action" against projects that are single-player, non-commercial and
respect third-party IP. Note the "generally": it is a tolerance, not a right.
([PC Gamer][openiv-pcgamer], [GameSpot][openiv-gamespot], [TechRadar][openiv-techradar])

**2021: re3 / reVC.** The reverse-engineered GTA III and Vice City got a DMCA
takedown on GitHub. The devs filed counter-notices arguing fair use, the repos
came back, and Take-Two sued them. The repos were removed a second time. One of
the complaints was that the projects let the games run on platforms where they
had never been released, which is exactly the point made above about exclusivity
as a weapon. The suit was later dismissed.
([TorrentFreak][re3-tf], [PC Gamer][re3-pcgamer], [PC Gamer, dismissal][re3-dismissed])

**2023: the purchase.** Meanwhile FiveM kept going, and GTA RP on Twitch turned
it into the main reason a ten-year-old game stayed relevant. On August 11, 2023
Rockstar announced that Cfx.re, the team behind FiveM and RedM, was "now
officially a part of Rockstar Games". Same mod, same founder, eight years after
the ban.
([PC Gamer][buy-pcgamer], [Techdirt][buy-techdirt], [GameSpot][buy-gamespot], [Wccftech][buy-wccftech])

**After.** The promise was that day to day nothing would change. What did
change: a new Platform License Agreement with copyright clauses, aimed at
servers using real-world car brands and assets ripped from other games. In
February 2025 the insider Tez2 and community members alleged a messy internal
takeover, with the core developers sidelined and most of them gone from the
company, the founder included. These are allegations, neither Rockstar nor
Cfx.re confirmed them.
([Rockstar Intel][after-intel], [Gameranx][after-gameranx], [Sportskeeda][after-sk])

So the wizards worked for free for eight years, under legal threat for part of
it. The value they created was real enough to be acquired, **but never real
enough to be acknowledged while they were building it.**

[pi-pcgamer]: https://www.pcgamer.com/take-two-reportedly-sent-private-investigators-to-modders-home
[pi-gamespot]: https://www.gamespot.com/articles/gta-5-modder-claims-private-investigators-visited-/1100-6432144/
[pi-dailydot]: https://dailydot.com/take-two-interactive-shuts-down-grand-theft-auto-online-modders
[openiv-pcgamer]: https://pcgamer.com/gta-modding-tool-openiv-shuts-down-claiming-cease-and-desist-from-take-two
[openiv-gamespot]: https://www.gamespot.com/articles/after-angering-gta-5-fans-rockstar-releases-new-st/1100-6451151
[openiv-techradar]: https://techradar.com/news/take-two-pulls-tire-screeching-u-turn-lifting-ban-on-gta-v-modding-tool
[re3-tf]: https://torrentfreak.com/take-two-sues-enthusiasts-behind-gta-fan-projects-re3-revc-210903/
[re3-pcgamer]: https://www.pcgamer.com/grand-theft-auto-modders-that-tried-to-get-around-a-dmca-claim-get-walloped-with-take-two-lawsuit
[re3-dismissed]: https://www.pcgamer.com/take-two-dismisses-lawsuit-against-grand-theft-auto-modders
[buy-pcgamer]: https://pcgamer.com/rockstar-buys-the-makers-of-the-gta-online-fivem-mod-it-banned-8-years-ago
[buy-techdirt]: https://www.techdirt.com/2023/08/14/rockstar-scoops-up-modding-roleplay-communities-in-a-departure-from-previous-policy
[buy-gamespot]: https://gamespot.com/articles/rockstar-acquires-gta-role-playing-community-as-gta-6-continues-development/1100-6516790/
[buy-wccftech]: https://wccftech.com/previously-banned-gta-5-fivem-and-rdr2-redm-creators-are-now-part-of-rockstar-games/amp/
[after-intel]: https://rockstarintel.com/problems-exposed-at-fivem-after-rockstar-games-acquisition-its-claimed/
[after-gameranx]: https://gameranx.com/updates/id/529086/article/rumor-gta-roleplay-server-fivem-victim-of-hostile-takeover-and-one-of-rockstars-own-is-involved/
[after-sk]: https://sportskeeda.com/gta/news-popular-gta-5-rp-server-fivem-reportedly-suffers-management-issues
[gmod-wiki]: https://en.wikipedia.org/wiki/Garry%27s_Mod
[gmod-25m]: https://gamesradar.com/platforms/pc-gaming/garrys-mod-dev-says-he-didnt-want-to-sell-it-originally-because-no-one-would-pay-for-it-25-million-copies-later-he-admits-he-was-wrong
[sbox-wiki]: https://developer.valvesoftware.com/wiki/S%26box
[sbox-oss]: https://www.pcgamer.com/gaming-industry/garrys-mod-successor-s-and-box-goes-open-source-and-even-opens-up-the-finances-garry-says-valve-gave-me-my-chance-im-already-rich-i-dont-want-to-f-ck-anyone-over
[sbox-pay]: https://www.pcgamer.com/games/rpg/we-dont-have-to-fire-1000-people-to-keep-it-working-facepunch-studios-says-paying-s-and-box-game-developers-is-sustainable-with-usd500-000-paid-out-to-date/
[sbox-release]: https://www.pcgamer.com/games/garrys-mod-successor-s-and-box-finally-arrives-on-steam-on-april-28
[deadlock-hire]: https://x.com/gabefollower/status/2088943036378026020
[deadlock-mod]: https://deadlocker.net/mod/mod_1749656103483
[wizard-jargon]: http://www.catb.org/jargon/html/W/wizard.html
[grok-wiki]: https://en.wikipedia.org/wiki/Grok
[mud1-wiki]: https://en.wikipedia.org/wiki/MUD1
[wizard-mud]: https://mud.co.uk/richard/mudhist.htm
[arma-r-mod]: https://reforger.armaplatform.com/workshop/6595113A3678CF5D-MeleeCombatExtended
---
