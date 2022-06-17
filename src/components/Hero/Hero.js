import { Box } from "@mantine/core";
import { PageTitle, SectionText } from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
const Hero = (props) => (
	<>
		<Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
			<LeftSection>
				<PageTitle main center>
					Hello there,
				</PageTitle>
				<SectionText>I'm Torbjørn Haukås, a front-end developer.</SectionText>
			</LeftSection>
		</Box>
	</>
);

export default Hero;
