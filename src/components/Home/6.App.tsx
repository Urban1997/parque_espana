import { HomeContent } from "../../constants/Home";
import { AnimFadeUp, AnimSlideRight } from "../Animations";
import AppStore from "@/assets/images/Home/App_Store.webp";
import GooglePlay from "@/assets/images/Home/Google_Play.webp";
import Mobile from "@/assets/images/Home/Mobile.webp";

export default function App() {
  const { title, description, googlePlayAlt,  appStoreAlt } = HomeContent.app;

  return (
    <section className="bg-header-gradient py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-end">
          <AnimFadeUp className="text-white pl-0 mb-19">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold mb-8 leading-tight text-center md:text-left">
              {title}
            </h2>

            <p className="text-lg sm:text-lg md:text-xl mb-12 leading-relaxed font-light text-center md:text-left">
              {description}
            </p>

            <div className="flex gap-4 sm:gap-6 md:gap-8 justify-center md:justify-start">
              <img
                src={GooglePlay}
                alt={googlePlayAlt}
                loading="lazy"
                className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain transition"
              />
              <img
                src={AppStore}
                alt={appStoreAlt}
                loading="lazy"
                className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain transition"
              />
            </div>
          </AnimFadeUp>

          <AnimSlideRight className="flex justify-center md:justify-end -mb-20 md:-mb-32 lg:-mb-40">
            <img
              src={Mobile}
              alt="App móvil"
              loading="lazy"
              className="w-72 sm:w-96 md:w-125 lg:w-150 object-contain"
            />
          </AnimSlideRight>
        </div>
      </div>
    </section>
  );
}
