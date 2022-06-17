import { Player } from "@lottiefiles/react-lottie-player";
import { AspectRatio, Box } from "@mantine/core";
import Logo from "../../../public/bigLogo.svg";

function BackgroundAnimation() {
	return (
		<AspectRatio
			ratio={520 / 520}
			sx={(theme) => ({
				maxWidth: 520,
				height: "100%",
				width: "100%",
				flexShrink: 2,
				[theme.fn.smallerThan(768)]: {
					order: -1,
					width: "320px",
				},
			})}>
			<Box sx={{ position: "relative" }}>
				<Player style={{ position: "relative" }} autoplay speed={2.5} loop src="/background-anim.json" />
				<Box
					sx={{
						position: "absolute",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
					}}>
					<Logo />
				</Box>
			</Box>
		</AspectRatio>
	);
}
export default BackgroundAnimation;
