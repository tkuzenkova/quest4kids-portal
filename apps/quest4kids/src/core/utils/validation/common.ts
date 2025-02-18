import { VALIDATION } from "@/core/consts/validation";
import * as yup from "yup";

export const isRequired = yup.string().required(VALIDATION.REQUIRED);

export const isOnlyAlpha = yup
	.string()
	.matches(/^[A-Za-z]+$/, VALIDATION.ONLY_ALPHA);

export const isMax50 = yup.string().max(50, VALIDATION.MAX_LENGTH(50));

export const isEmail = yup.string().email(VALIDATION.EMAIL);
