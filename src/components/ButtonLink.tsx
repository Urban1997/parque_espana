import { Link } from "react-router-dom";

type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps {
  text: string;
  color: string;
  to: string;
  size?: ButtonSize;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-10 py-3 text-xl rounded-xl",
  xl: "px-14 py-4 text-2xl rounded-xl",
};

export default function Button({ text, color, to, size = "md" }: ButtonProps) {
  return (
    <Link
      to={to}
      className={`inline-block font-semibold transition ${sizeClasses[size]}`}
      style={{ backgroundColor: color }}
    >
      {text}
    </Link>
  );
}