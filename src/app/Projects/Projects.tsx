import { getProjectExperiences } from '@/utils/api';

import Experiences from '@/components/Experiences/Experiences';
import Section from '@/components/Section/Section';

export default async function Projects(): Promise<JSX.Element> {
  const projectExperiences = await getProjectExperiences();

  return (
    <Section id="projects" childrenClassName="max-w-6xl">
      <div className="flex flex-col items-center justify-center py-8 md:h-auto md:min-h-screen">
        <h1 className="mb-4 text-3xl font-bold text-slate-900 md:mb-8 md:px-8 md:text-7xl">
          Cool projects I&apos;ve done ...
        </h1>
        <Experiences
          experiences={projectExperiences}
          borderColor="border-teal-400"
        />
      </div>
    </Section>
  );
}
