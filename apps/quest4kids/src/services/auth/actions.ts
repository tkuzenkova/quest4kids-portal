"use server";

import { ILoginFormValues, ISignupFormValues } from "@/core/types/auth";
import { createClient } from "@/core/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData: ILoginFormValues) {
	const supabase = await createClient();

	const { error } = await supabase.auth.signInWithPassword(formData);

	if (error) {
		redirect("/error");
	}

	revalidatePath("/", "layout");
	redirect("/");
}

export async function signup(formData: ISignupFormValues) {
	const supabase = await createClient();

	const data = {
		email: formData.email,
		password: formData.password,
		fullName: formData.fullName,
	};

	const { error } = await supabase.auth.signUp(data);

	if (error) {
		redirect("/error");
	}

	revalidatePath("/", "layout");
	redirect("/");
}
