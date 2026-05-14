import Background from "@/components/background";
import Image from "next/image";
import circuloBanco from "@/../public/image/circuloBranco.png";

export default function About() {
  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden">
        <Background />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full gap-8 pt-20">
          <Image
            src={circuloBanco}
            width={300}
            height={300}
            alt="Círculo Branco"
            className="w-[60%] md:w-[300px] h-auto"
          />
          <div className="w-full max-w-[90%] md:w-[350px] lg:w-[450px] p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              About me
            </h1>
            <p className="text-white text-base md:text-lg mt-5 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula, nisl vel tincidunt lacinia, nunc est aliquam nunc, nec
              ultricies nunc nisl nec nunc. Donec vehicula, nisl vel tincidunt
              lacinia, nunc est aliquam nunc, nec ultricies nunc nisl nec nunc.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
