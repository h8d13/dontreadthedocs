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

> Funnily enough, both terms are also tied to hacking in video games, since such powers
> can be abused in live play. A "modder" or "wizard" can also mean someone with special
> capabilities that a regular player does not have access to.

![MUD1 screenshot](https://upload.wikimedia.org/wikipedia/en/6/64/MUD1_screenshot.gif)

The world of gaming has always **relied on its users**. This is a strong idea by itself.

After all, they are the ones paying for the product at first
and **keeping it alive** as they play and **build around common interests**.

Before a game has any team for it, its users are the perfect QA, beta testers and PMs.
Simply because they consume what was produced, unlike a paid dev that works towards
a consumable product. Their ideas for enhancements come from **candid gameplay.**

## Examples

Cf: Minecraft mods that became part of the game.
[Bethesda modders fixing bugs on release][bethesda-yt]
(see also [The Absolute Chaos of Bethesda][bethesda-chaos]).
Because they wanted to play one of their favorite titles, **on their own terms.**

ARMA players creating dozens of gamemodes (Enfusion is one of the rare projects that does
**recognize the value this has**, holding contests and community modding tutorials/discourse).

Including: DayZ, Battle Royale/KOTH, Roleplay, Flight School...
Which keeps players on the game engaged, by **what they like**.

Providing their users with infrastructure to load custom servers, hosting, browsing mods...
Even tooling to build them directly.

And like any good software, dogfooding issues can only be achieved with thorough
testing and incremental fixes for identified parts that are problematic.

For instance, in ARMA Reforger, my main annoyance was the lack of a melee system.
Blocking, heavy hits, standard fist fighting outside of melee weapons. ([Mod link][arma-r-mod])

Which then gets implemented **by a wizard** and used across many popular servers.

## Spitting on the free work

Most modding is treated as "outside warranty" work: external changes that the
publisher never endorses, however much the community enjoys them.

Whether it's QOL, fixes, or added functionality doesn't really matter.

What does matter on the other hand is how releasing on specific platforms only
is used as a monetisation weapon. I.e. forcing you to buy a console, while
your perfectly fine working gaming PC is held back, on purpose, to sell you
hardware you probably did not even want.

And how this external work is deemed "not wanted" whilst it might be the very thing
a normal user would want.

## It carried you for 13 years

Similarly, GTA is no different: [Fusion Fix][fusionfix] became the standard way to
play GTA IV. Bugstar (or [GameplayFixesV][gameplayfixes]) for V...
The idea is that a product always has rough edges...

Basically, if it wasn't for GTA V online modders, the game would have died out.
Not that people wouldn't have relaunched it once in a while, doing the story for the 20th
time. But that there would not have been hundreds of thousands of players and viewers,
playing daily for so long, without FiveM's communities, and their tinkerers.

And it is still going: one wizard
[asked streamers for weird GTA V mod ideas, then made all of them][blurbs-yt].

Same on Red Dead Redemption 2. The Nemesis System, where enemies remember you and
come back for revenge, was invented for Shadow of Mordor in 2014, then patented by
Warner Bros. and kept out of other games. In 2026 a single modder
[rebuilt it for RDR2's story mode][rdr2-nemesis-gr] as [enRage][rdr2-nemesis]:
every NPC gets a name and a memory, and the one you robbed may hunt you down later.

## Let them reach the engine

"Modding" makes people think of extras: skins, maps, a funny car. The mods that
change a game go deeper, and every one of them needs the internals of the engine.

On GTA and Red Dead that access is unofficial. Nearly every script mod sits on a
community-made hook into the game's own functions, and each official patch breaks it
until a volunteer repairs it. Wizards have to **fight the game** before they can improve it.

In game-hacking terms such a hook is an "internal": code injected into the running game
that calls its functions directly. An "external" stays in a separate process and only
reads and writes the game's memory through known offsets.

Imagine a release where they **provide these tools to empower the user.** Where it is
supported within reason. This then changes the whole dynamic of user-generated/centric games.

The deeper the access, the better the experience players get back, and you can touch
the internals without fearing you're doing something wrong.

## More of the same

Valve already did exactly this with [Garry's Mod][gmod-wiki]: a free
Half-Life 2 mod from 2004 that Valve put on Steam in 2006, splitting the profits with
its author. Its users did the rest (Prop Hunt, TTT, DarkRP) and it went on to sell
[over 25 million copies][gmod-25m].

Its successor [s&box][sbox-wiki] goes further. Valve licensed Source 2 to Facepunch,
which put its own code [on GitHub under MIT][sbox-oss], takes no royalties on games
exported to Steam, and [pays the people building on the platform][sbox-pay]. It
[launched in April 2026][sbox-release].

The project is quite active on GitHub and I reckon the quality of the tools to create
must have improved tenfold, since making it open. And it is still how Valve recruits.
Counter-Strike, Team Fortress and Dota 2 all exist because Valve **hired the people
who made the thing.**

In August 2026 that pattern was [reported for Deadlock][deadlock-hire]: Kirill Senzu,
known for fan [redesigns of Yamato][deadlock-mod] and Holiday, was brought on to work
on the game itself. Unconfirmed by Valve, and maybe freelance, but the direction is
the point: the wizard gets a contract.

Same starting point as FiveM, a hobbyist bolting things onto somebody else's game.
One publisher answered with a storefront and a revenue split, the other with bans.

To be fair, Valve is no saint either. In 2025 it
[rejected Classic Offensive][co-rejected], a Counter-Strike 1.6 remake inside CS:GO,
after eight years of work, then sent a cease and desist that
[killed the project][co-cancelled]. Its successor [CS:Legacy][cs-legacy] froze after
a message from Valve. Tolerance lasts only as long as the publisher allows.

## Re-fucking yourself

Then releasing on console only while that delays their magical free work...
And honestly will just create more piracy that has the game already running.

As much as I'm against piracy when it comes to video games, and AI usage on
said subject... This one is kinda deserved. Gatekeeping the PC version is
a choice, and nobody forced them to make this decision.

GTA VI came out on November 19, 2026, on PS5 and Xbox Series only.
[No PC version, no date for one][gta6-nopc]. Take-Two's CEO put it plainly:
"Rockstar always starts on console".

There is a name for this: **double-dipping**. GTA V was sold on PS3 and Xbox 360
in 2013, again on PS4 and Xbox One in 2014, on PC in 2015, and once more on PS5
in 2022. Red Dead Redemption 2 made PC wait a year.

Sell it to the impatient on console first, then sell it to them a second time on
the machine they wanted it on. A console copy has never counted towards the PC one,
and the PS4 to PS5 upgrade [only became free][gta5-upgrade] in June 2026, four years
after that version went on sale.

The console is the other half of the trick: a **walled garden**. No file access, no
script hooks, no custom servers, nothing runs unless the platform holder signed it.

The PC release is the only version a wizard can open. Delaying it delays every fix,
every gamemode and every RP server by the same amount. The very thing that carried
the last game for 13 years is told to wait outside.

And walls get climbed. Within a week of launch a leaked Xbox build was
[booting on PC][gta6-boot], reverse-engineered with AI tools, while
[rival ports raced each other][gta6-race]. Take-Two had a reported
[3,000 GitHub repositories][gta6-purge] taken down. The PC audience gets a pirate
build at single-digit framerates, and the publisher a piracy problem it scheduled
itself.

I figure pirates will be playing it before December at a playable framerate.

### Case study: FiveM, from banned to bought

The GTA V multiplayer mod FiveM is the cleanest example of the full cycle:
ban it, threaten it, watch it outgrow you, then buy it (out of panic).

**Before FiveM.** The story starts long before GTA V. GTA III shipped without online
play, and by 2003 [Multi Theft Auto][mta-wiki] had bolted it on. Then came
[San Andreas Multiplayer][samp-wiki], whose scripting engine let server owners write
their own gamemodes. That is [where GTA roleplay was invented][samp-intel], years
before streaming was as popular. FiveM inherited a genre that wizards had already
built for free.

**2015: the ban.** In August the people behind FiveM had their Social Club accounts
suspended, the project accused of facilitating piracy. In November, lead dev
NTAuthority wrote that two private investigators turned up at the door, with a
Take-Two representative on the phone asking for the mod to stop "without lawyers".
The account was never independently verified, but public development stopped, and
so did the competing GTA:MP project.
([PC Gamer][pi-pcgamer], [GameSpot][pi-gamespot], [Daily Dot][pi-dailydot])

**2017: OpenIV.** Take-Two sent a cease and desist to OpenIV, the tool most
single-player mods depend on. The team shut down, the community review-bombed the
game on Steam, and within days Take-Two backed off. The resulting policy is still
quoted today: Take-Two "generally will not take legal action" against single-player,
non-commercial projects. Note the "generally": mods live at Take-Two's discretion.
([PC Gamer][openiv-pcgamer], [GameSpot][openiv-gamespot], [TechRadar][openiv-techradar])

**2021: re3 / reVC.** The reverse-engineered GTA III and Vice City got a DMCA
takedown on GitHub. The devs filed counter-notices, the repos came back, and
Take-Two sued. One complaint was that the projects let the games run on platforms
where they had never been released: exclusivity as a weapon, again. The suit was
later dismissed.
([TorrentFreak][re3-tf], [PC Gamer][re3-pcgamer], [PC Gamer, dismissal][re3-dismissed])

**2021: the old mods.** The same summer, DMCA notices cleared out mods for the
PS2-era games, some fifteen years old: Vice Cry, GTA: Liberty City, the Stories PC
ports. GTA: Underground shut down after six years citing "increasing hostility"
from Take-Two. No reason was ever given. A few months later the official remasters
of those very titles went on sale.
([PC Gamer][mods21-pcgamer], [Kotaku][mods21-kotaku], [Kotaku, Underground][mods21-under])

**2023: the purchase.** Meanwhile GTA RP on Twitch turned FiveM into the main reason
a ten-year-old game stayed relevant. On August 11, 2023 Rockstar announced that
Cfx.re, the team behind it, was "now officially a part of Rockstar Games". Same mod,
same founder, eight years after the ban.
([PC Gamer][buy-pcgamer], [Techdirt][buy-techdirt], [GameSpot][buy-gamespot], [Wccftech][buy-wccftech])

**After.** The promise was that nothing would change. What did: a new license
agreement with copyright clauses aimed at servers using real-world car brands. In
February 2025 community members alleged a messy internal takeover, with the core
developers sidelined and the founder gone. Allegations only: neither Rockstar nor
Cfx.re confirmed them.
([Rockstar Intel][after-intel], [Gameranx][after-gameranx], [Sportskeeda][after-sk])

**2025: back to the start.** In December Take-Two filed a DMCA notice against Multi
Theft Auto's GitHub repository, claiming leaked source code. The developers filed a
counter-notice and GitHub [restored it][mta-tf] once Take-Two failed to sue. A
22-year-old mod, tolerated for two decades, then targeted anyway.

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
[mods21-pcgamer]: https://www.pcgamer.com/take-two-has-been-issuing-takedowns-for-gta-mods
[mods21-kotaku]: https://kotaku.com/take-two-is-removing-old-gta-mods-using-dmca-notices-1847315391
[mods21-under]: https://kotaku.com/ambitious-gta-underground-mod-shutdowns-after-six-years-1847619249
[gta5-upgrade]: https://www.videogameschronicle.com/news/rockstar-is-giving-last-gen-gta-5-owners-a-free-upgrade/
[gta6-nopc]: https://godisageek.com/2026/05/gta-6-skips-pc-at-launch-consoles-come-first/
[gta6-boot]: https://www.techradar.com/gaming/unofficial-gta-6-pc-port-makes-rapid-progress-in-just-24-hours-game-is-now-bootable-in-historic-moment-but-scammers-will-have-a-field-day-here
[gta6-race]: https://kotaku.com/gta-6-leaker-cyberleek-claims-to-have-to-released-exe-file-that-could-lead-to-unofficial-pc-port-2000759529
[gta6-purge]: https://gta6.house/news/gta-6-unofficial-pc-ports-take-two-takedown
[mta-wiki]: https://en.wikipedia.org/wiki/Multi_Theft_Auto
[samp-wiki]: https://www.grandtheftwiki.com/San_Andreas_Multiplayer
[samp-intel]: https://gtaintel.com/news/san-andreas-multiplayer-in-2026
[mta-tf]: https://torrentfreak.com/github-restores-repo-of-gta-mod-multi-theft-auto-after-take-two-fails-to-sue/
[buy-pcgamer]: https://pcgamer.com/rockstar-buys-the-makers-of-the-gta-online-fivem-mod-it-banned-8-years-ago
[buy-techdirt]: https://www.techdirt.com/2023/08/14/rockstar-scoops-up-modding-roleplay-communities-in-a-departure-from-previous-policy
[buy-gamespot]: https://gamespot.com/articles/rockstar-acquires-gta-role-playing-community-as-gta-6-continues-development/1100-6516790/
[buy-wccftech]: https://wccftech.com/previously-banned-gta-5-fivem-and-rdr2-redm-creators-are-now-part-of-rockstar-games/amp/
[after-intel]: https://rockstarintel.com/problems-exposed-at-fivem-after-rockstar-games-acquisition-its-claimed/
[after-gameranx]: https://gameranx.com/updates/id/529086/article/rumor-gta-roleplay-server-fivem-victim-of-hostile-takeover-and-one-of-rockstars-own-is-involved/
[after-sk]: https://sportskeeda.com/gta/news-popular-gta-5-rp-server-fivem-reportedly-suffers-management-issues
[blurbs-yt]: https://youtu.be/d3Cqu0Xskag
[rdr2-nemesis-gr]: https://gamerant.com/red-dead-redemption-2-nemesis-system-mod/
[rdr2-nemesis]: https://www.nexusmods.com/reddeadredemption2/mods/10967
[fusionfix]: https://github.com/ThirteenAG/GTAIV.EFLC.FusionFix
[gameplayfixes]: https://github.com/SuleMareVientu/GameplayFixesV-ScriptHookV
[gmod-wiki]: https://en.wikipedia.org/wiki/Garry%27s_Mod
[gmod-25m]: https://gamesradar.com/platforms/pc-gaming/garrys-mod-dev-says-he-didnt-want-to-sell-it-originally-because-no-one-would-pay-for-it-25-million-copies-later-he-admits-he-was-wrong
[sbox-wiki]: https://developer.valvesoftware.com/wiki/S%26box
[sbox-oss]: https://github.com/Facepunch/sbox-public
[sbox-pay]: https://www.pcgamer.com/games/rpg/we-dont-have-to-fire-1000-people-to-keep-it-working-facepunch-studios-says-paying-s-and-box-game-developers-is-sustainable-with-usd500-000-paid-out-to-date/
[sbox-release]: https://www.pcgamer.com/games/garrys-mod-successor-s-and-box-finally-arrives-on-steam-on-april-28
[deadlock-hire]: https://x.com/gabefollower/status/2088943036378026020
[deadlock-mod]: https://deadlocker.net/mod/mod_1749656103483
[wizard-jargon]: http://www.catb.org/jargon/html/W/wizard.html
[bethesda-chaos]: https://www.youtube.com/watch?v=d4vgLoPQSBA
[bethesda-yt]: https://www.youtube.com/watch?v=vkYu3seV9FI
[grok-wiki]: https://en.wikipedia.org/wiki/Grok
[mud1-wiki]: https://en.wikipedia.org/wiki/MUD1
[wizard-mud]: https://mud.co.uk/richard/mudhist.htm
[co-rejected]: https://www.pcgamer.com/games/fps/an-ambitious-counter-strike-mod-to-emulate-the-og-1-6-experience-in-global-offensive-has-been-rejected-by-valve-after-8-years-of-development
[co-cancelled]: https://www.pcgamer.com/games/fps/the-mod-that-aimed-to-recreate-counter-strike-1-6-in-cs-go-is-now-officially-cancelled-following-abrupt-actions-by-valve-that-prevent-us-from-releasing-the-project/
[cs-legacy]: https://www.dust2.us/news/63238/cs-legacy-fan-project-in-danger-of-being-shut-down-by-valve
[arma-r-mod]: https://reforger.armaplatform.com/workshop/6595113A3678CF5D-MeleeCombatExtended
---
