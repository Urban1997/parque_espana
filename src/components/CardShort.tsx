interface CardProps {
  image: string;
  title: string;
  text: string;
}

export default function Card({ image, title, text }: CardProps) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl shadow-lg bg-[#3264A2]">

      {/* Imagen: 60% de la altura */}
      <div className="relative h-[60%] w-full">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Contenido: 40% de la altura, fondo azul */}
      <div className="flex h-[40%] w-full flex-col justify-center px-6 py-2 text-white">
        <h3 className="text-left text-lg font-bold leading-tight lg:text-2xl pl-2">
          {title}
        </h3>
        <p className="mt-8 text-left text-sm text-white/90 lg:text-2xl lg:font-light">
          {text}
        </p>
      </div>

    </div>
  );
}