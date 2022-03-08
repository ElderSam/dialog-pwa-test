import styled from "styled-components";

export const GridUserItem = styled.div`
	background-color: #e6dbf1;
	border-radius: 15px;
	padding: 15px;
	transition: 0.5s;

	&:hover {
		background-color: #debdff;
		border-radius: 7px;
	}

	@media only screen and (max-width: 600px) {
		img {
			width: 70vw;
			max-width: 300px;
		}
	}
`;

export const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;

	p {
		margin: 0;
	}

	a {
		color: #007005;
		font-size: 12px;
	}

	@media only screen and (max-width: 600px) {
		a {
			font-size: 16px;
		}
	}
`;
