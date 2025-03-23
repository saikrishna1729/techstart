/**
 * Footer Text Override Script
 *
 * Ensures the footer always displays the correct branding.
 * This is a failsafe mechanism that runs on the client-side.
 */

(function () {
	// The correct branding
	const siteName = "techstart.cloud";
	const currentYear = new Date().getFullYear();
	const correctCopyrightText = `© ${currentYear} ${siteName}. All rights reserved.`;

	// Text patterns to identify and replace
	const textPatterns = [/saikrishna nagisetti/i, /© \d{4}.*rights reserved/i];

	// Updates the footer text
	function updateFooterText() {
		// Find footer paragraphs
		const footerElements = document.querySelectorAll("footer p");

		footerElements.forEach((element) => {
			if (!element.textContent) return;

			// Check if this element matches our patterns
			const needsReplacement = textPatterns.some((pattern) =>
				pattern.test(element.textContent)
			);

			if (needsReplacement && !element.hasAttribute("data-override-applied")) {
				// Mark as processed to avoid repeated updates
				element.setAttribute("data-override-applied", "true");
				element.innerHTML = correctCopyrightText;
			}
		});
	}

	// Run when DOM is ready
	document.addEventListener("DOMContentLoaded", updateFooterText);

	// Also run after full load
	window.addEventListener("load", updateFooterText);
})();
