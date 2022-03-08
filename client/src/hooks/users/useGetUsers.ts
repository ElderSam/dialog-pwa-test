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
`

// export const useGetUsers = (): User[] | undefined => {
// 	let options = {
// 		// variables: { options: { paginate: { page: 1, limit: 10 } } },
// 	}

// 	const query = GET_USERS
// 	const { data } = useQuery(query, options);
	
// 	return data?.list;
// };