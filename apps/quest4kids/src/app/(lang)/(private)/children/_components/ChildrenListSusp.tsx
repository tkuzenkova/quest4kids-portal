"use client";

import useGetUsersSusp from "@/services/users/useGetUsersSusp";
import React from "react";
import ListComponent from "./ListComponent";

const ChildrenListSusp: React.FC = () => {
	const { data: users } = useGetUsersSusp();

	return <ListComponent users={users} />;
};

export default ChildrenListSusp;
