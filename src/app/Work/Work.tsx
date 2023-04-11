import WorkExperiences from '@/app/Work/WorkExperiences';
import Section from '@/components/Section/Section';
import { getWorkExperiences } from '@/utils/api';

export default async function Work(): Promise<JSX.Element> {
  const workExperiences = await getWorkExperiences();

  return (
    <Section id="work">
      <WorkExperiences workExperiences={workExperiences} />
    </Section>
  );
}
