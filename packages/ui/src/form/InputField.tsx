import { Description, Field, Input, Label } from "@headlessui/react";
import { ExclamationCircleIcon } from "@repo/ui";
import clsx from "clsx";
import { UseFormRegisterReturn } from "react-hook-form";

// TODO: Add readOnly
interface InputFieldProps {
	label?: string;
	id: string;
	type?: string;
	placeholder?: string;
	error?: string;
	register: UseFormRegisterReturn;
	isRequired?: boolean;
	isDisabled?: boolean;
	description?: string;
	as?: "textarea";
	isLoading?: boolean; // TODO: Add loading state and implement loading spinner
	autoFocus?: boolean;
}

export const InputField = ({
	label,
	id,
	type = "text",
	placeholder = "",
	error,
	register,
	isRequired = false,
	isDisabled = false,
	description = "",
	as,
	isLoading,
	autoFocus,
}: InputFieldProps) => {
	return (
		<div className="w-full max-w-md">
			<Field>
				{label && (
					<Label
						htmlFor={id}
						className="text-sm/6 font-medium text-slate-700 dark:text-white/50"
					>
						{label}
						{/* TODO: Replace with custom component */}
						{isRequired && <span className="text-danger"> *</span>}
					</Label>
				)}
				<Description className="text-sm/6 text-slate-500 dark:text-white/50">
					{description}
				</Description>
				<Input
					className={clsx(
						"mt-3 block w-full rounded-lg border-none px-4 py-3 text-base outline-2 -outline-offset-2",
						"bg-slate-400/5 text-slate-700",
						"dark:bg-white/15 dark:text-white",
						"focus:outline-primary dark:focus:outline-white/25",
						"disabled:bg-slate-700/2 disabled:outline-primary/20 dark:disabled:outline-white/1 dark:disabled:bg-white/5",
						`${error ? "outline-danger/70" : "outline-primary/70 dark:outline-white/2"}`,
					)}
					id={id}
					{...(as !== "textarea" && { type })}
					placeholder={placeholder}
					as={as}
					disabled={isLoading || isDisabled}
					autoFocus={autoFocus}
					{...register}
				/>
				{error && (
					// TODO: Replace with custom error message component
					<div className="pointer-events-none flex items-center pr-3 text-sm/6">
						<ExclamationCircleIcon
							className="text-danger mr-2 h-5 w-5"
							ariaHidden
						/>
						{error}
					</div>
				)}
			</Field>
		</div>
	);
};
