'use client';

import Section from '@/components/Section/Section';

export default function Hero(): JSX.Element {
  return (
    <Section id="hero">
      <div className="flex h-screen flex-col justify-center">
        <h2 className="cursor-pointer text-xl font-bold text-slate-500 md:text-4xl">
          Hey, I&apos;m <span className="text-pink-500">Albin Ma</span> and...
        </h2>
        <h1 className="mt-8 text-5xl font-bold text-slate-900 md:text-8xl">
          I&apos;m a Software Engineer
        </h1>
        <p className="text-md mt-24 text-slate-500 md:text-2xl">
          I&apos;m currently working hard{' '}
          <a
            href="https://www.touchbistro.com/"
            className="font-semibold"
            target="_blank"
          >
            @{''}
            <span className="text-tb-primary">Touch</span>
            <span className="text-tb-secondary">Bistro</span>
          </a>{' '}
          building features that empower restaurants.
        </p>
      </div>
    </Section>
  );
}
