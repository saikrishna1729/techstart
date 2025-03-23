import Head from "next/head";
import { SITE_NAME } from "../lib/constants";

// ...existing code...

export async function getStaticProps() {
	// ...existing code...

	return {
		props: {
			siteTitle: SITE_NAME,
			// ...other props
		},
		// Force a rebuild regularly to ensure our changes take effect
		revalidate: 1,
	};
}

// ...existing code...
