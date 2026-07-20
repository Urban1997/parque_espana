import essenceBg from "@/assets/images/About/essence.webp";
import { AboutContent } from "../../constants/About";

export default function Essence() {
  const { title, text1, text2 } = AboutContent.essence;

  return (
    <section className="w-full bg-[#F2F4F7]">

      {/* Imagen: solo visible en celular */}
      <div
        className="h-70 w-full bg-cover bg-[right_center] md:hidden"
        style={{ backgroundImage: `url(${essenceBg})`  }}
      />

      {/* Layout de tablet/escritorio: imagen de fondo con texto superpuesto */}
      <div
        className="relative hidden w-full md:flex md:h-120 md:items-start md:bg-cover md:bg-center lg:h-155"
        style={{ backgroundImage: `url(${essenceBg})` }}
      >
        <div className="relative z-10 w-full px-6 pt-8 text-[#3C3C3C] md:w-[70%] md:pl-10 md:pr-8 md:pt-10 lg:pl-30 lg:pr-28 lg:pt-20">
          <h2 className="text-center text-xl font-extrabold leading-tight md:text-2xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-justify text-sm md:mt-6 md:text-base lg:text-[26px]">
            {text1}
          </p>
          <p className="mt-4 text-justify text-sm md:mt-6 md:text-base lg:text-[26px]">
            {text2}
          </p>
        </div>
      </div>

      {/* Texto: solo visible en celular */}
      <div className="px-6 py-8 text-[#3C3C3C] md:hidden">
        <h2 className="text-center text-2xl font-extrabold leading-tight">
          {title}
        </h2>
        <p className="mt-6 text-justify text-lg">
          {text1}
        </p>
        <p className="mt-6 text-justify text-lg">
          {text2}
        </p>
      </div>

    </section>
  );
}