import About from '@/app/About/About';
import Contact from '@/app/Contact/Contact';
import Hero from '@/app/Hero/Hero';
import Projects from '@/app/Projects/Projects';
import Work from '@/app/Work/Work';

export default function Home() {
  return (
    <main className="container mx-auto flex max-w-4xl flex-col px-8">
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
    </main>
  );
}
