/**
 * Astro Static Build Script
 *
 * This script builds the Astro site and then post-processes the generated HTML files
 * to ensure all footer text is consistent with the site branding.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { exec } from "child_process";

// Convert to __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// The correct branding to use
const siteName = "techstart.cloud";
const currentYear = new Date().getFullYear();
const correctCopyrightText = `© ${currentYear} ${siteName}. All rights reserved.`;

// Regex pattern for identifying copyright text
const copyrightPattern = /© \d{4}[^<>]*rights reserved\./gi;

/**
 * Builds the site and processes the output files
 */
async function buildAndProcessSite() {
	console.log("🚀 Building Astro site...");

	exec("npm run build", (error, stdout, stderr) => {
		if (error) {
			console.error(`❌ Error during build: ${error.message}`);
			return;
		}

		if (stderr) {
			console.error(`⚠️  Build warnings: ${stderr}`);
		}

		console.log(`✅ Build completed successfully`);
		console.log("🔍 Processing HTML files to fix footer text...");

		const distDir = path.join(__dirname, "dist");
		processDirectory(distDir);

		console.log(`🎉 Done! Static site is ready in the "dist" directory.`);
		console.log(`📋 Run 'npm run preview' to view the site.`);
	});
}

/**
 * Recursively processes all files in a directory
 * @param {string} dir - Directory path to process
 */
function processDirectory(dir) {
	const files = fs.readdirSync(dir);

	files.forEach((file) => {
		const filePath = path.join(dir, file);
		const stat = fs.statSync(filePath);

		if (stat.isDirectory()) {
			processDirectory(filePath);
		} else if (path.extname(file) === ".html") {
			processHtmlFile(filePath);
		}
	});
}

/**
 * Processes a single HTML file to fix footer text
 * @param {string} filePath - Path to HTML file
 */
function processHtmlFile(filePath) {
	console.log(`  📄 Processing ${path.relative(__dirname, filePath)}`);
	let html = fs.readFileSync(filePath, "utf8");

	// Count replacements
	let replacementCount = 0;

	// Replace all instances of copyright text
	const updatedHtml = html.replace(copyrightPattern, () => {
		replacementCount++;
		return correctCopyrightText;
	});

	// Save the file if changes were made
	if (replacementCount > 0) {
		console.log(`    ✅ Fixed ${replacementCount} instances of footer text`);
		fs.writeFileSync(filePath, updatedHtml, "utf8");
	}
}

// Run the build process
buildAndProcessSite().catch((err) => {
	console.error("❌ Error during build process:", err);
	process.exit(1);
});
