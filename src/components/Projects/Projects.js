import { Badge, Box } from "@mantine/core";
import { projects } from "../../constants/constants";
import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Img,
	TitleContent,
	UtilityList,
} from "./ProjectsStyles";

const Projects = () => (
	<Section id="projects">
		<SectionDivider divider />
		<SectionTitle>Projects</SectionTitle>
		<GridContainer>
			{projects.map((p, i) => {
				return (
					<BlogCard key={i}>
						<Img src={p.image} />

						<HeaderThree title={p.title}>{p.title}</HeaderThree>
						<Hr />

						<CardInfo className="card-info">{p.description}</CardInfo>
						<div>
							<TitleContent>Tech Stack</TitleContent>
							<Hr />
							<Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", padding: "0 20px" }}>
								{p.tags.map((t, i) => {
									return (
										<Badge variant="gradient" gradient={{ from: "#2297B0", to: "cyan" }} key={i}>
											{t}
										</Badge>
									);
								})}
							</Box>
						</div>
						<UtilityList>
							<ExternalLinks href={p.visit}>Live Preview</ExternalLinks>
							<ExternalLinks href={p.source}>Source Code</ExternalLinks>
						</UtilityList>
					</BlogCard>
				);
			})}
		</GridContainer>
	</Section>
);

export default Projects;
