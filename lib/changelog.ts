import fs from 'fs';
import path from 'path';

export type ChangelogEntry = {
  version: string;
  date: string;
  title: string;
  type: string;
  icon: string;
  color: string;
  bgColor: string;
  project: string;
  description: string;
};

export type ChangelogsByProject = {
  mAI: ChangelogEntry[];
  mSearch: ChangelogEntry[];
};

export function getChangelogs(): ChangelogsByProject {
  const result: ChangelogsByProject = {
    mAI: parseChangelog('mai', 'mAI', 'text-purple-600', 'bg-purple-50'),
    mSearch: parseChangelog('msearch', 'mSearch', 'text-blue-600', 'bg-blue-50')
  };
  return result;
}

function parseChangelog(folder: string, projectName: string, color: string, bgColor: string): ChangelogEntry[] {
  const filePath = path.join(process.cwd(), `docs/${folder}/changelog/CHANGELOG.md`);
  if (!fs.existsSync(filePath)) return [];

  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  const sections = fileContents.split(/^##\s+/m).filter(Boolean);
  const entries: ChangelogEntry[] = [];

  for (const section of sections) {
    const lines = section.trim().split('\n');
    const header = lines.shift() || '';
    
    const headerMatch = header.match(/^([^\s-]+)(?:\s+-\s+(.+))?/);
    if (!headerMatch) continue; 

    const version = headerMatch[1];
    const date = headerMatch[2] || 'Inconnu';
    
    let title = `Mise à jour ${version}`;
    let type = 'feature';
    let icon = 'Star';
    
    const descriptionLines = [];
    
    for (const line of lines) {
      if (line.startsWith('**Title:**')) {
        title = line.replace('**Title:**', '').trim();
      } else if (line.startsWith('**Type:**')) {
        type = line.replace('**Type:**', '').trim();
      } else if (line.startsWith('**Icon:**')) {
        icon = line.replace('**Icon:**', '').trim();
      } else {
        descriptionLines.push(line);
      }
    }

    entries.push({
      version,
      date,
      title,
      type,
      icon,
      color,
      bgColor,
      project: projectName,
      description: descriptionLines.join('\n').trim()
    });
  }

  return entries;
}
