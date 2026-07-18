import { Link } from "react-router-dom";
import tennis from "@/assets/images/Home/Hero.webp";
import { HomeContent } from "../../constants/Home";
import { AnimFadeUp, AnimSlideRight } from "../Animations";


export default function Hero() {
  const { title, description, buttonText, buttonLink, imageAlt } = HomeContent.hero;

  return (
    <section className="relative flex min-h-150 flex-col overflow-hidden bg-header-gradient text-white md:flex-row">
      {/* Texto: mitad izquierda */}
      <div className="z-10 flex flex-1 items-center justify-center px-6 py-16 text-center md:justify-start md:px-16 md:text-left lg:text-center">
        <div>
          <AnimFadeUp>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              {title}
            </h1>
          </AnimFadeUp>

          <AnimFadeUp className="mt-4">
            <p className="text-lg text-white/90">
              {description}
            </p>
          </AnimFadeUp>

          <AnimFadeUp className="mt-8">
            <Link
              to={buttonLink}
              className="inline-block rounded-md bg-[#B20026] px-6 py-3 font-semibold hover:bg-red-800 transition"
            >
              {buttonText}
            </Link>
          </AnimFadeUp>
        </div>
      </div>

      {/* Imagen: mitad derecha */}
      <AnimSlideRight className="h-75 w-full sm:h-95 md:h-auto md:flex-1">
        <img
          src={tennis}
          alt={imageAlt}
          loading="lazy"
          className="h-full w-full object-cover object-top md:object-bottom-right md:object-contain"
        />
      </AnimSlideRight>
    </section>
  );
}