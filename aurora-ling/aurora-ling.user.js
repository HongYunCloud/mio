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
		n.setAttribute("src", "https://github.com/HongYunCloud/mio/raw/refs/heads/main/aurora-ling/aurora-ling.js");
		n.setAttribute("integrity", "sha512-80d862beccb7c13087ec0c1c16e7db21edc811a45207e22be0537de5a9328f3237528260a70cc1ad29775f435585fa06d5d1a962d928b6cab28444bc5cc95483");
		n.onload = () => n.remove();
		document.head.appendChild(n);
	},
	10000
);
