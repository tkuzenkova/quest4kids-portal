import { IUser } from "@/core/types/users";
import { useSuspenseQuery } from "@tanstack/react-query";
import { usersService } from "./service";

const useGetUsersSusp = () => {
	return useSuspenseQuery<IUser[], Error>({
		queryKey: ["childrenSusp"],
		queryFn: usersService.getUsers,
		// select: data => mapUserProfileDataFromServer(data),
	});
};

export default useGetUsersSusp;
