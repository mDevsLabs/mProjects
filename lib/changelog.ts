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
  mAIRaw?: string;
};

export function getChangelogs(): ChangelogsByProject {
  const mAIPath = path.join(process.cwd(), `docs/mai/changelog/CHANGELOG.md`);
  let mAIRaw = "";
  if (fs.existsSync(mAIPath)) {
    mAIRaw = fs.readFileSync(mAIPath, 'utf8');
  }

  const result: ChangelogsByProject = {
    mAI: parseChangelog('mai', 'mAI', 'text-purple-600', 'bg-purple-50'),
    mSearch: parseChangelog('msearch', 'mSearch', 'text-blue-600', 'bg-blue-50'),
    mAIRaw
  };
  return result;
}

function parseChangelog(folder: string, projectName: string, color: string, bgColor: string): ChangelogEntry[] {
  const filePath = path.join(process.cwd(), `docs/${folder}/changelog/CHANGELOG.md`);
  if (!fs.existsSync(filePath)) return [];

  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  // Split by ## or ### at the start of a line
  const sections = fileContents.split(/^##+\s+/m).filter(Boolean);
  const entries: ChangelogEntry[] = [];

  for (const section of sections) {
    const lines = section.trim().split('\n');
    const header = lines.shift() || '';
    
    // Test alternative format like: [Version 1.0.0](...) or Version 1.0.0
    const versionMatch = header.match(/Version\s+([^\s\]\)]+)/i) || header.match(/^([^\s-]+)/);
    if (!versionMatch) continue;

    const version = versionMatch[1];
    let date = 'Inconnu';
    let title = `Mise à jour ${version}`;
    let type = 'feature';
    let icon = 'Star';
    
    // Look for date in lines (e.g. Released on **2026-06-28**)
    const dateLineIndex = lines.findIndex(l => l.includes('Released on'));
    if (dateLineIndex !== -1) {
      const dateMatch = lines[dateLineIndex].match(/Released on \*\*([^*]+)\*\*/i);
      if (dateMatch) {
        date = dateMatch[1];
      }
    }

    const descriptionLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (i === dateLineIndex) continue; // Skip the released on line if found

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
