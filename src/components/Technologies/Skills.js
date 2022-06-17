import { DiCss3, DiHtml5, DiJavascript, DiReact } from "react-icons/di";
import { SiNextDotJs, SiTypescript } from "react-icons/si";

const Skills = [
	{
		slug: "html",
		Component: DiHtml5,
		title: "HTML5",
		Description: () => <p>Building the canvas</p>,
	},
	{
		slug: "css",
		Component: DiCss3,
		title: "CSS",
		Description: () => <p>Painting the canvas</p>,
	},
	{
		slug: "javascript",
		Component: DiJavascript,
		title: "JavaScript",
		Description: () => <p>Making the paintings come alive</p>,
	},
	{
		slug: "typescript",
		Component: SiTypescript,
		title: "TypeScript",
		Description: () => <p>Keeping the paintings in line</p>,
	},
	{
		slug: "react",
		Component: DiReact,
		title: "React",
		Description: () => <p>Combining everything and refining it</p>,
	},
	{
		slug: "nextjs",
		Component: SiNextDotJs,
		title: "NextJS",
		Description: () => <p>The penultimate tool for any front-end developer</p>,
	},
];
export default Skills;
