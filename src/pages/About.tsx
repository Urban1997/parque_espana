
import Hero from '../components/About/1.Hero'
// import StatsCounter from "../components/Home/3.StatsCounter";
import Essence from "../components/About/3.Essence";
import Pillars from "../components/About/4.Pillars";
import MissionVision from "../components/About/6.MissionVision";

export default function About() {
    return (
        <main>
            <Hero />
            {/* <StatsCounter /> */}
            <Essence />
            <Pillars />
            <MissionVision />
        </main>
    )
}