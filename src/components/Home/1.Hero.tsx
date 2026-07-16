import { Link } from "react-router-dom";
import tenis from "@/assets/images/Home/Hero.png";
import { HomeContent } from "../../constants/Home"; 

export default function Hero() {
  const { title, description, buttonText, buttonLink, imageAlt } = HomeContent.hero;

  return (
    <section className="relative flex min-h-150 flex-col overflow-hidden bg-header-gradient text-white md:flex-row">
      {/* Texto: mitad izquierda */}
      <div className="z-10 flex flex-1 items-center justify-center px-6 py-16 text-center md:justify-start md:px-16 md:text-left lg:text-center">
        <div>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-white/90">
           {description}
          </p>
          <Link
            to={buttonLink}
            className="mt-8 inline-block rounded-md bg-[#B20026] px-6 py-3 font-semibold hover:bg-red-800"
          >
            {buttonText}
          </Link>
        </div>
      </div>

      {/* Imagen: mitad derecha */}
      <div className="h-75 w-full sm:h-95 md:h-auto md:flex-1">
        <img
          src={tenis}
          alt={imageAlt}
          className="h-full w-full object-cover object-top md:object-contain md:object-right-bottom"
        />
      </div>
    </section>
  );
}