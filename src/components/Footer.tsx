import { Link } from "react-router-dom";
import {
  MapPin,
  Phone
} from "lucide-react";

const columnaIzquierda = [
  { label: "¿Quiénes somos?", to: "/nosotros" },
  { label: "Actividades", to: "/instalaciones/actividades" },
  { label: "Horarios", to: "/instalaciones/horarios" },
];

const columnaDerecha = [
  { label: "Membresías", to: "/membresias" },
  { label: "APP móvil para socios", to: "/app-movil" },
  { label: "Aviso de privacidad", to: "/aviso-de-privacidad" },
];


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400" />

      <div className="mx-auto grid grid-cols-1 gap-10 px-6 py-10 sm:py-12 lg:grid-cols-3 lg:gap-8 max-w-6xl">
        <div className="text-center lg:text-left">
          <h3 className="text-base font-bold text-slate-900 sm:text-lg">
            Patronato del Parque España
          </h3>
          <p className="mt-3 text-sm text-gray-600">
            Tradición que une, bienestar que perdura
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
            <img
              src="/images/logo1.png"
              alt="Logo aliado 1"
              className="h-10 w-auto object-contain"
            />
            <img
              src="/images/logo2.png"
              alt="Logo aliado 2"
              className="h-10 w-auto object-contain"
            />
            <img
              src="/images/logo3.png"
              alt="Logo aliado 3"
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>

        <div className="text-center lg:text-left">
          <h3 className="text-sm font-bold text-slate-900">Conoce más</h3>
          <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
            {columnaIzquierda.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-[#0097b2]">
                {link.label}
              </Link>
            ))}
            {columnaDerecha.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-[#0097b2]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center lg:text-left">
          <h3 className="text-sm font-bold text-slate-900">Contacto</h3>

          <div className="mt-4 flex items-start justify-center gap-2 text-sm text-gray-700 lg:justify-start">
            <MapPin size={18} className="mt-0.5 shrink-0 text-red-600" />
            <p className="text-left">
              Av. 25 Ote. 1001, Ladrillera de Benítez, 72500
              <br />
              Heroica Puebla de Zaragoza, Pue.
            </p>
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-700 lg:justify-start">
            <Phone size={18} className="shrink-0 text-gray-600" />
            <a href="tel:+522229175761" className="hover:text-[#0097b2]">
              +52 1 222 917 5761
            </a>
          </div>

          <div className="mt-4 flex items-center justify-center gap-4 lg:justify-start">
         
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Link
              to="/instalaciones/horarios"
              className="rounded-full bg-[#043351] px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Horarios
            </Link>
            <Link
              to="/parque-espana-2"
              className="rounded-full bg-[#0097b2] px-5 py-2 text-sm font-semibold text-white hover:bg-sky-700"
            >
              Ver Parque España II
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-slate-600 py-3 text-center text-xs text-white">
        Todos los Derechos Reservados Parque España {year}
      </div>
    </footer>
  );
}
