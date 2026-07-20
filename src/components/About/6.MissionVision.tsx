import CardBadge from "../CardBadge";
import missionImg from "@/assets/images/About/mission.webp";
import visionImg from "@/assets/images/About/vision.webp";
import { AboutContent } from "../../constants/About";

export default function MissionVision() {
    const { mission, vision } = AboutContent.missionVision;
    return (
        <section className="px-6 py-16 md:px-10 lg:px-26">

            <div className="mt-16 flex flex-col items-start gap-8 md:flex-row">
                <CardBadge
                  image={missionImg}
                  imagePosition="top-left"
                  title={mission.title}
                  text={mission.text}
                />
                <CardBadge
                  image={visionImg}
                  imagePosition="bottom-right"
                  title={vision.title}
                  text={vision.text}
                  backgroundColor="#FAFAFA"
                />
            </div>

        </section>
    );
}
