'use client';
import cn from 'classnames';
import Link from 'next/link';
import { useState } from 'react';

export default function SideNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '#',
    },
    {
      name: 'Experience',
      link: '#',
    },
    {
      name: 'Projects',
      link: '#',
    },
    {
      name: 'Contact',
      link: '#',
    },
  ];
  const renderMenuItem = (name: string, link: string) => {
    return (
      <li>
        <Link
          href={link}
          className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
          </svg>
          <span className="ml-3 flex-1 whitespace-nowrap">{name}</span>
        </Link>
      </li>
    );
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-slate-800">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-slate-700 dark:focus:ring-gray-600 md:hidden"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <Link href="/" className="ml-2 flex md:mr-24">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:text-2xl">
                  Albin Ma
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="ml-3 flex items-center">
                <div>
                  <button
                    type="button"
                    className="mr-3 rounded-lg bg-pink-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-pink-500 dark:hover:bg-pink-600 dark:focus:ring-pink-900 md:mr-0"
                  >
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={cn(
          'fixed top-0 left-0 z-40 h-screen w-64 border-r border-gray-200 bg-white pt-20 transition-transform dark:border-gray-700 dark:bg-slate-800 sm:translate-x-0',
          !isMenuOpen && '-translate-x-full',
        )}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-white px-3 pb-4 dark:bg-slate-800">
          <ul className="space-y-2">
            {menuItems.map((menuItem) =>
              renderMenuItem(menuItem.name, menuItem.link),
            )}
          </ul>
        </div>
      </aside>
    </>
  );
}
