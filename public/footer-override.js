// This script uses a MutationObserver to watch for any changes to the DOM
// and overrides the footer text whenever it changes

(function () {
	// The text we want to show
	const correctCopyrightText = `© ${new Date().getFullYear()} techstart.cloud. All rights reserved.`;

	// The text we want to replace (case insensitive)
	const textToReplace = /saikrishna nagisetti/i;

	// Function to update the footer text
	function updateFooterText() {
		// Try to find paragraphs in the footer
		const footerElements = document.querySelectorAll(
			"footer p, footer div, .footer p, .footer div"
		);

		footerElements.forEach((element) => {
			// Check if this element or its children contain the text we want to replace
			if (element.innerHTML.match(textToReplace)) {
				console.log("Found footer text to replace:", element.innerHTML);

				// Replace the text
				element.innerHTML = correctCopyrightText;
			}
		});
	}

	// Run once when the script loads
	if (
		document.readyState === "complete" ||
		document.readyState === "interactive"
	) {
		setTimeout(updateFooterText, 100);
	} else {
		document.addEventListener("DOMContentLoaded", function () {
			setTimeout(updateFooterText, 100);
		});
	}

	// Also run on page load
	window.addEventListener("load", function () {
		setTimeout(updateFooterText, 100);
	});

	// Set up a mutation observer to watch for changes to the DOM
	const observer = new MutationObserver(function (mutations) {
		// When mutations occur, check if we need to update the footer
		setTimeout(updateFooterText, 10);
	});

	// Start observing the document with the configured parameters
	observer.observe(document.documentElement, {
		childList: true, // observe direct children
		subtree: true, // and lower descendants too
		characterData: true, // watch for text changes
		attributes: false, // don't care about attribute changes
	});

	// Also run repeatedly to make sure it sticks
	setInterval(updateFooterText, 1000);
})();
