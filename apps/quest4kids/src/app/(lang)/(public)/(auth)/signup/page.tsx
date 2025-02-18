import { PAGE_PATH } from "@/core/consts/page-path";
import { Heading, LinkComponent } from "@repo/ui";
import SignupForm from "./_components/SignupForm";

export default function SignUpPage() {
	return (
		<>
			<Heading>Create Account</Heading>
			<SignupForm />
			<div className="mt-4">
				Already have an account?&nbsp;
				<LinkComponent href={PAGE_PATH.AUTH}>Go to Login</LinkComponent>
			</div>
		</>
	);
}
