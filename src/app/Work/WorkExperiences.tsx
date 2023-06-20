'use client';

import { WorkExperience } from '@/utils/api';
import { ClickAwayListener } from '@mui/base';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import { Element, scroller } from 'react-scroll';

type WorkExperiencesProps = {
  workExperiences: WorkExperience[];
};

export default function WorkExperiences({
  workExperiences,
}: WorkExperiencesProps): JSX.Element {
  const [selectedWorkExperience, setSelectedWorkExperience] = useState<
    WorkExperience | undefined
  >();

  const isExpanded = (workExperience: WorkExperience): boolean => {
    return selectedWorkExperience?.company === workExperience.company;
  };

  const openWorkExperience = (workExperience: WorkExperience): void => {
    setSelectedWorkExperience(workExperience);
  };

  useEffect(() => {
    if (selectedWorkExperience) {
      scroller.scrollTo(selectedWorkExperience.id, {
        duration: 300,
        offset: -80,
        smooth: true,
      });
    }
  }, [selectedWorkExperience]);

  return (
    <ClickAwayListener onClickAway={() => setSelectedWorkExperience(undefined)}>
      <div className="h-auto md:flex md:flex-row md:flex-wrap">
        {workExperiences.map((work) => (
          <Element
            id={work.id}
            name={work.id}
            key={work.id}
            onClick={() => !isExpanded(work) && openWorkExperience(work)}
            role="button"
            aria-expanded={isExpanded(work)}
            className={classNames(
              'mt-4 space-y-4 border-2 p-6',
              isExpanded(work)
                ? 'cursor-default border-pink-500 md:order-first md:p-8'
                : 'h-auto w-auto cursor-pointer border-slate-200 hover:border-pink-500 md:mr-4 md:w-72 md:p-4',
            )}
          >
            <div className="flex flex-row items-center">
              <h1
                className={classNames(
                  'flex-auto text-xl font-bold underline',
                  isExpanded(work) && ' md:text-4xl',
                )}
              >
                {work.company}
              </h1>
              <div
                className="mx-auto w-6 flex-none cursor-pointer items-end"
                aria-label={isExpanded(work) ? 'collapse' : 'expand'}
                role="button"
                onClick={() =>
                  isExpanded(work)
                    ? setSelectedWorkExperience(undefined)
                    : openWorkExperience(work)
                }
              >
                {isExpanded(work) ? (
                  <Icon.X className="h-6 w-6" />
                ) : (
                  <Icon.Plus className="h-6 w-6" />
                )}
              </div>
            </div>
            <p
              className={classNames('text-sm', isExpanded(work) && 'text-base')}
            >
              {work.description}
            </p>
            <div
              className={classNames(
                'flex flex-col text-sm',
                isExpanded(work) && 'mt-2 text-base md:mt-5 md:flex-row',
              )}
            >
              <div className="mr-4 mt-2 flex items-center md:mt-0">
                <Icon.Coffee
                  className={classNames(
                    isExpanded(work) ? 'mr-2 h-4 w-4' : 'mr-1 h-3 w-3',
                  )}
                />
                <h2>{work.title}</h2>
              </div>

              <div className="mr-6 mt-2 flex items-center md:mt-0">
                <Icon.Calendar
                  className={classNames(
                    isExpanded(work) ? 'mr-2 h-4 w-4' : 'mr-1 h-3 w-3',
                  )}
                />
                <h2>
                  {work.from} - {work.to}
                </h2>
              </div>
              {isExpanded(work) && (
                <>
                  <div className="mr-6 mt-2 flex items-center md:mt-0">
                    <Icon.Map
                      className={classNames(
                        isExpanded(work) ? 'mr-2 h-4 w-4' : 'mr-1 h-3 w-3',
                      )}
                    />
                    <h2>{work.location}</h2>
                  </div>

                  <div className="mr-6 mt-2 flex items-center md:mt-0">
                    <Icon.Globe
                      className={classNames(
                        isExpanded(work) ? 'mr-2 h-4 w-4' : 'mr-1 h-3 w-3',
                      )}
                    />
                    <a
                      className="underline hover:text-teal-500 md:no-underline"
                      href={work.url}
                      target="_blank"
                      referrerPolicy="no-referrer"
                    >
                      {work.url}
                    </a>
                  </div>
                </>
              )}
            </div>

            {isExpanded(work) && (
              <div className="mt-6 space-y-6">
                <div
                  className="space-y-8 border-t-2 border-dotted border-slate-500 pt-4"
                  dangerouslySetInnerHTML={{ __html: work.content }}
                />

                <div className="space-y-2 text-sm md:text-base">
                  <h3>Programming Languages</h3>
                  <ul className="flex list-inside list-disc flex-wrap">
                    {work.languages.map((lang) => (
                      <li key={lang} className="w-1/2 md:w-1/3 lg:w-1/4">
                        {lang}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 text-sm md:text-base">
                  <h3>Technologies and Frameworks</h3>
                  <ul className="flex list-inside list-disc flex-wrap">
                    {work.technologies.map((tech) => (
                      <li key={tech} className="w-1/2 md:w-1/3 lg:w-1/4">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 text-sm md:text-base">
                  <h3>Infrastructure</h3>
                  <ul className="flex list-inside list-disc flex-wrap">
                    {work.infrastructure.map((infra) => (
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
