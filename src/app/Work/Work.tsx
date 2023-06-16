import WorkExperiences from '@/app/Work/WorkExperiences';
import Section from '@/components/Section/Section';
import { getWorkExperiences } from '@/utils/api';

export default async function Work(): Promise<JSX.Element> {
  const workExperiences = await getWorkExperiences();

  return (
    <Section id="work">
      <div className="flex flex-col items-center justify-center py-8 md:h-screen">
        <WorkExperiences workExperiences={workExperiences} />
      </div>
    </Section>
  );
}
