import styled from "styled-components";

export const GridUserItem = styled.div`
	background-color: #e6dbf1;
	border-radius: 15px;
	padding: 15px;
	transition: 0.5s;
	cursor: ${({ page }: { page: string }) =>
		page !== "user" ? "pointer" : "unset"};

	&:hover {
		background-color: #debdff;
		border-radius: 7px;
	}
`;

// Image div
export const CardHeader = styled.div`
	height: 200px;
	width: 200px;
	background: #8f8f8f;

	@media only screen and (max-width: 600px) {
		width: 70vw;
		height: 70vw;
		max-width: 300px;
		max-height: 300px;

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
