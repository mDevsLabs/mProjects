import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { type DocMetadata } from '@/lib/text-utils';

let cachedMaiDocs: DocMetadata[] | null = null;

export function clearMaiDocsCache(): void {
  cachedMaiDocs = null;
}

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

export function getAllMaiDocs(): DocMetadata[] {
  if (cachedMaiDocs) {
    return cachedMaiDocs;
  }

  const docsDirectory = path.join(process.cwd(), 'docs/documentation/mai');

  if (!fs.existsSync(docsDirectory)) {
    return [];
  }

  const filePaths = getAllFiles(docsDirectory);
  const docs: DocMetadata[] = [];

  for (const fullPath of filePaths) {
    if (!fullPath.endsWith('.md') && !fullPath.endsWith('.mdx')) continue;

    const relativePath = path.relative(docsDirectory, fullPath);
    const slug = relativePath.replace(/\\/g, '/').replace(/\.mdx?$/, '');
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    try {
      const { data, content } = matter(fileContents);
      
      let title = data.title;
      let category = data.category;
      
      if (!title) {
        // Fallback title from slug or first h1
        const match = content.match(/^#\s+(.*)/m);
        title = match ? match[1] : slug.split('/').pop() || slug;
      }
      
      if (!category) {
        // Use top level directory as category
        const parts = slug.split('/');
        category = parts.length > 1 ? parts[0].charAt(0).toUpperCase() + parts[0].slice(1) : 'Général';
      }

      docs.push({
        slug,
        title,
        description: data.description || '',
        category: category,
        order: typeof data.order === 'number' ? data.order : 999,
        content,
      });
    } catch (e) {
      console.error(`Error parsing ${fullPath}`, e);
    }
  }

  docs.sort((a, b) => {
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category, 'fr');
    }
    if (a.order !== b.order) {
      return a.order - b.order;
    }
    return a.title.localeCompare(b.title, 'fr');
  });

  cachedMaiDocs = docs;
  return cachedMaiDocs;
}
