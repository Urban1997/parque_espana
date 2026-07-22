// Steps.tsx
import { MembershipsContent } from "../../constants/Memberships";
import Separator from "@/assets/images/Memberships/Separator.webp";
import { AnimFadeUp, AnimStaggerContainer, AnimStaggerItem } from "../Animations";

export default function Steps() {
  const { title, items } = MembershipsContent.steps;

  return (
    <section className="relative overflow-hidden bg-[#F2F4F7] pb-20 pt-14 sm:pb-24 lg:pb-28">
      <div className="mx-auto px-6 text-center sm:px-10 lg:px-16">
        <AnimFadeUp>
          <h2 className="mx-auto max-w-[300px] text-xl font-extrabold text-[#3C3C3C] sm:max-w-3xl sm:whitespace-nowrap sm:text-2xl lg:text-3xl">
            {title}
          </h2>
        </AnimFadeUp>

        <AnimStaggerContainer className="mx-auto mt-8 flex w-fit max-w-full flex-col items-start gap-4 sm:mt-20 sm:gap-6">
          {items.map(({ id, text }) => (
            <AnimStaggerItem key={id}>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <span className="text-xl font-extrabold text-[#0097b2] sm:text-[22px] lg:text-[24px]">
                  {id}
                </span>
                <p className="max-w-[240px] pt-0.5 text-left text-base text-[#3C3C3C] sm:max-w-md sm:pt-1 sm:text-xl lg:max-w-lg lg:text-2xl">
                  {text}
                </p>
              </div>
            </AnimStaggerItem>
          ))}
        </AnimStaggerContainer>
      </div>

      {/* Separador decorativo inferior */}
      <img
        src={Separator}
        alt=""
        loading="lazy"
        className="absolute bottom-0 left-0 w-full object-cover"
      />
    </section>
  );
}