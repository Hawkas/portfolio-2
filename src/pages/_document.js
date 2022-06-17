import { createStylesServer, ServerStyles } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

const stylesServer = createStylesServer();

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: [
					initialProps.styles,
					sheet.getStyleElement(),
					<ServerStyles html={initialProps.html} server={stylesServer} key="styles" />,
				],
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html lang="en-GB">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&family=Inter:wght@300;400;500&family=Merienda&family=Montserrat:wght@400;500;600;700;800;900&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
