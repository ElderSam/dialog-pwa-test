import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
	margin-left: 50px;
	color: lightblue;

	svg {
		height: 24px;
		fill: #6464b5;
		margin-top: 7px;
		transition: 0.5s;

		&:hover {
			height: 27px;
			fill: #fff;
		}
	}
`;

export const UserCard = styled.div`
	background: lightblue;
	padding: 10px 0 10px 50px;

	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	align-items: start;

	img {
		border-radius: 75px;
		height: 150px;
	}

	@media only screen and (min-width: 500px) {
		gap: 20px;
	}

	@media only screen and (max-width: 550px) {
		padding-left: unset;
	}

	@media only screen and (max-width: 450px) {
		justify-content: center;
	}
`;

export const UserCardBody = styled.div`
	display: flex;
	flex-direction: column;
	align-items: self-start;
`;

export const Title2 = styled.h2`
	text-align: start;
	margin-left: 50px;
`;
