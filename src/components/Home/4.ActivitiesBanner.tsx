import ActivitiesCards from "./5.ActivitiesCards";
import { HomeContent } from "../../constants/Home";

export default function ActivitiesBanner() {
  const { title, description, cards } = HomeContent.activities;
  
  // ↑ Lee: title, description, cards de las constantes

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          {title}
        </h2>
        <p className="text-lg text-gray-700 mb-16">
          {description}
        </p>

        {/* AQUÍ PASA items={cards} */}
        <ActivitiesCards items={cards} />
      </div>
    </section>
  );
}