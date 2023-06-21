import { promises as fs } from 'fs';
import gm from 'gray-matter';
import { DateTime } from 'luxon';
import { join } from 'path';

const dir = join(process.cwd(), 'data');

export type WorkExperience = {
  id: string;
  company: string;
  location: string;
  title: string;
  from: string;
  to: string;
  url: string;
  description: string;
  languages: string[];
  technologies: string[];
  infrastructure: string[];
  content: string;
};

export async function getWorkExperiences(): Promise<WorkExperience[]> {
  const workDir = join(dir, 'work');
  const allFiles = await fs.readdir(workDir);
  const results: { from: DateTime; workExperience: WorkExperience }[] = [];

  for (const file of allFiles) {
    const fullPath = join(workDir, file);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = gm(fileContents);
    const from = DateTime.fromJSDate(data.from);
    const to = data.to ? DateTime.fromJSDate(data.to) : undefined;

    if (!data.visible) {
      continue;
    }

    results.push({
      from,
      workExperience: {
        id: data.id,
        company: data.company,
        location: data.location,
        title: data.title,
        from: from.toFormat('LLL yyyy'),
        to: to?.toFormat('LLL yyyy') ?? 'Present',
        url: data.url,
        description: data.description,
        languages: data.languages.split(','),
        technologies: data.technologies.split(','),
        infrastructure: data.infrastructure.split(','),
        content,
      },
    });
  }

  results.sort((a, b) => b.from.toMillis() - a.from.toMillis());

  return results.map((x) => x.workExperience);
}
