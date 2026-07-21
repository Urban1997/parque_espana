import { useState } from "react";

interface TimelineItem {
  year: string;
  title: string;
  text: string;
  image: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full overflow-visible px-6 py-16 md:px-10 lg:px-20">
      <div className="relative flex justify-between">

        {/* Línea horizontal: alineada exactamente con el centro del punto de cada item */}
        <div className="absolute inset-x-0 top-[160px] z-0 h-[4px] bg-gray-500 md:top-[192px] lg:top-[224px]" />

        {items.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={item.year}
              className="relative z-10 flex flex-1 flex-col items-center px-2"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Imagen circular */}
              <img
                src={item.image}
                alt={item.title}
                className="h-32 w-32 rounded-full object-cover shadow-md md:h-40 md:w-40 lg:h-44 lg:w-44"
              />

              {/* Punto pequeño: este es el que cruza la línea */}
              <div
                className={`mt-9 h-6 w-6 rounded-full transition-colors ${
                  isActive ? "bg-[#F2A900]" : "bg-gray-400"
                }`}
              />

              {/* Año/etiqueta en pastilla */}
              <button
                className={`mt-6 whitespace-nowrap  text-[#3C3C3C] rounded-xl px-8 py-1 text-2xl font-bold shadow-lg transition-colors ${
                  isActive ? "bg-[#F2A900] ": "bg-white"
                }`}
              >
                {item.year}
              </button>

              {/* Tarjeta de información */}
              {isActive && (
                <div className="absolute left-0 top-full z-20 mt-1 w-72 rounded-xl bg-[#E5E4E4] p-6 text-left ">
                  <h3 className="text-lg font-extrabold text-[#3C3C3C]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-lg text-[#3C3C3C] leading-snug">
                    {item.text}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}