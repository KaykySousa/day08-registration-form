import Button from "./components/Button"
import Input from "./components/Input"

export default function App() {
	return (
		<div className="min-h-screen w-full bg-blue-600 flex flex-col justify-end sm:justify-center sm:items-center">
			<div className="flex-1 flex flex-col justify-center items-center p-4 sm:hidden">
				<h1 className="text-2xl text-white font-semibold">
					Formulário de Cadastro
				</h1>
				<div className="text-center text-blue-300 mt-2">
					<p>Desenvolvido por: Kayky de Sousa</p>
					<p>
						<a
							href="https://www.linkedin.com/in/kayky-de-sousa/"
							className="hover:underline"
						>
							Linkedin
						</a>{" "}
						|{" "}
						<a
							href="https://github.com/KaykySousa"
							className="hover:underline"
						>
							Github
						</a>
					</p>
				</div>
			</div>
			<form
				className="w-full bg-white relative px-4 py-1 pb-8 flex flex-col gap-y-2 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:bg-wave before:bg-no-repeat before:h-36 before:bg-[100%_auto] before:bg-bottom before:-translate-y-full before:mt-px sm:before:hidden sm:max-w-lg sm:rounded sm:shadow sm:p-8"
				onSubmit={(e) => {
					e.preventDefault()
					alert("Cadastro realizado!")
				}}
			>
				<h1 className="text-2xl text-blue-600 font-semibold mb-3 hidden sm:block">
					Formulário de Cadastro
				</h1>
				<Input placeholder="Nome" />
				<Input placeholder="Email" type="email" />
				<Input placeholder="Senha" type="password" />
				<Button>Cadastrar</Button>
			</form>
		</div>
	)
}
