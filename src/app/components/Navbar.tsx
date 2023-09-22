import Link from "next/link";
import Image from "next/image";
import { MdLogin } from "react-icons/md";

export default function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4">
        <Link
          className="grid place-content-center mb-2 sm:mb-0"
          href="/"
          replace={true}>
          <Image
            src="/millenium-puzzle.png"
            alt="puzzle"
            width={80}
            height={80}
          />
        </Link>
        <h1 className="text-white text-3xl text-center font-semibold">
          Deck Builder
        </h1>
        <Link
          className="bg-slate-100 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          href="/authenticate"
          replace={true}>
          <span className="hidden md:block">Sign Up / Sign In</span>
          <MdLogin className="md:hidden block" size={30} />
        </Link>
      </nav>
    </header>
  );
}
