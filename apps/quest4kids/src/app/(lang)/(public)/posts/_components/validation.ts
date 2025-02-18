import { VALIDATION } from "@/core/consts/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const postSchema = yup.object().shape({
	userId: yup.number().required().positive().integer(),
	title: yup.string().required().max(50, VALIDATION.MAX_LENGTH(50)).trim(),
	body: yup.string().required().max(1500, VALIDATION.MAX_LENGTH(1500)).trim(),
});

export const postFormValidation = yupResolver(postSchema);
