"use client";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { Dialog } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
// import { isScrollUp } from "../utils/handle-scroll";

interface NavigationSubItem {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
}

interface NavigationItem {
  id: number;
  url: string | null;
  newTab: boolean;
  text: string;
  links: Array<NavigationSubItem> | [];
}

// interface MobileNavLink extends NavigationItem {
//   closeMenu: () => void;
// }

function BulletPoint() {
  return <span className="scale-0 group-hover:scale-100">&bull;</span>;
}

function NavigationSubItem({ url, text }: NavigationSubItem) {
  return (
    <Link href={url} className="group flex gap-x-1">
      <BulletPoint />
      {text}
    </Link>
  );
}

function NavigationItem({ id, url, text, links }: NavigationItem) {
  // const path = usePathname();

  const [isActive, setIsActive] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const button = event.currentTarget;
    button.disabled = true;
    setTimeout(() => {
      button.disabled = false;
    }, 1500);

    if (!isActive) {
      setIsActive(true);
      setTimeout(() => {
        setIsExpanded(true);
      }, 500);
    } else {
      setIsExpanded(false);
      setTimeout(() => {
        setIsActive(false);
      }, 1000);
    }
  }

  if (links.length > 0) {
    return (
      <>
        <button
          className={`h-fit grid duration-500 transition-[grid-template-columns] justify-between ${
            isActive ? "grid-cols-[1fr_1fr]" : "grid-cols-[1fr_0fr]"
          }`}
          onClick={handleClick}
        >
          <div className="group w-[10.625rem] flex gap-x-1">
            <BulletPoint />
            {text}
          </div>
          <div
            className={`grid duration-1000 transition-[grid-template-rows] ${
              isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              {links.map((link: NavigationSubItem) => (
                <NavigationSubItem key={link.id} {...link} />
              ))}
            </div>
          </div>
        </button>
      </>
    );
  } else if (url !== null) {
    return (
      <Link href={url} className="group w-[10.625rem] flex gap-x-1">
        <BulletPoint />
        {text}
      </Link>
    );
  }
}

// function MobileNavigationLink({ url, text, closeMenu }: MobileNavigationLink) {
//   const path = usePathname();
//   const handleClick = () => {
//     closeMenu();
//   };
//   return (
//     <a className="flex">
//       <Link
//         href={url}
//         onClick={handleClick}
//         className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-900 ${
//           path === url && "dark:text-violet-400 dark:border-violet-400"
//         }}`}
//       >
//         {text}
//       </Link>
//     </a>
//   );
// }

export default function NavigationBar({
  navigationItems,
  logoUrl,
}: {
  navigationItems: Array<NavigationItem>;
  logoUrl: string | null;
}) {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const closeMenu = () => {
  //   setMobileMenuOpen(false);
  // };

  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [isScrollUp, setIsScrollUp] = useState(true);

  useEffect(() => {
    function handleScroll() {
      let newScrollPosition = window.scrollY;
      setIsScrollUp(scrollPosition > newScrollPosition);
      setScrollPosition(newScrollPosition);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className={`w-full fixed top-0 left-0 flex gap-x-24 items-center transition-all duration-500 ${
        scrollPosition === 0 ? "bg-transparent" : "bg-white"
      } ${isScrollUp ? "h-fit" : "-translate-y-full"}`}
    >
      <Logo src={logoUrl} />
      <div className="grid grid-rows-4 grid-flow-col">
        {navigationItems.map((item: NavigationItem) => (
          <NavigationItem key={item.id} {...item} />
        ))}
      </div>
    </nav>
  );
}
