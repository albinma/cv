'use client';

import ExternalLinks from '@/app/Nav/ExternalLinks';
import Links from '@/app/Nav/Links';
import cn from 'classnames';
import Link from 'next/link';
import { RefObject, useEffect, useRef, useState } from 'react';
import * as Icon from 'react-feather';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sideMenuButton = useRef(null);
  const sideMenu = useRef(null);

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
      <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-slate-800 md:z-40">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <nav className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                ref={sideMenuButton}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-slate-700 dark:focus:ring-gray-600 md:hidden"
              >
                <span className="sr-only">Open sidebar</span>
                <Icon.Menu className="h-6 w-6" />
              </button>
              <Link href="/" className="ml-6 md:mr-24 md:hidden">
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white sm:text-4xl">
                  Albin Ma
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="ml-3 flex items-center">
                <Link
                  href="#"
                  className="item-center mr-1 flex rounded-lg bg-pink-500 px-3 py-2 text-center text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-pink-500 dark:hover:bg-pink-600 dark:focus:ring-pink-900 md:mr-0"
                >
                  <Icon.Download className="h-4 w-4" />
                  <span className="ml-2">Resume</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <aside
        id="logo-sidebar"
        ref={sideMenu}
        className={cn(
          'fixed top-0 left-0 z-40 h-screen justify-between space-y-4 border-r border-gray-200 bg-white pl-4 pr-8 transition-transform duration-75 ease-in-out dark:border-gray-700 dark:bg-slate-800 sm:translate-x-0 md:z-50 md:px-12',
          !isMenuOpen && '-translate-x-full',
        )}
        aria-label="Sidebar"
      >
        <nav className="flex h-full flex-col lg:ml-72">
          <Link href="/" className="mt-4 hidden p-2 md:block">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:text-2xl">
              Albin Ma
            </span>
          </Link>
          <Links
            className="flex-grow space-y-4 pt-20"
            onLinkClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <ExternalLinks
            className="mb-8 mt-4 space-y-4"
            onExernalLinkClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </nav>
      </aside>
    </>
  );
}
