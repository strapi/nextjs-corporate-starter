"use client";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from 'react';

interface NavLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
}

function NavLink({ url, text }: NavLink) {
  const path = usePathname().replace(/^\/\w+/, '');
  const isActive = path === url;
  if (isActive) {
    return (
      <li className="flex">
        <span
          className={`flex items-center mx-4 -mb-1 border-b-2 dark:border-transparent dark:text-teal-400 dark:border-teal-400`}
        >
          {text}
        </span>
      </li>
    );
  }        
  return (
    <li className="flex">
      <Link
        href={url}
        className={`flex items-center mx-4 -mb-1 dark:border-transparent`}
      >
        {text}
      </Link>
    </li>
  );
}

export default function Navbar({
  links,
  logoUrl,
  logoText,
}: {
  links: Array<NavLink>;
  logoUrl: string | null;
  logoText: string | null;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="p-4 dark:bg-black dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto px-0 sm:px-6">
        <Logo src={logoUrl}>
          {logoText && <h2 className="text-2xl font-bold">{logoText}</h2>}
        </Logo>

        <div className="items-center flex-shrink-0 hidden lg:flex">
          <ul className="items-stretch hidden space-x-3 lg:flex">
            {links.map((item: NavLink) => (
              <NavLink key={item.id} {...item} />
            ))}
          </ul>
        </div>
      <div className="relative lg:hidden">      
        <button className="p-4"  onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {isMenuOpen && (
          <ul className="absolute mt-2 py-2 w-30 bg-col rounded-md shadow-lg">
            {links.map((item: NavLink) => (
              <NavLink key={item.id} {...item} />
            ))}
          </ul>
        )}        
      </div>
      </div>
    </div>
  );
}
