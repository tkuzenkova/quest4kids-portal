import GoogleLoginButton from "@/components/ui/GoogleLoginButton";
import { PAGE_PATH } from "@/core/consts/page-path";
import { Heading, LinkComponent } from "@repo/ui";
import LoginForm from "./_components/LoginForm";

export default function AuthPage() {
	return (
		<>
			<Heading>Login</Heading>
			<LoginForm />
			<div className="mt-4 text-center">
				Don't have an account?&nbsp;
				<LinkComponent href={PAGE_PATH.SIGNUP}>Sign Up</LinkComponent>
			</div>
			<div className="mt-8 text-center">
				<GoogleLoginButton />
			</div>
		</>
	);
}
