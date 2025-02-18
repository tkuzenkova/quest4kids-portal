import { IUser } from "@/core/types/users";
import { API_PATH } from "../_common/consts";
import { request } from "../_common/request";

type UserId = string;

const API = process.env.NEXT_PUBLIC_API_URL;

export const usersService = {
	getUsers: async () => {
		const options = {
			method: "GET",
			url: `${API}/${API_PATH.USERS}`,
		};

		return request(options);
	},
	getUser: (id: UserId) => {
		// fetch user from the server by id
	},
	updateUser: (user: IUser) => {
		// update user in the server
	},
	deleteUser: (id: UserId) => {
		// delete user from the server
	},
};
