import { useQuery } from "@tanstack/react-query";
import { groupUsersOptions } from "./queryOptions";

const useGetUsers = () => {
	return useQuery({
		...groupUsersOptions(),

		// select: data => mapUserProfileDataFromServer(data),
	});
};

export default useGetUsers;
