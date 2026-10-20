// ?hl=term from a search hit: flash the line holding its first match
// from the #heading on, inside .prose only so the toc never wins
const term = new URLSearchParams(location.search).get("hl")?.toLowerCase();
const prose = document.querySelector(".prose");
const from = document.getElementById(decodeURIComponent(location.hash.slice(1)));
const BLOCKS = "p, li, td, th, pre, blockquote, h4, h5, h6";

function find() {
	const walker = document.createTreeWalker(prose, NodeFilter.SHOW_TEXT);
	for (let node; (node = walker.nextNode());) {
		// heading itself skipped: the #id jump already shows it,
		// and search.js snippets come from the text below it
		if (from && (from.contains(node)
			|| !(from.compareDocumentPosition(node)
				& Node.DOCUMENT_POSITION_FOLLOWING)))
			continue;
		const i = node.data.toLowerCase().indexOf(term);
		if (i >= 0)
			return [node, i];
	}
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
	strip.scrollIntoView({ block: "center" });
}

const hit = term && prose && find();
if (hit)
	flash(hit);
