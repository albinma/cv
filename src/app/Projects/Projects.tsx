import { getProjectExperiences } from '@/utils/api';

import Section from '@/components/Section/Section';

export default async function Projects(): Promise<JSX.Element> {
  const projectExperiences = await getProjectExperiences();

  return (
    <Section id="projects" className="bg-slate-100">
      <ul>
        {projectExperiences.map((project) => (
          <li key={project.id}>{project.company}</li>
        ))}
      </ul>
    </Section>
  );
}
