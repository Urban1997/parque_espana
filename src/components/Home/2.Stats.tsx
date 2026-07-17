import { Link } from "react-router-dom";
import Graphic_Element from "@/assets/images/Home/Graphic_Element.png";
import StatsCounter from "../StatsCounter";
import { HomeContent } from "../../constants/Home"; // ← Así

export default function StatsBanner() {
  const { title, descriptionParts, buttonText, buttonLink, imageAlt } = HomeContent.stats;

  return (
    <section className="bg-[#F2F4F7] py-16 mt-16">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <h2 className="text-2xl font-extrabold text-[#004aad] sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <img
            src={Graphic_Element}
            alt={imageAlt}
            className="hidden lg:block h-20 w-20 -mt-10 lg:h-24 lg:-mt-16 lg:w-24 object-contain"
          />
        </div>

        <p className="mx-auto mt-16 max-w-3xl text-base text-[#3C3C3C] sm:text-xl font-medium">
          {descriptionParts.map((part, i) =>
            part.strong ? <strong key={i}>{part.text}</strong> : part.text,
          )}
        </p>

        <Link
          to={buttonLink}
          className="mt-8 inline-block rounded-lg bg-[#0097b2] px-6 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 sm:px-8 sm:py-3 sm:text-base sm:mt-16"
        >
          {buttonText}
        </Link>

        <StatsCounter/>
      </div>
    </section>
  );
}
