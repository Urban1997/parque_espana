import { useEffect, useState } from "react";
import { HomeContent } from "../../constants/Home";  // ← Así

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

    runAnimation();
    const intervalId = window.setInterval(runAnimation, interval);

    return () => {
      clearInterval(intervalId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration, interval]);

  return { count };
}

interface CounterItemProps {
  value: number;
  suffix: string;
  label: string;
}

function CounterItem({ value, suffix, label }: CounterItemProps) {
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

export default function StatsCounter() {
  const { counters } = HomeContent.stats;

  return (
    <div className="mt-16 rounded-xl bg-gray-100 p-6 sm:p-8">
      <div className="grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-4">
        {counters.map((counter) => (
          <CounterItem key={counter.label} {...counter} />
        ))}
      </div>
    </div>
  );
}