module.exports = {
	reactStrictMode: true,
	env: {
		SITE_NAME: "techstart.cloud",
	},
	// Disable all forms of caching
	generateEtags: false,
	// Don't cache anything
	headers: async () => {
		return [
			{
				source: "/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "no-store, no-cache, must-revalidate, proxy-revalidate",
					},
					{
						key: "Pragma",
						value: "no-cache",
					},
					{
						key: "Expires",
						value: "0",
					},
				],
			},
		];
	},
	// Force rebuilding on each request
	onDemandEntries: {
		maxInactiveAge: 0,
		pagesBufferLength: 1,
	},
};
