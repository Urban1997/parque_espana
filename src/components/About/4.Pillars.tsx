import Card from "../CardShort";
import pillar1Img from "@/assets/images/About/pillar1.png";
import pillar2Img from "@/assets/images/About/pillar2.png";
import pillar3Img from "@/assets/images/About/pillar3.png";

export default function Pillars() {
  return (
    <section className="px-26 py-16">

      <h2 className="text-center text-3xl font-extrabold lg:text-4xl">
        Nuestros pilares
      </h2>

      <div className="mt-16 flex h-[380px] gap-6 lg:h-[500px]">
        <Card
          image={pillar1Img}
          title="Cultura y tradición"
          text="Celebramos nuestras raíces y preservamos nuestra identidad"
        />
        <Card
          image={pillar2Img}
          title="Deporte y bienestar"
          text="Instalaciones y actividades para una vida activa"
        />
        <Card
          image={pillar3Img}
          title="Comunidad y convivencia"
          text="Espacios para compartir, crecer y fortalecer vínculos"
        />
      </div>

    </section>
  );
}