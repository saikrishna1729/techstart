#!/bin/bash
# Cleanup script to remove unnecessary temporary files

echo "Cleaning up project structure..."

# Remove React components that have been replaced by Astro components
echo "Removing old React components..."
rm -f components/Header.jsx
rm -f components/Footer.jsx
rm -f components/FooterTextOverride.jsx
rm -f components/Layout.jsx

# Remove old scripts that are now consolidated
echo "Removing old scripts..."
rm -f create-static-build.js
rm -f public/fix-footer.js
rm -f pages/custom-footer.js
rm -f direct-replacement.html

# Make sure directories exist
mkdir -p src/styles
mkdir -p public/scripts
mkdir -p public/styles

echo "Cleanup complete!"
