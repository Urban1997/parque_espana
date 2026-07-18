import { Link } from "react-router-dom";
import Logo from "@/assets/icons/Logo.webp";
import { AnimFadeUp } from "../Animations";
import { HomeContent } from "../../constants/Home";

export default function ParkExperience() {
  const { title, description, buttons } = HomeContent.experiencePark;

  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <AnimFadeUp className="mb-8 sm:mb-12">
            <img
              src={Logo}
              alt="Logo Parque España"
              loading="lazy"
              className="h-24 sm:h-28 md:h-45 object-contain"
            />
          </AnimFadeUp>

          {/* Título */}
          <AnimFadeUp className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-[#3C3C3C]">
              {title}
            </h2>
          </AnimFadeUp>

          {/* Descripción */}
          <AnimFadeUp className="text-base sm:text-lg md:text-xl text-[#3C3C3C] mb-12 sm:mb-16 max-w-3xl leading-relaxed">
            <p>{description}</p>
          </AnimFadeUp>

          {/* Botones */}
          <AnimFadeUp className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full sm:w-auto justify-center">
            <Link
              to={buttons.activities.to}
              className="px-8 sm:px-12 py-4 sm:py-5 bg-[#0097b2] text-white font-semibold rounded-lg hover:bg-[#007a94] transition text-center text-base sm:text-lg"
            >
              {buttons.activities.label}
            </Link>

            <Link
              to={buttons.memberships.to}
              className="px-8 sm:px-12 py-4 sm:py-5 bg-[#003f99] text-white font-semibold rounded-lg hover:bg-[#002d6f] transition text-center text-base sm:text-lg"
            >
              {buttons.memberships.label}
            </Link>
          </AnimFadeUp>
        </div>
      </div>
    </section>
  );
}