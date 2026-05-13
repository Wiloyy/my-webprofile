import Image from "next/image";
import bgPages from "@/../public/image/bgPages.png";

export default function Background() {
  return (
    <>
      <Image
        alt="Background"
        src={bgPages}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </>
  );
}
