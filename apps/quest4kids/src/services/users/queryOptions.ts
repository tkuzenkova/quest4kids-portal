import { queryOptions } from "@tanstack/react-query";
import { QUERY_KEY } from "./consts";
import { usersService } from "./service";

export function groupUsersOptions() {
	return queryOptions({
		queryKey: [QUERY_KEY.CHILDREN] as const,
		queryFn: usersService.getUsers,
		staleTime: 5 * 1000,
	});
}
