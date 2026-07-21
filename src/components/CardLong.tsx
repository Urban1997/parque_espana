import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimHoverScale, AnimStaggerItem } from "./Animations";

export default function CardLong({ card }: any) {
  return (
    <AnimStaggerItem>
      <AnimHoverScale className="card-long-gradient flex h-full min-h-95 flex-col rounded-3xl p-4 text-center text-white sm:min-h-[110px] sm:p-6 lg:min-h-[480px]">
        <img
          src={card.image}
          alt={card.imageAlt}
          loading="lazy"
          className="h-32 w-full rounded-2xl object-cover sm:h-40 lg:h-48"
        />

        <h3 className="mt-5 text-lg font-bold sm:mt-6 sm:text-xl">{card.name}</h3>

        <p className="mt-3 text-sm text-white/90 sm:mt-4 sm:text-base">
          {card.description}
        </p>

        <p className="mt-4 text-2xl font-bold text-[#f4b403] sm:mt-6 sm:text-3xl">
          {card.price}
        </p>

        <div className="flex-1" />

        <Link
          to={card.buttonLink}
          className="mt-6 inline-flex items-center justify-center gap-1 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-100 sm:text-base"
        >
          {card.buttonText}
          <ChevronRight className="h-4 w-4" />
        </Link>
      </AnimHoverScale>
    </AnimStaggerItem>
  );
}