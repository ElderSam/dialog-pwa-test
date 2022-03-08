import { gql, useQuery } from "@apollo/client";
import { User } from "../../common/interfaces/user.interface";

const GET_USERS = gql`
	query GetUsers {
		list {
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

export const useGetUsers = (): User[] | undefined => {
	const { data } = useQuery(GET_USERS, {
		// variables: { options: { paginate: { page: 1, limit: 10 } } },
	});
	return data?.list;
};
