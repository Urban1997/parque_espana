import Cards from "../CardsImages";
import { HomeContent } from "../../constants/Home";
import { AnimFadeUp, AnimScale } from "../Animations";

export default function Activities() {
  const { title, descriptionParts, cards } = HomeContent.activities;

  return (
    <section className="bg-[#F2F4F7] py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <AnimFadeUp>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3C3C3C] text-center mb-6 sm:mb-8">
            {title}
          </h2>
        </AnimFadeUp>

        <AnimFadeUp className="mb-12 sm:mb-16">
          <p className="text-sm sm:text-base md:text-lg text-[#3C3C3C] text-justify leading-relaxed">
            {descriptionParts.map((part, i) =>
              part.strong ? (
                <strong key={i}>{part.text}</strong>
              ) : (
                part.text
              )
            )}
          </p>
        </AnimFadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
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