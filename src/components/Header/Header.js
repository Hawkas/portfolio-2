import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Container, Div1, Div3, SocialIcons } from "./HeaderStyles";

const Header = () => (
	<Container>
		<Div1>
			<Link href="/">
				<a style={{ display: "flex", alignItems: "center", color: "white" }}>
					<img src="/logo.svg" height={40} width={40} /> <span style={{ marginLeft: 10, fontSize: 20 }}>Torbjørn Haukås</span>
				</a>
			</Link>
		</Div1>
		<Div3>
			<SocialIcons href="https://github.com/Hawkas">
				<AiFillGithub size="3rem" />
			</SocialIcons>
			<SocialIcons href="https://www.linkedin.com/in/torbj%C3%B8rn-hauk%C3%A5s-7933911b5/">
				<AiFillLinkedin size="3rem" />
			</SocialIcons>
		</Div3>
	</Container>
);

export default Header;
