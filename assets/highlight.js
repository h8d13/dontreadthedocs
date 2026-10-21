// ?hl=term&in=id&n=k from a search hit: flash the line holding match k
// from heading id on, inside .prose only so the toc never wins
const params = new URLSearchParams(location.search);
const term = params.get("hl")?.toLowerCase();
const prose = document.querySelector(".prose");
const from = document.getElementById(params.get("in") ?? "");
const nth = Number(params.get("n")) || 0;
const BLOCKS = "p, li, td, th, pre, blockquote, h4, h5, h6";

// counted per text node, search.js counts in joined text: a term split
// across nodes (highlighter spans) drifts, so fall back to the last one
function find() {
	const walker = document.createTreeWalker(prose, NodeFilter.SHOW_TEXT);
	// walk resumes in document order from the heading, filter or not
	if (from)
		walker.currentNode = from;
	let left = nth;
	let last;
	for (let node; (node = walker.nextNode());) {
		// heading itself skipped: search.js counts the text below it
		if (from?.contains(node))
			continue;
		const low = node.data.toLowerCase();
		for (let i = low.indexOf(term); i >= 0;
			i = low.indexOf(term, i + term.length)) {
			last = [node, i];
			if (left-- === 0)
				return last;
		}
	}
	return last;
}

// overlay over the match's line box: wrapped lines and pre lines have
// no element of their own, so the block only gives the horizontal span
function flash([node, i]) {
	const range = document.createRange();
	range.setStart(node, i);
	range.setEnd(node, i + term.length);
	const line = range.getClientRects()[0];
	const block = (node.parentElement.closest(BLOCKS) ?? prose)
		.getBoundingClientRect();
	const strip = document.createElement("div");
	strip.className = "flash";
	Object.assign(strip.style, {
		left: block.left + scrollX + "px",
		top: line.top + scrollY + "px",
		width: block.width + "px",
		height: line.height + "px",
	});
	strip.addEventListener("animationend", () => strip.remove());
	document.body.append(strip);
	// instant: smooth (html scroll-behavior) is dropped this early
	strip.scrollIntoView({ block: "center", behavior: "instant" });
}

// no match (stale shard): still land on the section
const hit = term && prose && find();
if (hit)
	flash(hit);
else
	from?.scrollIntoView({ behavior: "instant" });
