'use client';

import cn from 'classnames';
import { RefObject, useEffect, useRef, useState } from 'react';
import * as Icon from 'react-feather';
import * as Scroll from 'react-scroll';

export default function Nav() {
  const menuItems = [
    {
      label: 'Home',
      scrollTo: 'hero',
      icon: <Icon.Home className="h-6 w-6" />,
    },
    {
      label: 'About',
      scrollTo: 'about',
      icon: <Icon.User className="h-6 w-6" />,
    },
    {
      label: 'Work',
      scrollTo: 'work',
      icon: <Icon.Briefcase className="h-6 w-6" />,
    },
    {
      label: 'Projects',
      scrollTo: 'projects',
      icon: <Icon.Codesandbox className="h-6 w-6" />,
    },
    {
      label: 'Contact',
      scrollTo: 'contact',
      icon: <Icon.Mail className="h-6 w-6" />,
    },
  ];
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
      <header className="sticky top-0 z-50 w-full border-b-2 bg-slate-100">
        <div className="flex flex-nowrap items-center justify-between py-4 px-4 md:px-8">
          <div className="grow">
            <Scroll.Link
              to="hero"
              duration={75}
              smooth={true}
              className="cursor-pointer border-4 border-slate-900 px-2 text-xl font-bold text-slate-900 md:text-3xl"
              onClick={() => setIsMenuOpen(false)}
            >
              AM
            </Scroll.Link>
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <Icon.X className="h-6 w-6" />
              ) : (
                <Icon.Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="hidden flex-nowrap items-center justify-between md:flex">
            <nav className="px-6">
              <ul className="mx-auto flex flex-row items-center justify-between space-x-6">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <Scroll.Link
                      to={item.scrollTo}
                      duration={75}
                      smooth={true}
                      offset={-75}
                      className="cursor-pointer text-slate-900 hover:underline"
                    >
                      {item.label}
                    </Scroll.Link>
                  </li>
                ))}
              </ul>
            </nav>
            <button className="flex flex-row items-center justify-between rounded-md bg-pink-500 py-2 px-3 text-slate-100">
              <Icon.Download className="mr-2 h-4 w-4" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </header>
      <aside
        className={cn(
          'fixed top-0 right-0 z-40 flex h-screen w-full flex-col items-end justify-center border-l-2 bg-slate-100 bg-opacity-30 backdrop-blur-lg backdrop-filter transition-transform duration-75 ease-in-out md:hidden',
          !isMenuOpen && 'translate-x-full',
        )}
      >
        <nav className="flex h-full w-72 flex-col items-center justify-center border-l-2 bg-slate-100 bg-opacity-100 p-8">
          <ul className=" space-y-8 text-2xl text-slate-700">
            {menuItems.map((item) => (
              <li key={item.label} className="flex flex-row items-center">
                <span className="mr-2">{item.icon}</span>
                <Scroll.Link
                  to={item.scrollTo}
                  duration={300}
                  smooth={true}
                  offset={-75}
                  className="cursor-pointer text-slate-900 hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Scroll.Link>
              </li>
            ))}
          </ul>

          <button className="mt-16 flex w-48 flex-row items-center justify-between rounded-md bg-pink-500 py-2 px-3 text-slate-100">
            <div className="mx-auto flex flex-row items-center justify-between">
              <Icon.Download className="mr-2 h-4 w-4" />
              <span>Resume</span>
            </div>
          </button>
        </nav>
      </aside>
    </>
  );
}
