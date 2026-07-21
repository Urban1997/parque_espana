import { MembershipsContent } from "../../constants/Memberships";
import CardLong from "../CardLong";
import { AnimStaggerContainer, cardVariants } from "../Animations";

export default function Plans() {
  const { title, cards } = MembershipsContent.plans;

  return (
    <section className="bg-[#F2F4F7] px-6 py-14 sm:px-10 lg:px-16 mt-10 lg:mt-16">
      <h2 className="text-center text-2xl font-extrabold text-[#3C3C3C] sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      <AnimStaggerContainer className="mx-auto mt-10 flex max-w-6xl flex-wrap justify-center gap-6 lg:mt-14 lg:gap-8">
        {cards.map((card) => (
          <div key={card.id} className="w-full max-w-sm sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)]">
            <CardLong card={card} variants={cardVariants} />
          </div>
        ))}
      </AnimStaggerContainer>
    </section>
  );
}