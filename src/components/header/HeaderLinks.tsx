import HeaderLink from "./HeaderLink";

export default function HeaderLinks() {
  return (
    <nav>
      <ul className="flex justify-between gap-4">
        <HeaderLink href="#about" text="About" />
        <HeaderLink href="#experience" text="Experience" />
        <HeaderLink href="#projects" text="Projects" />
        <HeaderLink href="#contact" text="Contact Me" button />
      </ul>
    </nav>
  );
}
