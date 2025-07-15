export function cleanGoogleTranslateArtifacts() {
	const badFontSelector = 'font[class^="VIpgJd-"]';
	document.querySelectorAll(badFontSelector).forEach((el) => {
		const parent = el.parentNode;
		if (parent && el.childNodes.length > 0) {
			el.childNodes.forEach((child) => parent.insertBefore(child, el));
			parent.removeChild(el);
		}
	});

	// Supprime les classes Google Translate sur <html>
	document.documentElement.classList.remove('translated-ltr', 'translated-rtl');
}
