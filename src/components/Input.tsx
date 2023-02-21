import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, type, ...props }: InputProps) {
	return (
		<input
			type={type ?? "text"}
			className={`h-12 w-full border border-gray-300 rounded ${className}`}
			{...props}
		/>
	)
}
