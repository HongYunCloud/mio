// ==UserScript==
// @name aurora-ling
// @namespace https://www.bondageprojects.com/
// @version 1.0
// @description aurora-ling
// @author Razor
// @match https://www.bondage-europe.com/R*
// @grant none
// @run-at document-end
// ==/UserScript==
setTimeout(
	function () {
		let n = document.createElement("script");
		n.setAttribute("language", "JavaScript");
		n.setAttribute("crossorigin", "anonymous");
		n.setAttribute("src", "?_=" + Date.now());
		n.setAttribute("integrity", "sha512-");
		n.onload = () => n.remove();
		document.head.appendChild(n);
	},
	10000
);
