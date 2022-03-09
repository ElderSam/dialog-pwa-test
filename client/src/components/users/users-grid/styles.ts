import styled from "styled-components";

export const ListComp = styled.div`
	display: flex;
	gap: 20px;
	flex-wrap: wrap;
	justify-content: flex-start;
	max-width: 1300px;
	margin: 0 auto;
	margin-bottom: 20px;

	@media only screen and (max-width: 1000px) {
		justify-content: center;
	}
`;
