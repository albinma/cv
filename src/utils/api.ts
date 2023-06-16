import { promises as fs } from 'fs';
import gm from 'gray-matter';
import { join } from 'path';

const dir = join(process.cwd(), 'data');

export type WorkExperience = {
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
  const workExperiences: WorkExperience[] = [];

  for (const file of allFiles) {
    const fullPath = join(workDir, file);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = gm(fileContents);

    workExperiences.push({
      company: data.company,
      location: data.location,
      title: data.title,
      from: data.from,
      to: data.to,
      url: data.url,
      description: data.description,
      languages: data.languages.split(','),
      technologies: data.technologies.split(','),
      infrastructure: data.infrastructure.split(','),
      content,
    });
  }

  workExperiences.sort((a, b) => Date.parse(b.from) - Date.parse(a.from));

  return workExperiences;
}