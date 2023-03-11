'use client';

import Link from 'next/link';
import { RefObject, useEffect, useRef, useState } from 'react';
import * as Icon from 'react-feather';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sideMenuButton = useRef(null);
  const sideMenu = useRef(null);

  const menuOnClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    console.log('🚀 ~ file: Nav.tsx:67 ~ Nav ~ isMenuOpen:', isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleClick(event: MouseEvent) {
      const sideMenuButtonNode = sideMenuButton as RefObject<HTMLElement>;
      const notSideMenuButtonNode =
        sideMenuButtonNode &&
        sideMenuButtonNode.current &&
        !sideMenuButtonNode.current.contains(event.target as Node);

      const sideMenuNode = sideMenu as RefObject<HTMLElement>;
      const notSideMenuNode =
        sideMenuNode &&
        sideMenuNode.current &&
        !sideMenuNode.current.contains(event.target as Node);

      if (notSideMenuButtonNode && notSideMenuNode) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 w-full border-b-2 bg-slate-100">
        <div className="flex flex-nowrap items-center justify-between py-4 px-8">
          <div className="grow">
            <Link
              href="/"
              className="border-4 border-slate-900 px-2 text-3xl font-bold text-slate-900"
            >
              AM
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button>
              <Icon.Menu className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden flex-nowrap items-center justify-between md:flex">
            <nav className="px-6">
              <ul className="mx-auto flex flex-row items-center justify-between space-x-6">
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Projects
                  </a>
                </li>
              </ul>
            </nav>
            <button className="flex flex-row items-center justify-between rounded-md bg-pink-500 py-2 px-3 text-slate-100">
              <Icon.Download className="mr-2 h-4 w-4" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
