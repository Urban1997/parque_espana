// JoinUs.tsx
import { Link } from "react-router-dom";
import { MembershipsContent } from "../../constants/Memberships";
import { AnimFadeUp } from "../Animations";

export default function JoinUs() {
  const { title, description, buttonText, buttonLink } = MembershipsContent.joinUs;

  return (
    <section className="bg-[#F2F4F7] px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      <AnimFadeUp>
        <h2 className="mx-auto w-fit text-xl font-extrabold text-[#3C3C3C] sm:whitespace-nowrap sm:text-2xl lg:text-[32px]">
          {title}
        </h2>
      </AnimFadeUp>

      <AnimFadeUp>
        <p className="mx-auto mt-4 max-w-1/2 text-lg text-[#3C3C3C] sm:mt-18 sm:text-2xl">
          {description}
        </p>
      </AnimFadeUp>

      <AnimFadeUp>
        <Link
          to={buttonLink}
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#4B4B4B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2a2a2a] sm:mt-10 sm:px-8 sm:text-base"
        >
          {buttonText}
        </Link>
      </AnimFadeUp>
    </section>
  );
}