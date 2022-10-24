export interface IHeaderLink {
  href: string;
  text: string;
  button?: boolean;
}

export default function HeaderLink({
  href,
  text,
  button = false,
}: IHeaderLink) {
  return (
    <li>
      <a
        href={href}
        className={`p-2.5 transition duration-300 ease-in ${
          button
            ? "rounded-md bg-indigo-600 text-white shadow-sm ring-1 ring-indigo-700 hover:bg-indigo-700"
            : "hover:text-indigo-600"
        }`}
      >
        {text}
      </a>
    </li>
  );
}
