import Background from "@/components/background";
import Image from "next/image";
import circuloBanco from "@/../public/image/circuloBranco.png";
import { register } from "@/app/actions/auth";

export default function Register() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      <Background />
      <div className="relative z-10">
        <Image
          src={circuloBanco}
          alt="Círculo Banco"
          width={210}
          height={210}
        />
        <form action={register} className="bg-transparent p-4">
          <label htmlFor="nome" className="sr-only">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder="Nome"
            required
            className="bg-transparent border-b border-white text-white placeholder:text-white focus:outline-none block mt-4 w-full"
          />
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
            className="bg-transparent border-b border-white text-white placeholder:text-white focus:outline-none block mt-4 w-full"
          />
          <label htmlFor="senha" className="sr-only">
            Senha
          </label>
          <input
            id="senha"
            name="senha"
            type="password"
            placeholder="Password"
            required
            className="bg-transparent border-b border-white text-white placeholder:text-white focus:outline-none block mt-4 w-full"
          />
          <label htmlFor="confirmarSenha" className="sr-only">
            Confirmar Senha
          </label>
          <input
            id="confirmarSenha"
            name="confirmarSenha"
            type="password"
            placeholder="Confirm Password"
            required
            className="bg-transparent border-b border-white text-white placeholder:text-white focus:outline-none block mt-4 w-full"
          />
          <button
            type="submit"
            className="bg-transparent border border-white text-white px-3 py-1 mt-4 text-sm hover:bg-white hover:text-black transition-colors duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
