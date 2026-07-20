import CardBadge from "../CardBadge";
import missionImg from "@/assets/images/About/mission.png";
import visionImg from "@/assets/images/About/vision.png";



export default function MissionVision() {
    return (
        <section className="px-6 py-16 md:px-10 lg:px-26">

    <div className="mt-16 flex flex-col items-start gap-8 md:flex-row">
        <CardBadge
          image={missionImg}
          imagePosition="top-left"
          title="MISIÓN"
          text="«Revitalizar y preservar la herencia y tradición española en Puebla, ofreciendo un espacio integral y accesible que fomente la actividad deportiva, la recreación cultural y la integración intergeneracional, para que jóvenes fuertes y viejos sanos convivan en armonía.»"
        />
        <CardBadge
          image={visionImg}
          imagePosition="bottom-right"
          title="VISIÓN"
          text="«Ser el epicentro social, cultural y deportivo de Puebla, reconocido por fusionar tradición e innovación en beneficio de toda la comunidad, transformándose en un modelo de integración y bienestar que inspire a futuras generaciones.»"
          backgroundColor="#FAFAFA"
        />
    </div>

</section>
    );
}
