import Background from "@/components/background";
import Image from "next/image";
import circuloBanco from "@/../public/image/circuloBranco.png";

export default function About() {
  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden">
        <Background />
        <div className="relative z-10 flex flex-col items-center w-full md:block">
          <Image
            src={circuloBanco}
            width={300}
            height={300}
            alt="Círculo Branco"
            className="w-[60%] top-25 md:w-[300px] h-auto relative mx-auto md:absolute md:left-[90px]"
          />
          <div className="relative mx-auto md:mx-0 md:absolute top-20 right-4 md:right-[40px] lg:right-[80px] w-full max-w-[90%] md:w-[350px] lg:w-[450px] p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white w-full text-center">
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
