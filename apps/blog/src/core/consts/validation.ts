export const VALIDATION = {
	REQUIRED: "This field is required",
	ONLY_ALPHA: "Alpha symbols only",
	EMAIL: "Invalid email",
	NUMBER: "Numbers only",
	MAX_LENGTH: (number: number) => `Must be ${number} characters or less`,
	MIN_LENGTH: (number: number) => `Must be ${number} characters or more`,
};
