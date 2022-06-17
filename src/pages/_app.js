import Head from "next/head";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Torbjørn Haukås - Front-End Developer</title>
				<meta name="title" content="Torbjørn Haukås - Front-end Developer" />
				<link rel="shortcut icon" href="/favicon.png" />
				<meta name="description" content="Hey there, name's Torbjørn Haukås. I'm a junior front-end dev fresh off the block" />
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
				<meta property="og:type" content="website" />
			</Head>
			<Theme>
				<Component {...pageProps} />
			</Theme>
		</>
	);
}
