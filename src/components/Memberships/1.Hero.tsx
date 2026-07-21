import MembershipsHero from "@/assets/images/Memberships/TeamFamily.webp";
import { MembershipsContent } from "../../constants/Memberships";
import Points from "@/assets/images/Memberships/Points.webp";
import Graphic_Element from "@/assets/images/Memberships/Graphic_Element2.webp";
import { AnimFadeUp } from "../Animations";

export default function Hero() {
  const { title, subtitle, imageAlt, pointsImageAlt, graphicImageAlt } = MembershipsContent.hero;

  return (
    <section className="relative bg-header-gradient text-white">
      <div className="relative flex flex-col items-center h-auto sm:h-auto lg:h-[60vh] lg:min-h95 lg:max-h-150 lg:flex-row overflow-hidden">

        {/* Imagen */}
        <img
          src={MembershipsHero}
          alt={imageAlt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Patrón de puntos */}
        <img
          src={Points}
          alt={pointsImageAlt}
          loading="lazy"
          className="absolute right-4 top-4 z-0 h-20 w-20 opacity-50 sm:right-8 sm:top-6 sm:h-28 sm:w-28 lg:right-16 lg:top-8 lg:h-40 lg:w-40"
        />

        {/* Contenido - ARRIBA A LA IZQUIERDA */}
        <div className="relative z-10 flex w-full items-start px-6 py-10 sm:px-8 sm:py-12 lg:flex-1 lg:px-16 lg:pt-20">
          <div>

            {/* Título pequeño */}
            <AnimFadeUp>
              <p className="ml-4 text-left text-sm font-normal text-white sm:ml-12 sm:text-2xl lg:ml-20 lg:text-2xl">
                {title}
              </p>
            </AnimFadeUp>

            {/* Subtítulo */}
            <AnimFadeUp>
              <h1 className="ml-4 mt-4 text-2xl font-bold leading-tight sm:ml-12 sm:text-4xl lg:ml-20 lg:text-4xl">
                {subtitle}
              </h1>
            </AnimFadeUp>

            {/* Icono */}
            <AnimFadeUp className="">
              <img
                src={Graphic_Element}
                alt={graphicImageAlt}
                loading="lazy"
                className="h-14 w-14 object-contain sm:h-16 sm:w-16 lg:h-18 lg:w-18"
              />
            </AnimFadeUp>

          </div>
        </div>

      </div>
    </section>
  );
}