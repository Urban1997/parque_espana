import Graphic_Element from "@/assets/images/Home/Graphic_Element.webp";
import StatsCounter from "../StatsCounter";
import { HomeContent } from "../../constants/Home";
import { AnimFadeUp, AnimScale } from "../Animations";
import ButtonLink from "../ButtonLink";

export default function StatsBanner() {
  const { title, descriptionParts, buttonText, buttonLink, imageAlt } =
    HomeContent.stats;

  return (
    <section className="bg-[#F2F4F7] py-16 mt-16">
      {/* @container activa cqw para todo lo de adentro */}
      <div className="wrap-90 lg:wrap-70">
        <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:gap-3">
          <AnimFadeUp className="w-full flex-1 min-w-0">
            <h2 className="font-extrabold text-[#004aad] leading-tight text-[22px] sm:text-[24px] lg:text-[34px] lg:font-extrabold">
              {title}
            </h2>
          </AnimFadeUp>
          <AnimScale>
            <img
              src={Graphic_Element}
              alt={imageAlt}
              loading="lazy"
              className="hidden lg:block h-20 w-20 -mt-10 lg:h-24 lg:-mt-16 lg:w-24  object-contain"
            />
          </AnimScale>
        </div>

        <AnimFadeUp className="mx-auto mt-16 w-full">
          <p className="text-[16px] text-justify sm:text-[18px]  sm:text-center lg:text-[28px] lg:text-center text-[#3C3C3C]">
            {descriptionParts.map((part, i) =>
              part.strong ? <strong key={i}>{part.text}</strong> : part.text,
            )}
          </p>
        </AnimFadeUp>

        <AnimFadeUp className="mt-8 text-white">
        <ButtonLink text={buttonText} to={buttonLink} color="#004aad" size={{base: "md", sm: "lg"}} />
   
        </AnimFadeUp>

        <AnimScale className="mt-12">
          <StatsCounter />
        </AnimScale>
      </div>
    </section>
  );
}
