import { isEmail, isMax50, isOnlyAlpha, isRequired } from "./common";

export const nameValidation = isRequired.concat(isMax50).concat(isOnlyAlpha);

export const lastNameValidation = isMax50.concat(isOnlyAlpha);

export const emailValidation = isRequired.concat(isEmail);

export const userIdValidation = isRequired.concat(isEmail);
