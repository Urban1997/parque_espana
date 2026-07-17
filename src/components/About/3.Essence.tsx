import essenceBg from "@/assets/images/About/essence.png";

export default function Essence() {
  return (
    <section className="w-full bg-[#F2F4F7]">
    <div
        className="relative flex h-[400px] w-full items-start bg-cover bg-center lg:h-[620px]"
        style={{ backgroundImage: `url(${essenceBg})` }}
    >

        {/* Contenido: ocupa 60% en desktop, con padding a los lados */}
        <div className="relative z-10 w-full px-6 pt-10 text-[#3C3C3C] lg:w-[70%] lg:pl-30 lg:pr-28 lg:pt-20">

            {/* Título centrado dentro de esta columna de 70% */}
            <h2 className="text-center text-2xl font-extrabold leading-tight lg:text-4xl">
                Nuestra esencia
            </h2>

            {/* Texto a la izquierda, más grande */}
            <p className="mt-6 text-justify text-lg lg:text-[26px]">
                Nacimos como un punto de encuentro para las familias de origen
                español en Puebla y hemos evolucionado hasta convertirnos en
                una comunidad abierta donde tradición, bienestar y convivencia
                forman parte de la vida diaria.
            </p>

            <p className="mt-6 text-justify text-lg lg:text-[26px]">
                A través del deporte, cultura y recreación, fomentamos espacios
                que fortalecen los lazos entre generaciones y promueven una vida
                activa para todas las edades.
            </p>
        </div>
    </div>
</section>
  );
}