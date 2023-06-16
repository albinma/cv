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
        {workExperiences.map((work) =>
          isExpanded(work.company) ? (
            <div key={work.company} className="border-2 border-pink-500 p-8">
              <div className="flex flex-row items-center text-xl font-bold">
                <h1 className="flex-auto text-4xl">{work.company}</h1>
                <div
                  className="mx-auto w-6 flex-none cursor-pointer items-end"
                  onClick={() => setCurrentExpandedWorkExperience(undefined)}
                >
                  <Icon.X className="h-6 w-6" />{' '}
                </div>
              </div>
              <h2>{work.title}</h2>
              <h3>{work.location}</h3>
              <h3>
                {work.from} - {work.to}
              </h3>
              <p>{work.description}</p>
              <div
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: work.content }}
              />
              <h3 className="mt-4 text-lg">Programming Languages</h3>
              <ul className="flex list-inside list-disc flex-wrap">
                {work.languages.map((lang) => (
                  <li key={lang} className="w-1/2 md:w-1/3 lg:w-1/4">
                    {lang}
                  </li>
                ))}
              </ul>
              <h3 className="mt-4 text-lg">Technologies and Frameworks</h3>
              <ul className="flex list-inside list-disc flex-wrap">
                {work.technologies.map((tech) => (
                  <li key={tech} className="w-1/2 md:w-1/3 lg:w-1/4">
                    {tech}
                  </li>
                ))}
              </ul>
              <h3 className="mt-4 text-lg">Infrastructure</h3>
              <ul className="flex list-inside list-disc flex-wrap">
                {work.infrastructure.map((infra) => (
                  <li key={infra} className="w-1/2 md:w-1/3 lg:w-1/4">
                    {infra}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div
              key={work.company}
              onClick={() => setCurrentExpandedWorkExperience(work.company)}
              role="button"
              aria-expanded={isExpanded(work.company)}
              className={classNames(
                currentExpandedWorkExperience === undefined
                  ? 'm-4 h-48 w-72 cursor-pointer border-2 border-slate-200 hover:border-pink-500'
                  : 'hidden',
              )}
            >
              <div className="p-4">
                <h1 className="flex items-center text-xl font-bold">
                  {work.company}
                </h1>
                <h2>{work.title}</h2>
                <h3>{work.location}</h3>
                <h3>
                  {work.from} - {work.to}
                </h3>
                <p>{work.description}</p>
              </div>
            </div>
          ),
        )}
      </div>
    </ClickAwayListener>
  );
}
