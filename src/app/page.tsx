import About from '@/app/About/About';
import Contact from '@/app/Contact/Contact';
import Hero from '@/app/Hero/Hero';
import Nav from '@/app/Nav/Nav';
import Projects from '@/app/Projects/Projects';
import Work from '@/app/Work/Work';

export default function Home(): JSX.Element {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Work />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
