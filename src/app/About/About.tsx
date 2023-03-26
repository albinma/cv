'use client';

import Section from '@/components/Section/Section';
import Image from 'next/image';

export default function About(): JSX.Element {
  return (
    <Section id="about">
      <div className="flex flex-col items-center justify-center">
        <div className="my-auto flex flex-col">
          <div className="relative mb-4 h-72 w-full border-2 border-pink-500 md:w-1/3">
            <Image
              src="/images/me.png"
              fill
              priority
              style={{ objectFit: 'cover' }}
              alt="Albin Ma"
              about="Picture of Albin Ma"
              className="p-2"
            />
          </div>
          <div className=" w-full text-justify md:ml-4 md:w-2/3">
            <p>
              I am a seasoned full-stack software engineer with over 10 years of
              industry experience. My expertise ranges from designing,
              developing and maintaining software systems for start-up products
              to global enterprise solutions hosted both in the cloud and
              on-premises. I am an excellent communicator, have strong
              leadership skills, and an easy-going attitude that allows me to
              work extremely well under pressure.
            </p>
            <p>
              In my current role as a Senior Full Stack Software Engineer at
              TouchBistro, I am leading the transformation of legacy enterprise
              applications into NodeJS and React applications, fully integrating
              them with pre-existing company technology stack. I introduced
              CI/CD infrastructure and guided team workflow improvements around
              it. I have also mentored intermediate and junior members of the
              team and interviewed potential senior candidates for cultural fit
              and technical competency.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
