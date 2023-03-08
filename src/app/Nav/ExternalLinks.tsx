import * as Icon from 'react-feather';

type ExternalLinksProps = {
  className?: string;
  onExernalLinkClick: () => void;
};

export default function ExternalLinks({
  className,
  onExernalLinkClick,
}: ExternalLinksProps) {
  const externalLinks = [
    {
      name: 'GitHub',
      link: 'https://github.com/albinma/cv',
      icon: <Icon.GitHub className="h6 w-6" />,
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/albin-ma-9367a73a/',
      icon: <Icon.Linkedin className="h6 w-6" />,
    },
  ];

  return (
    <ul className={className}>
      {externalLinks.map((externalLink) => (
        <li key={externalLink.name}>
          <a
            href={externalLink.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
            onClick={onExernalLinkClick}
          >
            {externalLink.icon}
            <span className="ml-3 flex-1 whitespace-nowrap">
              {externalLink.name}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
