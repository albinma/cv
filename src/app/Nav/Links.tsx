'use client';

import cn from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import * as Icon from 'react-feather';

type LinksProps = {
  className?: string;
  onLinkClick: () => void;
};

export default function Links({ className, onLinkClick }: LinksProps) {
  const [activeMenuItem, setActiveMenuItem] = useState('Home');
  const onClick = (name: string) => {
    setActiveMenuItem(name);
    onLinkClick();
  };

  const menuItems = [
    {
      name: 'Home',
      link: '/',
      icon: <Icon.Home className="h6 w-6" />,
    },
    {
      name: 'About',
      link: '#',
      icon: <Icon.User className="h6 w-6" />,
    },
    {
      name: 'Experience',
      link: '#',
      icon: <Icon.Briefcase className="h6 w-6" />,
    },
    {
      name: 'Projects',
      link: '#',
      icon: <Icon.Codesandbox className="h6 w-6" />,
    },
    {
      name: 'Contact',
      link: '#',
      icon: <Icon.Mail className="h6 w-6" />,
    },
  ];
  return (
    <ul className={className}>
      {menuItems.map((menuItem) => (
        <li key={menuItem.name}>
          <Link
            href={menuItem.link}
            className={cn(
              'flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700',
              activeMenuItem === menuItem.name &&
                'active bg-slate-100 dark:bg-slate-700',
            )}
            onClick={() => onClick(menuItem.name)}
          >
            {menuItem.icon}
            <span className="ml-3 flex-1 whitespace-nowrap">
              {menuItem.name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
