import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ className, ...props }: ButtonProps) {
	return (
		<button
			className={`w-full h-12 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 ${className}`}
			{...props}
		/>
	)
}
