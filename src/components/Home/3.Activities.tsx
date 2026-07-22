import Cards from "../CardsImages";
import { HomeContent } from "../../constants/Home";
import { AnimFadeUp, AnimScale } from "../Animations";

export default function Activities() {
  const { title, descriptionParts, cards } = HomeContent.activities;

  return (
    <section className="bg-[#F2F4F7] py-12">
      <div className="wrap-90 sm:wrap-80 lg:wrap-75">
        <AnimFadeUp>
          <h2 className="font-extrabold text-[#3C3C3C] leading-tight text-[22px] sm:text-[24px] lg:text-[34px] lg:font-extrabold">
            {title}
          </h2>
        </AnimFadeUp>

        <AnimFadeUp className="mt-16">
          <p className="text-[16px] text-justify sm:text-[18px]  sm:text-center lg:text-[28px] lg:text-justify text-[#3C3C3C]">
            {descriptionParts.map((part, i) =>
              part.strong ? (
                <strong key={i}>{part.text}</strong>
              ) : (
                part.text
              )
            )}
          </p>
        </AnimFadeUp>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {cards.map((item) => (
            <AnimScale key={item.id} className="w-full max-w-75 sm:max-w-none">
              <Cards name={item.name} />
            </AnimScale>
          ))}
        </div>
      </div>
    </section>
  );
}