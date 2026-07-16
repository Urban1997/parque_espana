import hero from "@/assets/images/About/hero.png";

export default function Hero() {
  return (
    <section className="bg-header-gradient text-white">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center overflow-hidden lg:h-[430px] lg:flex-row">

        {/* Imagen */}
        <div className="flex w-full justify-center lg:w-[35%] lg:h-full lg:items-end">
          <img
            src={hero}
            alt="Parque España"
            className="w-[85%] max-w-[220px] object-contain lg:w-[85%] lg:max-w-none"
          />
        </div>

        {/* Contenido */}
        <div className="flex w-full items-center justify-center px-6 py-8 lg:w-[65%] lg:h-full lg:px-0 lg:py-0">
          <div className="w-full rounded-l-[70px] bg-[#042844] px-8 py-10 shadow-xl  lg:py-28">

            <h1 className="text-lg font-bold leading-tight lg:text-4xl">
              Más de seis décadas construyendo comunidad
            </h1>

            <p className="mt-6 max-w-3xl text-lg text-white/90 lg:text-2xl">
              Tradición, bienestar y deporte para todas las generaciones.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}