// ==UserScript==
// @name aurora-ling
// @namespace https://www.bondageprojects.com/
// @version 1.0
// @description aurora-ling
// @author Razor
// @downloadURL https://github.com/HongYunCloud/mio/raw/refs/heads/main/aurora-ling/aurora-ling.user.js
// @match https://www.bondage-europe.com/R*
// @grant none
// @run-at document-end
// ==/UserScript==
setTimeout(
	function () {
		let n = document.createElement("script");
		n.setAttribute("language", "JavaScript");
		n.setAttribute("crossorigin", "anonymous");
		n.setAttribute("src", "https://cdn.jsdelivr.net/gh/HongYunCloud/mio@1.0.1/aurora-ling/aurora-ling.js");
		// n.setAttribute("integrity", "sha512-lone7DTl2ZfgRrNBQFQKChylkb7WnOpefMrzlNahs66MM8cTYgOwXl1MPUgZG5reD7PP4hDG2RDe4EWLQOPW9A==");
		n.onload = () => n.remove();
		document.head.appendChild(n);
	},
	10000
);
