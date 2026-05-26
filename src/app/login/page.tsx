"use client";

import Background from "@/components/background";
import Image from "next/image";
import circuloBanco from "@/../public/image/circuloBranco.png";
import Link from "next/link";
import { login } from "@/app/actions/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  async function handleSubmit(formData: FormData) {
    try {
      await login(formData);
      setSucesso("Login realizado com sucesso!");
      setTimeout(() => router.push("/"), 1000);
    } catch (err: any) {
      setErro(err.message);
    }
  }

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
        <form action={handleSubmit} className="bg-transparent p-4">
          {erro && <p className="text-red-400 text-sm mb-2">{erro}</p>}
          {sucesso && <p className="text-green-400 text-sm mb-2">{sucesso}</p>}
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
          <div className="flex items-center flex-row gap-2">
            <button
              type="submit"
              className="bg-transparent border border-white text-white px-3 py-1 mt-2 text-sm hover:bg-white hover:text-black transition-colors duration-300"
            >
              Login
            </button>
            <Link href="/register" className="ml-auto">
              <button
                type="button"
                className="bg-transparent border border-white text-white px-3 py-1 mt-2 text-sm hover:bg-white hover:text-black transition-colors duration-300"
              >
                Register
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
