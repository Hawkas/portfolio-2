import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Skills from "./Skills";
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from "./TechnologiesStyles";

const Technologies = () => (
	<Section id="skills">
		<SectionDivider divider />
		<SectionTitle>Skills</SectionTitle>
		<SectionText>These are the skills I've gained these past two years while studying front-end.</SectionText>
		<List>
			{Skills.map((Skill) => (
				<ListItem key={Skill.slug}>
					<picture>
						<Skill.Component size="3rem" />
					</picture>
					<ListContainer>
						<ListTitle>{Skill.title}</ListTitle>
						<ListParagraph>
							<Skill.Description />
						</ListParagraph>
					</ListContainer>
				</ListItem>
			))}
		</List>
	</Section>
);

export default Technologies;
