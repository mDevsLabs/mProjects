import fs from 'fs';
import path from 'path';

export type NewsArticle = {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  label?: string;
  content: string;
};

const newsDirectory = path.join(process.cwd(), 'docs/news');

export function getNewsArticles(): NewsArticle[] {
  if (!fs.existsSync(newsDirectory)) {
    return [];
  }

  const slugs = fs.readdirSync(newsDirectory);
  const articles: NewsArticle[] = [];

  for (const slug of slugs) {
    const articlePath = path.join(newsDirectory, slug);
    if (!fs.statSync(articlePath).isDirectory()) continue;

    const jsonPath = path.join(articlePath, 'index.json');
    const mdPath = path.join(articlePath, 'index.md');

    if (fs.existsSync(jsonPath) && fs.existsSync(mdPath)) {
      const jsonContent = fs.readFileSync(jsonPath, 'utf8');
      const mdContent = fs.readFileSync(mdPath, 'utf8');
      
      try {
        const metadata = JSON.parse(jsonContent);
        articles.push({
          slug,
          title: metadata.title || 'Sans titre',
          description: metadata.description || '',
          author: metadata.author || 'Inconnu',
          date: metadata.date || 'Date inconnue',
          label: metadata.label,
          content: mdContent
        });
      } catch (e) {
        console.error(`Failed to parse index.json for article ${slug}`, e);
      }
    }
  }

  // Sort by date (descending) assuming ISO format or simple string comparison
  return articles.sort((a, b) => b.date.localeCompare(a.date));
}

export function getNewsArticle(slug: string): NewsArticle | null {
  const articlePath = path.join(newsDirectory, slug);
  const jsonPath = path.join(articlePath, 'index.json');
  const mdPath = path.join(articlePath, 'index.md');

  if (fs.existsSync(jsonPath) && fs.existsSync(mdPath)) {
    const jsonContent = fs.readFileSync(jsonPath, 'utf8');
    const mdContent = fs.readFileSync(mdPath, 'utf8');
    
    try {
      const metadata = JSON.parse(jsonContent);
      return {
        slug,
        title: metadata.title || 'Sans titre',
        description: metadata.description || '',
        author: metadata.author || 'Inconnu',
        date: metadata.date || 'Date inconnue',
        label: metadata.label,
        content: mdContent
      };
    } catch (e) {
      console.error(`Failed to parse index.json for article ${slug}`, e);
      return null;
    }
  }

  return null;
}
