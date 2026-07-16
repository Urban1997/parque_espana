import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Graphic_Element from "@/assets/images/Home/Graphic_Element.png";

function useCountUp(target: number, duration = 1500, interval = 5000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const runAnimation = () => {
      const start = performance.now();

      const animate = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    runAnimation(); // primera vez, al cargar

    const intervalId = window.setInterval(runAnimation, interval);

    return () => {
      clearInterval(intervalId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration, interval]);

  return { count };
}

const stats = [
  { value: 6500, suffix: "", label: "Usuarios activos" },
  { value: 60, suffix: "", label: "Años de historia" },
  { value: 15, suffix: "", label: "Disciplinas deportivas" },
  { value: 1, suffix: "M", label: "de experiencias compartidas" },
];

function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { count } = useCountUp(value);

  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-[#0097b2] sm:text-3xl md:text-4xl">
        +{count}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-black sm:text-base">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-white py-16 mt-16">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <h2 className="text-2xl font-bold text-[#004aad] sm:text-3xl md:text-4xl">
            Tradición, deporte y comunidad en Puebla
          </h2>
          <img
            src={Graphic_Element}
            alt="Elemento gráfico"
            className="hidden h-20 w-20 -mt-10 object-contain md:hidden  lg:h-25 lg:-mt-16 lg:w-25"
          />
        </div>

        <p className="mx-auto mt-16 max-w-3xl text-base text-[#3C3C3C] sm:text-xl">
          Un espacio donde <strong>familias, cultura y bienestar</strong> se
          unen para crear <strong>experiencias memorables</strong> para todas
          las generaciones.
        </p>

        <Link
          to="/instalaciones"
          className="mt-8 inline-block rounded-full bg-[#0097b2] px-6 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 sm:px-8 sm:py-3 sm:text-base sm:mt-16"
        >
          Conoce nuestras instalaciones
        </Link>

        <div className="mt-16 rounded-xl bg-gray-100 p-6 sm:p-8">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
