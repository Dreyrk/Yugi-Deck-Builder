import Link from "next/link";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { ImFire } from "react-icons/im";

const footerLinks = [
  {
    logo: <AiFillInstagram size={40} color="#f8f9fa" />,
    href: "https://www.instagram.com/kanashii.seigan/",
  },
  {
    logo: <AiOutlineGithub size={40} color="#f8f9fa" />,
    href: "https://github.com/Dreyrk",
  },
  {
    logo: <AiFillLinkedin size={40} color="#f8f9fa" />,
    href: "https://www.linkedin.com/in/lucas-rondepierre-b9b215237/",
  },
];

export default function Footer() {
  return (
    <footer className="w-full flex flex-col mt-5 border-t border-gray-100">
      <div className="flex justify-around py-6">
        {footerLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.logo}
          </Link>
        ))}
      </div>
      <h3 className="p-6 flex font-semibold text-xs justify-center items-center gap-4 text-slate-200">
        <ImFire size={15} color="#ffc100" />
        Made by a Yu-Gi-Oh player for Yu-Gi-Oh players
        <ImFire size={15} color="#ffc100" />
      </h3>
    </footer>
  );
}
