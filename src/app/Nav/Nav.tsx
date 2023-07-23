'use client';

import { ClickAwayListener } from '@mui/base';
import cn from 'classnames';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import * as Icon from 'react-feather';
import * as Scroll from 'react-scroll';

export default function Nav(): JSX.Element {
  const scrollSpeed = 150;
  const scrollOffset = -60;

  const menuItems = [
    {
      label: 'Home',
      scrollTo: 'hero',
      icon: <Icon.Home className="h-6 w-6" />,
      enable: true,
    },
    {
      label: 'About',
      scrollTo: 'about',
      icon: <Icon.User className="h-6 w-6" />,
      enable: true,
    },
    {
      label: 'Work',
      scrollTo: 'work',
      icon: <Icon.Briefcase className="h-6 w-6" />,
      enable: true,
    },
    {
      label: 'Projects',
      scrollTo: 'projects',
      icon: <Icon.Codesandbox className="h-6 w-6" />,
      enable: true,
    },
    {
      label: 'Contact',
      scrollTo: 'contact',
      icon: <Icon.Mail className="h-6 w-6" />,
      enable: true,
      externalLink: 'mailto:albinma@gmail.com',
    },
    {
      label: 'LinkedIn',
      scrollTo: '',
      icon: <Icon.Linkedin className="h-6 w-6" />,
      enable: true,
      hideTopNav: true,
      externalLink: 'https://www.linkedin.com/in/albin-ma-9367a73a/',
    },
    {
      label: 'Github',
      scrollTo: '',
      icon: <Icon.GitHub className="h-6 w-6" />,
      iconOnly: true,
      enable: true,
      hideTopNav: true,
      externalLink: 'https://github.com/albinma/cv',
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLDivElement>(null);

  const onMobileMenuClickAway = (event: MouseEvent | TouchEvent): void => {
    const { target } = event;

    if (target !== window) {
      const containsTarget = menuButtonRef?.current?.contains(
        target as Element,
      );

      if (!containsTarget && isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-slate-50 shadow-md">
        <div className="flex flex-nowrap items-center justify-between px-4 py-4 md:px-8">
          <div className="grow">
            <Link
              href="/"
              className="cursor-pointer border-4 border-slate-900 px-2 text-xl font-bold text-slate-900 md:text-3xl"
            >
              AM
            </Link>
          </div>
          <div className="flex items-center md:hidden" ref={menuButtonRef}>
            <button
              data-testid="menu-button"
              role="button"
              aria-label="menu"
              aria-expanded={isMenuOpen}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
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
                {menuItems
                  .filter((item) => !item.hideTopNav)
                  .map((item) => (
                    <li
                      key={item.label}
                      className={cn(
                        'flex flex-row items-center',
                        item.enable
                          ? 'cursor-pointer text-slate-900 hover:underline'
                          : 'text-slate-400',
                      )}
                    >
                      <Scroll.Link
                        to={item.enable ? item.scrollTo : ''}
                        duration={scrollSpeed}
                        disabled={!item.enable}
                        smooth={true}
                        offset={scrollOffset}
                        href={`#${item.scrollTo}`}
                      >
                        {item.label}
                      </Scroll.Link>
                    </li>
                  ))}
              </ul>
            </nav>
            <a
              href="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-between rounded-md bg-pink-500 px-3 py-2 text-slate-100"
              role="button"
              aria-label="download resume"
            >
              <Icon.Download className="mr-2 h-4 w-4" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed right-0 top-0 z-30 h-screen w-full bg-slate-50/30 backdrop-blur-md" />
      )}

      <aside
        data-testid="mobile-menu"
        className={cn(
          'fixed right-0 top-0 z-40 flex h-screen w-72 flex-col items-end justify-center overflow-y-scroll bg-slate-50 shadow-md transition-transform duration-300 ease-in-out md:hidden',
          !isMenuOpen && 'translate-x-full',
        )}
      >
        <ClickAwayListener
          onClickAway={onMobileMenuClickAway}
          mouseEvent={isMenuOpen ? 'onClick' : false}
        >
          <nav className="flex h-fit w-72 flex-col items-center justify-center bg-slate-50">
            <ul className="space-y-8 text-2xl text-slate-700">
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  className={cn(
                    'flex flex-row items-center',
                    item.enable
                      ? 'cursor-pointer text-slate-900 hover:underline'
                      : 'text-slate-400',
                  )}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.externalLink ? (
                    <a
                      href={item.externalLink}
                      target="_blank"
                      referrerPolicy="no-referrer"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Scroll.Link
                      to={item.enable ? item.scrollTo : ''}
                      disabled={!item.enable}
                      duration={scrollSpeed}
                      smooth={true}
                      offset={scrollOffset}
                      onClick={() => item.enable && setIsMenuOpen(false)}
                      href={`#${item.scrollTo}`}
                    >
                      {item.label}
                    </Scroll.Link>
                  )}
                </li>
              ))}
            </ul>

            <a
              href="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-16 flex w-48 flex-row items-center justify-between rounded-md bg-pink-500 px-3 py-2 text-slate-100"
            >
              <div className="mx-auto flex flex-row items-center justify-between">
                <Icon.Download className="mr-2 h-4 w-4" />
                <span>Resume</span>
              </div>
            </a>
          </nav>
        </ClickAwayListener>
      </aside>
    </>
  );
}
