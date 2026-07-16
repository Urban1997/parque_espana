import { Link } from "react-router-dom";
import Graphic_Element from "@/assets/images/Home/Graphic_Element.png";
import StatsCounter from "./3.StatsCounter";

export default function StatsBanner() {
  return (
    <section className="bg-white py-16 mt-16">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <h2 className="text-2xl font-bold text-[#004aad] sm:text-3xl md:text-4xl">
            Tradición, deporte y comunidad en Puebla
          </h2>
          <img
            src={Graphic_Element}
            alt="Elemento gráfico"
            className="hidden lg:block h-20 w-20 -mt-10 lg:h-24 lg:-mt-16 lg:w-24 object-contain"
          />
        </div>

        <p className="mx-auto mt-16 max-w-3xl text-base text-[#3C3C3C] sm:text-xl">
          Un espacio donde <strong>familias, cultura y bienestar</strong> se
          unen para crear <strong>experiencias memorables</strong> para todas
          las generaciones.
        </p>

        <Link
          to="/instalaciones"
          className="mt-8 inline-block rounded-full bg-[#0097b2] px-6 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 sm:px-8 sm:py-3 sm:text-base sm:mt-16"
        >
          Conoce nuestras instalaciones
        </Link>

        <StatsCounter />
      </div>
    </section>
  );
}