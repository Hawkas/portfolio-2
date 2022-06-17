import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

`
	display: ${(props) => (props.grid ? "grid" : "flex")};
	flex-direction: ${(props) => (props.row ? "row" : "column")};
	padding: ${(props) => (props.nopadding ? "0" : "32px 48px 0")};
	margin: 0 auto;
	max-width: 1040px;
	box-sizing: content-box;
	position: relative;
	overflow: hidden;
	grid-template-columns: 1fr 1fr;

	@media ${(props) => props.theme.breakpoints.md} {
		padding: 24px 48px 0;
		flex-direction: column;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: ${(props) => (props.nopadding ? "0" : "32px 32px 0")};

		width: calc(100% - 64px);
		flex-direction: column;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};
		width: calc(100% - 32px);
	}
`;

export const Container = styled.div`
	max-width: 1040px;
	margin: 0 auto;
	display: grid;
	box-sizing: content-box;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 2rem;
	padding: 0 48px 0 48px;
	padding-top: 2rem;

	@media ${(props) => props.theme.breakpoints.sm} {
		width: calc(100% - 64px);
		padding-left: 32px;
		padding-right: 32px;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(2, 60px);
		grid-column-gap: 0.5rem;
		grid-row-gap: 0.5rem;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		padding-left: 16px;
		padding-right: 16px;
		width: calc(100% - 32px);
	}
`;
export const Div1 = styled.div`
	grid-area: 1 / 1 / 2 / 3;
	display: flex;
	flex-direction: row;
	align-content: center;
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-area: 1 / 1 / 2 / 3;
	}
`;
export const Div2 = styled.div`
	grid-area: 1 / 2 / 1 / 3;
	display: flex;
	margin-top: 0.75em;
	justify-content: space-between;
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-area: 2 / 2 / 3 / 5;
	}
`;
export const Div3 = styled.div`
	grid-area: 1 / 5 / 2 / 6;
	display: flex;
	justify-content: flex-end;
	gap: 16px;
	align-items: center;
	@media ${(props) => props.theme.breakpoints.sm} {
		align-items: center;
		grid-area: 1 / 4 / 2 / 6;
	}
`;

// Navigation Links
export const NavLink = styled.a`
	font-size: 2rem;
	line-height: 32px;
	color: rgba(255, 255, 255, 0.75);
	transition: 0.4s ease;
	&:hover {
		color: #fff;
		opacity: 1;
		cursor: pointer;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.5rem;
		font-size: 1.7rem;
	}
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
	border: none;
	display: flex;
	position: relative;
	background: none;
	font-size: 1.7rem;

	line-height: 32px;
	color: rgba(255, 255, 255, 0.75);
	cursor: pointer;
	transition: 0.3s ease;

	&:focus {
		outline: none;
	}
	&:hover {
		color: #fff;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.4rem 0;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		padding: 0;
	}
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
	margin-left: 8px;
	display: flex;
	align-self: center;
	transition: 0.3s ease;
	opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
	transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

	&:hover {
		opacity: 1;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		margin: 2px 0 0 2px;
		width: 15px;
	}
`;

// Social Icons

export const SocialIcons = styled.a`
	transition: 0.3s ease;
	color: white;
	border-radius: 50px;
	padding: 8px;
	&:hover {
		background-color: #212d45;
		transform: scale(1.2);
		cursor: pointer;
	}
`;
