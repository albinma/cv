import Section from '@/components/Section/Section';
import * as Icon from 'react-feather';

export default function Contact(): JSX.Element {
  return (
    <Section id="contact" className="hidden md:block">
      <div className="flex flex-col items-center justify-center py-8 md:h-auto md:min-h-screen">
        <h1 className="mb-8 text-4xl font-bold text-slate-900 md:mb-16 md:px-8 md:text-7xl">
          Let&apos;s connect!
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between space-x-24">
          <a
            href="https://github.com/albinma/cv"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <Icon.GitHub className="h-16 w-16" />
          </a>
          <a
            href="https://www.linkedin.com/in/albinma"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <Icon.Linkedin className="h-16 w-16" />
          </a>
          <a href="mailto:albinma@gmail.com">
            <Icon.Mail className="h-16 w-16" />
          </a>
        </div>
      </div>
    </Section>
  );
}
