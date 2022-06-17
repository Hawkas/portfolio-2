import styled from "styled-components";

export const LeftSection = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
		margin-bottom: 64px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 80%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
`;
