import { Box } from "@mantine/core";
import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
	return (
		<Layout>
			<Section>
				<Box
					component="section"
					sx={(theme) => ({
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						[theme.fn.smallerThan(768)]: {
							flexWrap: "wrap",
						},
					})}>
					<Hero />
					<BgAnimation />
				</Box>
			</Section>
			<Projects />
			<Technologies />
		</Layout>
	);
};

export default Home;
