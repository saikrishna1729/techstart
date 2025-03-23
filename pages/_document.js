import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="description" content="Tech tutorials and resources" />
					{/* Add the script in the head for earlier execution */}
					<script src="/footer-override.js" strategy="beforeInteractive" />
				</Head>
				<body>
					<Main />
					<NextScript />
					{/* Also include in body to ensure it runs */}
					<script src="/footer-override.js" />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
