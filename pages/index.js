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

// Add responsive meta tags
export default function HomePage({ siteTitle }) {
	return (
		<>
			<Head>
				<title>{siteTitle}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Welcome to TechStart.Cloud" />
			</Head>
			{/* ...existing code... */}
		</>
	);
}

// ...existing code...
