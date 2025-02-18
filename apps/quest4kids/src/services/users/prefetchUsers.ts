import { QueryClient } from "@tanstack/react-query";
import { groupUsersOptions } from "./queryOptions";

const prefetchUsers = (queryClient: QueryClient) => {
	return queryClient.prefetchQuery(groupUsersOptions());
};

export default prefetchUsers;
