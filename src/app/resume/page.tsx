type Experience = {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  points: string[];
};

export default function Resume(): JSX.Element {
  const experiences: Experience[] = [
    {
      company: 'TouchBistro',
      title: 'Sr. Full Stack Software Engineer',
      startDate: 'Oct 2021',
      endDate: 'Present',
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'PostgreSQL',
        'AWS',
        'Docker',
        'SQL Server',
        'C#',
        'ASP.NET Core',
        '.NET Framework 4.5',
        'Redis',
      ],
      points: [
        'Leading the modernization of core systems, transitioning from .NET framework to .NET Core, NodeJS, React, and other contemporary technologies.',
        'Collaborate closely with product leaders and designers to shape and prioritize the product roadmap, ultimately formuated a feasible strategy to guide products to beta testing and successful market launch.',
        'Initiate and lead cross-team efforts, actively cultivating a collaborative environment with various departments.',
        'Mentor and guide intermediate engineers, some of whom earned promotions within just 6 months.',
        'Evaluate potential hires for technical expertise and cultural compatibility.',
        'Orchestrated the development of vital CI/CD infrastructure, resulting in a remarkable 200% increase in team velocity.',
        'Successfully addressed long-standing performance bottlenecks in SQL Server, achieving a cost reduction of over 50%, totaling more than $100,000 in savings.',
      ],
    },
  ];
  return (
    <main className="flex flex-col">
      <div className="w-[670px] h-[900px] mx-auto">
        <h1 className="text-xl">Albin Ma</h1>
        <p>
          Full stack software engineer with over a decade of experience building
          high quality and scalable software systems. Proven ability to lead and
          mentor teams, tackle complex challenges, and adapt to evolving project
          requirements.
        </p>
        <h1 className="text-xl">Experience</h1>
        {experiences.map((experience) => (
          <div key={experience.company}>
            <div className="flex justify-between">
              <div className="flex">
                <h2>{experience.title}</h2>
                <p className="ml-4">@ {experience.company}</p>
              </div>
              <p>
                {experience.startDate} - {experience.endDate}
              </p>
            </div>
            <ul className="list-disc list-outside text-sm ml-4">
              {experience.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <ul className="list-disc list-inside">
              {experience.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
