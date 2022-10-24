import { useScrollDirection } from "@/utils/useScrollDirection";
import HeaderLinks from "./HeaderLinks";
import HeaderLogo from "./HeaderLogo";

export default function Header() {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`sticky h-24 w-full bg-sand px-4 py-8 transition-all duration-300 ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      }`}
    >
      <div className="flex items-center justify-between lg:mx-auto lg:max-w-screen-xl">
        <HeaderLogo />
        <HeaderLinks />
      </div>
    </header>
  );
}
