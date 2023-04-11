import About from '@/app/About/About';
import Contact from '@/app/Contact/Contact';
import Hero from '@/app/Hero/Hero';
import Projects from '@/app/Projects/Projects';
import Work from '@/app/Work/Work';

export default function Home(): JSX.Element {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />

      {/* @ts-expect-error Server Component */}
      <Work />
      <Projects />
      <Contact />
    </main>
  );
}
