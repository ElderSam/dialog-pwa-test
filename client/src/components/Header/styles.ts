import styled from "styled-components";

export const AppHeader = styled.header`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;

	background-color: #282c34;
	min-height: 5vh;
	font-size: calc(16px);
	color: white;

	> p {
		margin-left: 50px;
		margin-right: 50px;
	}

	@media only screen and (max-width: 600px) {
		width: unset;
	}

	div {
		display: flex;

		input {
			width: 292px;
			border: 3px solid #00b4cc;
			border-right: none;
			padding: 5px;
			height: 20px;
			border-radius: 17px 0 0 17px;
			outline: none;
			color: #000;
		}

		@media only screen and (max-width: 600px) {
			margin: 0 auto;

			input {
				width: unset;
			}
		}

		@media only screen and (max-width: 380px) {
			margin-bottom: 17px;
		}

		button {
			width: 40px;
			height: 36px;
			border: 1px solid #00b4cc;
			background: #00b4cc;
			text-align: center;
			color: #fff;
			border-radius: 0 17px 17px 0;
			cursor: pointer;
			font-size: 20px;

			svg {
				margin-left: -13px;
				margin-top: 3px;
			}

			&:hover {
				background: #00a1cc;
			}

		}
	}
`;
