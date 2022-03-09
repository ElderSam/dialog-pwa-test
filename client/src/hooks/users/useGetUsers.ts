import { gql } from "@apollo/client";

// const GET_USERS = gql`
// 	query GetUsers {
// 		list {
// 			_id
// 			name
// 			age
// 			eyeColor
// 			company
// 			email
// 			picture
// 		}
// 	}
// `;

export const GET_USERS_BY_NAME = gql`
	query GetUsers($name: String!) {
		list(name: $name) {
			_id
			name
			age
			eyeColor
			company
			email
			picture
		}
	}
`;

export const GET_USER_BY_ID = gql`
	query GetUserById($userId: ID!) {
		getUserById(userId: $userId) {
			_id
			name
			age
			email
			picture

			friends {
				_id
				name
				age
				eyeColor
				company
				email
				picture
			}
		}
	}
`;
