import Section from '@/components/Section/Section';
import { getWorkData } from '@/utils/api';

export default async function Work(): Promise<JSX.Element> {
  const workData = await getWorkData();
  return (
    <Section id="work">
      {workData.map((work) => (
        <div key={work.company}>
          <h1>{work.company}</h1>
          <p>{work.title}</p>
          <p>{work.from}</p>
          <p>{work.to}</p>
          <p>{work.description}</p>
          <ul>
            {work.languages.map((lang) => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>
          <ul>
            {work.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <ul>
            {work.infrastructure.map((infra) => (
              <li key={infra}>{infra}</li>
            ))}
          </ul>
          <div dangerouslySetInnerHTML={{ __html: work.content }} />
        </div>
      ))}
    </Section>
  );
}
