import { Link } from "react-router-dom";
import Cards from "../CardsImages";
import { HomeContent } from "../../constants/Home";
import { AnimFadeUp, AnimScale } from "../Animations";

export default function Installations() {
  const { title, cards, buttonText, buttonLink } = HomeContent.installations;

  const firstThree = cards.slice(0, 3);
  const lastTwo = cards.slice(3, 5);

  return (
    <section className="bg-[#F2F4F7] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimFadeUp>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-[#3C3C3C] mb-12 sm:mb-16">
            {title}
          </h2>
        </AnimFadeUp>

        <div className="flex flex-col gap-6 items-center">
          {/* Primera fila */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl justify-items-center">
            {firstThree.map((item) => (
              <AnimScale key={item.id} className="w-full max-w-75 sm:max-w-none">
                <Cards name={item.name} />
              </AnimScale>
            ))}
          </div>

          {/* Segunda fila */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 w-full max-w-5xl justify-items-center">
            <AnimScale className="w-full max-w-75 sm:max-w-none md:col-span-2 md:col-start-2">
              <Cards name={lastTwo[0].name} />
            </AnimScale>

            <AnimScale className="w-full max-w-75 sm:max-w-none md:col-span-2 md:col-start-4">
              <Cards name={lastTwo[1].name} />
            </AnimScale>
          </div>
        </div>

        <AnimFadeUp className="mt-12 text-center">
          <Link
            to={buttonLink}
            className="inline-block rounded-lg bg-[#0097b2] px-8 py-3 text-sm sm:text-base font-semibold text-white hover:bg-sky-700 transition-colors"
          >
            {buttonText}
          </Link>
        </AnimFadeUp>
      </div>
    </section>
  );
}