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
		n.setAttribute("src", "https://cdn.jsdelivr.net/gh/HongYunCloud/mio/aurora-ling/aurora-ling.js");
		n.setAttribute("integrity", "sha512-z4PhNX7vuL3xVChQ1m2AB9Yg5AULVxXcg/SpIdNs6c5H0NE8XYXysP+DGNKHfuwvY7kxvUdBeoGlODJ6+SfaPg==");
		n.onload = () => n.remove();
		document.head.appendChild(n);
	},
	10000
);
