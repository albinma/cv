import { promises as fs } from 'fs';
import gm from 'gray-matter';
import { DateTime } from 'luxon';
import { join } from 'path';

const dir = join(process.cwd(), 'data');

export type Experience = {
  id: string;
  company: string;
  location: string;
  title: string;
  from: string;
  to: string;
  status: string;
  url: string;
  description: string;
  languages: string[];
  technologies: string[];
  infrastructure: string[];
  content: string;
  visible: boolean;
};

export type ExperienceData = {
  id: string;
  company: string;
  location: string;
  title: string;
  from: DateTime;
  to?: DateTime;
  url: string;
  description: string;
  languages: string[];
  technologies: string[];
  infrastructure: string[];
  content: string;
  visible: boolean;
};

async function getExperiencesData(dataDir: string): Promise<ExperienceData[]> {
  const fileDir = join(dir, dataDir);
  const allFiles = await fs.readdir(fileDir);

  return await Promise.all(
    allFiles.map(async (file) => {
      const fullPath = join(fileDir, file);
      const fileContents = await fs.readFile(fullPath, 'utf8');
      const { data, content } = gm(fileContents);
      const from = DateTime.fromJSDate(data.from);
      const to = data.to ? DateTime.fromJSDate(data.to) : undefined;

      return {
        id: data.id,
        company: data.company,
        location: data.location,
        title: data.title,
        from,
        to,
        url: data.url,
        description: data.description,
        languages: data.languages.split(','),
        technologies: data.technologies.split(','),
        infrastructure: data.infrastructure.split(','),
        content,
        visible: data.visible,
      };
    }),
  );
}

function toExperience(data: ExperienceData): Experience {
  return {
    ...data,
    from: data.from.toFormat('LLL yyyy'),
    to: data.to?.toFormat('LLL yyyy') ?? 'Present',
    status: data.to ? 'Completed' : 'On going',
  };
}

export async function getWorkExperiences(): Promise<Experience[]> {
  const data = await getExperiencesData('work');

  const results = data
    .filter((x) => x.visible)
    .sort((a, b) => b.from.toMillis() - a.from.toMillis())
    .map((x) => toExperience(x));

  return results;
}

export async function getProjectExperiences(): Promise<Experience[]> {
  const data = await getExperiencesData('projects');

  const results = data
    .filter((x) => x.visible)
    .sort((a, b) => {
      if (a.to && !b.to) {
        return 1;
      } else if (!a.to && b.to) {
        return -1;
      }

      return b.from.toMillis() > a.from.toMillis() ? 1 : -1;
    })
    .map((x) => toExperience(x));

  return results;
}
