import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const singUpSchema = yup.object().shape({
	fullName: yup.string().required("Name is required"),
	email: yup.string().email().required("Email is required"),
	password: yup
		.string()
		.required("Password is required")
		.min(6, "Password must be at least 6 characters"),
	confirmPassword: yup
		.string()
		.required("Confirm Password is required")
		.oneOf([yup.ref("password")], "Passwords must match"),
});

export const singUpFormValidation = yupResolver(singUpSchema);
