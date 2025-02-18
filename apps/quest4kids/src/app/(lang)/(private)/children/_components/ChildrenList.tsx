"use client";

import useGetUsers from "@/services/users/useGetUsers";
import { Button, Spinner } from "@repo/ui";
import React from "react";
import ListComponent from "./ListComponent";

const ChildrenList: React.FC = () => {
	const {
		data: users,
		isFetching: isLoadingChildren,
		refetch,
	} = useGetUsers();

	return (
		<>
			{isLoadingChildren ? (
				<div className="h-16">
					<Spinner />
				</div>
			) : (
				<ListComponent users={users} />
			)}
			<Button className="m-3" onClick={refetch}>
				Refetch
			</Button>
		</>
	);
};

export default ChildrenList;
