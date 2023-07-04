import Experiences from '@/components/Experiences/Experiences';
import Section from '@/components/Section/Section';
import { getWorkExperiences } from '@/utils/api';

export default async function Work(): Promise<JSX.Element> {
  const workExperiences = await getWorkExperiences();

  return (
    <Section id="work" childrenClassName="max-w-6xl">
      <div className="flex flex-col items-center justify-center py-8 md:h-auto md:min-h-screen">
        <h1 className="mb-4 text-3xl font-bold text-slate-900 md:mb-8 md:px-8 md:text-7xl">
          Where I&apos;ve worked...
        </h1>
        <Experiences
          experiences={workExperiences}
          borderColor="border-pink-500"
        />
      </div>
    </Section>
  );
}
