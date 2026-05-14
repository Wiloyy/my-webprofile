import Background from "@/components/background";
import Image from "next/image";
import circuloBanco from "@/../public/image/circuloBranco.png";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        <Background />
        <div className="relative z-10">
          <Image
            src={circuloBanco}
            alt="Círculo Banco"
            width={210}
            height={210}
          />
          <div className="bg-transparent p-4">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="bg-transparent border-b border-white text-white placeholder:text-white focus:outline-none block mt-4 w-full"
            />
            <label htmlFor="password" className="sr-only">
              Senha
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="bg-transparent border-b border-white text-white placeholder:text-white focus:outline-none block mt-4 w-full"
            />
            <label htmlFor="confirmPassword" className="sr-only">
              Confirmar Senha
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="bg-transparent border-b border-white text-white placeholder:text-white focus:outline-none block mt-4 w-full"
            />
            <div className="flex items-center flex-row gap-2">
              <Link href="/">
                <button
                  type="button"
                  className="bg-transparent border border-white text-white px-3 py-1 mt-2 text-sm hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
