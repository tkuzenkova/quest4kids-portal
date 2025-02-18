import { ILoginFormValues, ISignupFormValues } from "@/core/types/auth";
import supabase from "../supabase/supabase";

export async function signupApi({
	email,
	password,
	fullName,
}: ISignupFormValues) {
	const { data, error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			data: {
				full_name: fullName,
			},
		},
	});

	if (error) throw new Error(error.message);

	return data;
}

export async function loginApi({ email, password }: ILoginFormValues) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) throw new Error(error.message);

	return data;
}

export async function getCurrentUser() {
	const { data: session } = await supabase.auth.getSession();
	if (!session.session) return null;

	const { data, error } = await supabase.auth.getUser();

	if (error) throw new Error(error.message);
	return data?.user;
}

export async function logoutApi() {
	const { error } = await supabase.auth.signOut();
	if (error) throw new Error(error.message);
}
