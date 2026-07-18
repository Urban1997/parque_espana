import { HomeContent } from "../../constants/Home";
import { AnimFadeUp, AnimScale } from "../Animations";
import Racket from "@/assets/images/Home/Racket.webp";
import Flags from "@/assets/images/Home/Flags.webp";
import Group from "@/assets/images/Home/Group.webp";
import Star from "@/assets/images/Home/Star.webp";

export default function ExperienceBanner() {
  const { title, items } = HomeContent.experience;

  const images = [Racket, Group, Star, Flags];

  return (
    <section className="bg-[#F2F4F7] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimFadeUp>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3C3C3C] text-center mb-6 sm:mb-8 md:mb-20">
            {title}
          </h2>
        </AnimFadeUp>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {items.map((item, index) => (
            <AnimScale key={item.id} className="text-center">
              <img
                src={images[index]}
                alt={item.title}
                loading="lazy"
                className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto mx-auto mb-4 sm:mb-6 object-contain"
              />

              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#3C3C3C] mb-2 sm:mb-3">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base md:text-lg text-[#3C3C3C] leading-relaxed">
                {item.description}
              </p>
            </AnimScale>
          ))}
        </div>
      </div>
    </section>
  );
}