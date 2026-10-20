// note shown if it has every term, sections listed if they have any.
// shards are months, newest first: older ones only fetched while
// fewer than LIMIT notes matched, or on "older months".
const input = document.querySelector(".search");
const empty = document.querySelector(".search-empty");
const results = document.querySelector(".results");
const more = document.querySelector(".more");
const listing = document.querySelector(".listing");
const shards = JSON.parse(input.dataset.shards);
const LIMIT = 20;
const MAX_HITS = 3;
const CONTEXT = 40;
const loaded = new Map();
let run = 0;
let next = 0;
let terms = [];

function el(tag, className, ...children) {
	const e = document.createElement(tag);
	e.className = className;
	e.append(...children);
	return e;
}

function split(note) {
	const doc = new DOMParser().parseFromString(note.html, "text/html");
	const sections = [{ id: "", title: "", text: "" }];
	for (const child of doc.body.children) {
		if (/^H[1-3]$/.test(child.tagName) && child.id)
			sections.push({ id: child.id, title: child.textContent,
				text: "" });
		else
			sections.at(-1).text += " " + child.textContent;
	}
	for (const s of sections) {
		s.text = s.text.replace(/\s+/g, " ").trim();
		s.low = (s.title + " " + s.text).trim().toLowerCase();
	}
	const tags = note.tags ?? [];
	const all = [note.title, note.desc, ...tags, ...sections.map((s) => s.low)]
		.join(" ").toLowerCase();
	return { ...note, tags, all, sections: sections.filter((s) => s.low) };
}

function load(url) {
	if (!loaded.has(url))
		loaded.set(url, fetch(url).then((r) => r.json())
			.then((notes) => notes.map(split)));
	return loaded.get(url);
}

function snippet(s) {
	const low = s.text.toLowerCase();
	const term = terms.find((t) => low.includes(t));
	// hit was in the heading only
	if (!term)
		return "";
	const i = low.indexOf(term);
	const start = Math.max(0, i - CONTEXT);
	const end = Math.min(s.text.length, i + term.length + CONTEXT);
	return el("span", "desc",
		(start > 0 ? "…" : "") + s.text.slice(start, i),
		el("mark", "", s.text.slice(i, i + term.length)),
		s.text.slice(i + term.length, end)
			+ (end < s.text.length ? "…" : ""));
}

function link(href, ...children) {
	const a = el("a", "", ...children);
	a.href = href;
	return a;
}

// ?hl= is picked up by highlight.js on the note page
function hit(note, s) {
	const term = terms.find((t) => s.low.includes(t));
	const href = note.url + "?hl=" + encodeURIComponent(term)
		+ (s.id && "#" + s.id);
	return el("li", "", link(href,
		el("span", "title", s.title || "Intro"), snippet(s)));
}

// same markup as _includes/cards.html
function card(note) {
	const tags = note.tags.map((t) => el("span", "tag", t));
	const hits = note.sections
		.filter((s) => terms.some((t) => s.low.includes(t)))
		.slice(0, MAX_HITS)
		.map((s) => hit(note, s));
	return el("li", "",
		link(note.url,
			el("span", "title", note.title),
			note.desc ? el("span", "desc", note.desc) : "",
			el("span", "meta", note.date,
				tags.length ? el("span", "tags", ...tags) : "")),
		hits.length ? el("ul", "hits", ...hits) : "");
}

async function fill(id) {
	more.hidden = true;
	let added = 0;
	while (next < shards.length && added < LIMIT) {
		const notes = await load(shards[next]);
		// a newer keystroke took over
		if (id !== run)
			return;
		next++;
		for (const note of notes) {
			if (!terms.every((t) => note.all.includes(t)))
				continue;
			results.append(card(note));
			added++;
		}
	}
	more.hidden = next >= shards.length;
	empty.hidden = results.children.length > 0;
}

input.addEventListener("input", () => {
	const id = ++run;
	terms = input.value.toLowerCase().split(/\s+/).filter(Boolean);
	next = 0;
	results.replaceChildren();
	listing.hidden = terms.length > 0;
	results.hidden = !listing.hidden;
	more.hidden = empty.hidden = true;
	if (terms.length)
		fill(id);
});

more.addEventListener("click", () => fill(run));
