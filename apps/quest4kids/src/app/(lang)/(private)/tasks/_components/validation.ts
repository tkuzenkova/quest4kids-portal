import {
	emailValidation,
	lastNameValidation,
	nameValidation,
} from "@/core/utils/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
	name: nameValidation,
	lastName: lastNameValidation,
	email: emailValidation,
});

export const taskFormValidation = yupResolver(schema);
