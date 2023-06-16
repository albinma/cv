import Section from '@/components/Section/Section';
import Image from 'next/image';

export default function About(): JSX.Element {
  return (
    <Section id="about" className="bg-slate-100">
      <div className="flex flex-col justify-center py-8 md:h-screen">
        <h1 className="mb-8 text-4xl font-bold text-slate-900 md:mb-8 md:text-7xl">
          A little about me...
        </h1>
        <div className="mt-4 flex flex-wrap justify-center md:flex-nowrap">
          <div className="relative h-72 w-full border-2 border-pink-500 md:w-1/3">
            <Image
              src="/images/me.png"
              fill
              priority
              style={{ objectFit: 'cover' }}
              alt="Albin Ma"
              about="Picture of Albin Ma"
              className="p-2"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="mt-4 w-full md:ml-8 md:mt-0 md:w-2/3">
            <p>
              I&apos;m a seasoned full-stack software engineer with over a
              <span className="italic"> decade</span> of industry experience. I
              design, develop and maintain software systems from start-up
              products to global enterprise solutions. I&apos;m{' '}
              <span className="font-semibold">passionate</span> about building
              high-quality and scalable software.
            </p>
            <p className="mt-4">
              In my current role as a senior full-stack engineer at TouchBistro,
              I&apos;m leading the transformation of applications and systems
              powering TouchBistro reservations.
            </p>
            <p className="mt-4">Most recent stack:</p>
            <div className="mt-4">
              <ul className="flex list-inside list-disc flex-wrap">
                <li className="w-1/2 md:w-1/3">Javascript</li>
                <li className="w-1/2 md:w-1/3">React</li>
                <li className="w-1/2 md:w-1/3">NextJS</li>
                <li className="w-1/2 md:w-1/3">Node / Express</li>
                <li className="w-1/2 md:w-1/3">PostgreSQL</li>
                <li className="w-1/2 md:w-1/3">AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
