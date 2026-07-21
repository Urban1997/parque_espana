import { MembershipsContent } from "../../constants/Memberships";
import Benefits1 from "@/assets/images/Memberships/Benefits-1.webp";
import Benefits2 from "@/assets/images/Memberships/Benefits-2.webp";
import Benefits3 from "@/assets/images/Memberships/Benefits-3.webp";
import Benefits4 from "@/assets/images/Memberships/Benefits-4.webp";

import { AnimFadeUp } from "../Animations";

const icons: Record<number, string> = {
  1: Benefits1,
  2: Benefits2,
  3: Benefits3,
  4: Benefits4,
};

export default function Benefits() {
  const { title, cards } = MembershipsContent.benefits;

  return (
    <section className="bg-[#F2F4F7] px-6 py-14 sm:px-10 lg:px-16 mt-16">
      <AnimFadeUp>
        <h2 className="text-center text-2xl font-extrabold text-[#3C3C3C] sm:text-3xl lg:text-4xl">
          {title}
        </h2>
      </AnimFadeUp>

      <div className="relative mx-auto mt-10 max-w-5xl lg:mt-14">

        {/* Línea horizontal con gradiente, solo visible desde sm en adelante */}
        <div className="benefits-line-gradient absolute left-0 right-0 top-8 hidden h-[3px] sm:block" />

        <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-4 sm:gap-x-6">
          {cards.map(({ id, name, iconAlt }) => (
            <AnimFadeUp key={id}>
              <div className="relative flex flex-col items-center text-center">
                <img
                  src={icons[id]}
                  alt={iconAlt}
                  loading="lazy"
                  className="relative z-10 h-12 w-12 object-contain sm:h-15 sm:w-18"
                />
                <p className="mt-3 max-w-32.5 text-center text-[16px] font-normal text-[#3C3C3C] sm:max-w-40 sm:text-[22px]">
                  {name}
                </p>
              </div>
            </AnimFadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}