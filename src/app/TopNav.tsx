'use client';

import cn from 'classnames';
import Link from 'next/link';
import { FunctionComponent, useState } from 'react';

const TopNav: FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-20 w-full border-b border-slate-200 bg-white px-2 py-2.5 dark:border-slate-600 dark:bg-slate-900 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="self-center whitespace-nowrap px-4 text-xl font-semibold dark:text-white">
            Albin Ma
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            className="mr-3 rounded-lg bg-pink-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-pink-500 dark:hover:bg-pink-600 dark:focus:ring-pink-900 md:mr-0"
          >
            Download CV
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center rounded-lg p-2 text-sm text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={cn(
            'w-full items-center justify-between md:order-1 md:flex md:w-auto',
            !isMenuOpen && 'hidden',
          )}
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-slate-900">
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
