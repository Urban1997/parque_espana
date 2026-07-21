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

// Colores del degradado: empieza fuerte (oscuro) y termina claro
const GRADIENT_START = { r: 55, g: 65, b: 81 };    // gray-700 (fuerte)
const GRADIENT_END = { r: 209, g: 213, b: 219 };   // gray-300 (claro)

function interpolateColor(t: number) {
  const r = Math.round(GRADIENT_START.r + (GRADIENT_END.r - GRADIENT_START.r) * t);
  const g = Math.round(GRADIENT_START.g + (GRADIENT_END.g - GRADIENT_START.g) * t);
  const b = Math.round(GRADIENT_START.b + (GRADIENT_END.b - GRADIENT_START.b) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

export default function Timeline({ items }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const lastIndex = items.length - 1;

  return (
    <div className="w-full overflow-visible px-6 py-16 md:px-10 lg:px-20">
      <div className="relative flex justify-between">

        {/* Línea horizontal con degradado */}
        <div
          className="absolute inset-x-0 top-[160px] z-0 h-[4px] md:top-[192px] lg:top-[224px]"
          style={{
            background: `linear-gradient(to right, rgb(${GRADIENT_START.r},${GRADIENT_START.g},${GRADIENT_START.b}), rgb(${GRADIENT_END.r},${GRADIENT_END.g},${GRADIENT_END.b}))`,
          }}
        />

        {items.map((item, index) => {
          const isActive = activeIndex === index;
          const isLast = index === lastIndex;
          const t = index / lastIndex;
          const dotColor = interpolateColor(t);

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

              {/* Punto pequeño: color según su posición en el degradado */}
              <div
                className="mt-9 h-6 w-6 rounded-full transition-colors"
                style={{ backgroundColor: dotColor }}
              />

              {/* Año/etiqueta en pastilla */}
              <button
                className={`mt-6 whitespace-nowrap rounded-xl px-8 py-1 text-2xl font-bold shadow-lg transition-colors ${
                  isActive ? isLast ? "bg-[#004AAD] text-white" : "bg-[#F2A900]": "bg-white"
                }`}
              >
                {item.year}
              </button>

              {/* Tarjeta de información */}
              {isActive && (
                <div className="absolute left-0 top-full z-20 mt-1 w-72 rounded-xl bg-[#E5E4E4] p-6 text-left">
                  <h3 className="text-lg font-extrabold text-[#3C3C3C]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-lg leading-snug text-[#3C3C3C]">
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