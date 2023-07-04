'use client';

import { Experience } from '@/utils/api';
import { ClickAwayListener } from '@mui/base';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import { Element, scroller } from 'react-scroll';

type ExperiencesProps = {
  experiences: Experience[];
  borderColor: string;
};

export default function Experiences({
  experiences,
  borderColor,
}: ExperiencesProps): JSX.Element {
  const [selectedExperience, setSelectedExperience] = useState<
    Experience | undefined
  >();

  const isExpanded = (experience: Experience): boolean => {
    return selectedExperience?.company === experience.company;
  };

  const openWorkExperience = (experience: Experience): void => {
    setSelectedExperience(experience);
  };

  useEffect(() => {
    if (selectedExperience) {
      scroller.scrollTo(selectedExperience.id, {
        duration: 300,
        offset: -80,
        smooth: true,
      });
    }
  }, [selectedExperience]);

  return (
    <ClickAwayListener onClickAway={() => setSelectedExperience(undefined)}>
      <div className="h-auto items-center justify-center md:flex md:flex-row md:flex-wrap">
        {experiences.map((xp) => (
          <Element
            id={xp.id}
            name={xp.id}
            key={xp.id}
            onClick={() => !isExpanded(xp) && openWorkExperience(xp)}
            role="button"
            aria-expanded={isExpanded(xp)}
            className={classNames(
              'mt-4 space-y-4 border-2 p-6',
              isExpanded(xp)
                ? `cursor-default ${borderColor} md:order-first md:p-8`
                : `h-auto w-auto cursor-pointer border-slate-200 hover:${borderColor} md:mr-4 md:w-72 md:p-4`,
            )}
          >
            <div className="flex flex-row items-center">
              <h1
                className={classNames(
                  'flex-auto text-xl font-bold underline',
                  isExpanded(xp) && ' md:text-4xl',
                )}
              >
                {xp.company}
              </h1>
              <div
                className="mx-auto w-6 flex-none cursor-pointer items-end"
                aria-label={isExpanded(xp) ? 'collapse' : 'expand'}
                role="button"
                onClick={() =>
                  isExpanded(xp)
                    ? setSelectedExperience(undefined)
                    : openWorkExperience(xp)
                }
              >
                {isExpanded(xp) ? (
                  <Icon.X className="h-6 w-6" />
                ) : (
                  <Icon.Plus className="h-6 w-6" />
                )}
              </div>
            </div>
            <p className={classNames('text-sm', isExpanded(xp) && 'text-base')}>
              {xp.description}
            </p>
            <div
              className={classNames(
                'flex flex-col text-sm',
                isExpanded(xp) && 'mb-4 mt-2 text-base md:mt-5 md:flex-row',
              )}
            >
              <div className="mr-4 mt-2 flex items-center md:mt-0">
                <Icon.Coffee
                  className={classNames(
                    isExpanded(xp) ? 'mr-2 h-4 w-4' : 'mr-1 h-3 w-3',
                  )}
                />
                <h2>{xp.title}</h2>
              </div>

              <div className="mr-6 mt-2 flex items-center md:mt-0">
                <Icon.Calendar
                  className={classNames(
                    isExpanded(xp) ? 'mr-2 h-4 w-4' : 'mr-1 h-3 w-3',
                  )}
                />
                <h2>
                  {xp.from} - {xp.to}
                </h2>
              </div>
              {isExpanded(xp) && (
                <>
                  <div className="mr-6 mt-2 flex items-center md:mt-0">
                    <Icon.Map
                      className={classNames(
                        isExpanded(xp) ? 'mr-2 h-4 w-4' : 'mr-1 h-3 w-3',
                      )}
                    />
                    <h2>{xp.location}</h2>
                  </div>

                  <div className="mr-6 mt-2 flex items-center md:mt-0">
                    <Icon.Globe
                      className={classNames(
                        isExpanded(xp) ? 'mr-2 h-4 w-4' : 'mr-1 h-3 w-3',
                      )}
                    />
                    <a
                      className="underline hover:text-teal-500 md:no-underline"
                      href={xp.url}
                      target="_blank"
                      referrerPolicy="no-referrer"
                    >
                      {xp.url}
                    </a>
                  </div>
                </>
              )}
            </div>

            {isExpanded(xp) && (
              <div className="space-y-6">
                <div
                  className="mt-8 space-y-4 border-t-2 border-dotted border-slate-500 pt-4 text-sm md:space-y-6 md:text-base"
                  dangerouslySetInnerHTML={{ __html: xp.content }}
                />

                <div className="space-y-2 text-sm md:text-base">
                  <h3>Programming Languages</h3>
                  <ul className="flex list-inside list-disc flex-wrap">
                    {xp.languages.map((lang) => (
                      <li key={lang} className="w-1/2 md:w-1/3 lg:w-1/4">
                        {lang}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 text-sm md:text-base">
                  <h3>Technologies and Frameworks</h3>
                  <ul className="flex list-inside list-disc flex-wrap">
                    {xp.technologies.map((tech) => (
                      <li key={tech} className="w-1/2 md:w-1/3 lg:w-1/4">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 text-sm md:text-base">
                  <h3>Infrastructure</h3>
                  <ul className="flex list-inside list-disc flex-wrap">
                    {xp.infrastructure.map((infra) => (
                      <li key={infra} className="w-1/2 md:w-1/3 lg:w-1/4">
                        {infra}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </Element>
        ))}
      </div>
    </ClickAwayListener>
  );
}
