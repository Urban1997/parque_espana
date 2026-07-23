import { HomeContent } from "../../constants/Home";
import { AnimFadeUp, AnimSlideRight } from "../Animations";
import AppStore from "@/assets/images/Home/App_Store.webp";
import GooglePlay from "@/assets/images/Home/Google_Play.webp";
import Mobile from "@/assets/images/Home/Mobile.webp";

export default function App() {
  const { title, description, googlePlayAlt, appStoreAlt } = HomeContent.app;

  return (
    <section className="bg-header-gradient mt-20 lg:mt-40 sm:py-24 lg:py-32 overflow-hidden">
      <div className="wrap-90 sm:wrap-80 lg:wrap-80">
        <div className="grid grid-cols-1 sm:grid-cols-[55%_45%] gap-0 sm:gap-8 items-end">
          <AnimFadeUp className="w-full text-white mb-22">
            <h2 className="font-extrabold mt-10 text-[22px] sm:text-[24px] lg:text-[32px] lg:font-extrabold mb-8 leading-tight text-center sm:text-left">
              {title}
            </h2>

            <p className="text-[16px] text-justify sm:text-[20px] lg:text-[22px] mb-12 leading-relaxed font-light sm:text-left">
              {description}
            </p>

            <div className="flex gap-4 sm:gap-6 lg:gap-8 justify-center sm:justify-start">
              <img
                src={GooglePlay}
                alt={googlePlayAlt}
                loading="lazy"
                className="h-10 sm:h-12 lg:h-16 object-contain transition"
              />
              <img
                src={AppStore}
                alt={appStoreAlt}
                loading="lazy"
                className="h-10 sm:h-12 lg:h-16 object-contain transition"
              />
            </div>
          </AnimFadeUp>

          <AnimSlideRight className="flex justify-center sm:justify-end -mb-20 sm:-mb-32 lg:-mb-40">
            <img
              src={Mobile}
              alt="App móvil"
              loading="lazy"
              className="w-72 sm:w-full lg:w-[520px] max-w-full object-contain"
            />
          </AnimSlideRight>
        </div>
      </div>
    </section>
  );
}