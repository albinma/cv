'use client';

import { WorkExperience } from '@/utils/api';
import { ClickAwayListener } from '@mui/base';
import classNames from 'classnames';
import { useState } from 'react';
import * as Icon from 'react-feather';

type WorkExperiencesProps = {
  workExperiences: WorkExperience[];
};

export default function WorkExperiences({
  workExperiences,
}: WorkExperiencesProps): JSX.Element {
  const [currentExpandedWorkExperience, setCurrentExpandedWorkExperience] =
    useState<string | undefined>();

  const isExpanded = (name: string): boolean => {
    return currentExpandedWorkExperience === name;
  };

  return (
    <ClickAwayListener
      onClickAway={() => setCurrentExpandedWorkExperience(undefined)}
    >
      <div className="flex items-center">
        {workExperiences.map((work) => (
          <div
            key={work.company}
            onClick={() => setCurrentExpandedWorkExperience(work.company)}
            role="button"
            aria-expanded={isExpanded(work.company)}
            className={classNames(
              currentExpandedWorkExperience === undefined &&
                'm-4 h-48 w-72 cursor-pointer border-2 border-slate-200 hover:border-pink-500',
              currentExpandedWorkExperience !== undefined &&
                currentExpandedWorkExperience !== work.company
                ? 'hidden'
                : 'h-24 w-full border-2 border-pink-500',
            )}
          >
            <div className="p-2">
              <h1 className="flex items-center text-xl font-bold">
                {work.company}
                {isExpanded(work.company) && (
                  <span
                    className="flex-auto cursor-pointer"
                    onClick={() => setCurrentExpandedWorkExperience(undefined)}
                  >
                    <Icon.X className="h-6 w-6" />{' '}
                  </span>
                )}
              </h1>
              <h2>{work.title}</h2>
              <h3>{work.location}</h3>
              <h3>
                {work.from} - {work.to ?? 'present'}
              </h3>
              <p>{work.description}</p>

              {isExpanded(work.company) && (
                <div>
                  <ul>
                    {work.languages.map((lang) => (
                      <li key={lang}>{lang}</li>
                    ))}
                  </ul>
                  <ul>
                    {work.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <ul>
                    {work.infrastructure.map((infra) => (
                      <li key={infra}>{infra}</li>
                    ))}
                  </ul>
                  <div dangerouslySetInnerHTML={{ __html: work.content }} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </ClickAwayListener>
  );
}
