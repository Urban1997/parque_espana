import Card from "../CardShort";
import pillar1Img from "@/assets/images/About/pillar1.png";
import pillar2Img from "@/assets/images/About/pillar2.png";
import pillar3Img from "@/assets/images/About/pillar3.png";
import { AboutContent } from "../../constants/About";

export default function Pillars() {
  const { pillars } = AboutContent.pillars;
  return (
    <section className="px-6 py-16 md:px-10 lg:px-26">

      <h2 className="text-center text-3xl font-extrabold lg:text-4xl">
        Nuestros pilares
      </h2>

      <div className="mt-16 flex flex-col gap-6 md:h-105 md:flex-row lg:h-125">
        <Card
          image={pillar1Img}
          title={pillars[0].title}
          text={pillars[0].text}
          imageAlt={pillars[0].imageAlt}
        />
        <Card
          image={pillar2Img}
          title={pillars[1].title}
          text={pillars[1].text}
          imageAlt={pillars[1].imageAlt}
        />
        <Card
          image={pillar3Img}
          title={pillars[2].title}
          text={pillars[2].text}
          imageAlt={pillars[2].imageAlt}
        />
      </div>

    </section>
  );
}