const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const projectRoot = path.resolve(__dirname, '../../');
const docsDirectory = path.join(projectRoot, 'docs/documentation');

console.log('=== TEST HARNESS: mProjects Empirical Challenge ===');
console.log('Project root:', projectRoot);
console.log('Docs directory:', docsDirectory);

// -------------------------------------------------------------
// TASK 1: Inspect & Count Files in docs/documentation/
// -------------------------------------------------------------
console.log('\n--- TASK 1: File Inspection & Counting ---');
if (!fs.existsSync(docsDirectory)) {
  console.error('ERROR: docs/documentation directory does not exist!');
  process.exit(1);
}

const fileNames = fs.readdirSync(docsDirectory);
const mdFiles = fileNames.filter(f => f.endsWith('.md'));

console.log(`Total files found in docs/documentation/: ${mdFiles.length}`);
console.log(`Requirement (>= 30): ${mdFiles.length >= 30 ? 'PASS ✅' : 'FAIL ❌'}`);

const docInspectionResults = [];
let missingTitleCount = 0;
let missingDescCount = 0;
let missingCatCount = 0;
let missingOrderCount = 0;

for (const file of mdFiles) {
  const fullPath = path.join(docsDirectory, file);
  const content = fs.readFileSync(fullPath, 'utf8');
  const parsed = matter(content);
  
  const hasTitle = !!parsed.data.title;
  const hasDesc = !!parsed.data.description;
  const hasCat = !!parsed.data.category;
  const hasOrder = typeof parsed.data.order === 'number';

  if (!hasTitle) missingTitleCount++;
  if (!hasDesc) missingDescCount++;
  if (!hasCat) missingCatCount++;
  if (!hasOrder) missingOrderCount++;

  docInspectionResults.push({
    file,
    slug: file.replace(/\.md$/, ''),
    size: content.length,
    title: parsed.data.title,
    category: parsed.data.category,
    order: parsed.data.order,
    hasTitle,
    hasDesc,
    hasCat,
    hasOrder,
  });
}

console.log(`Frontmatter analysis across ${mdFiles.length} files:`);
console.log(`- Missing title: ${missingTitleCount}`);
console.log(`- Missing description: ${missingDescCount}`);
console.log(`- Missing category: ${missingCatCount}`);
console.log(`- Missing order: ${missingOrderCount}`);

// Check categories distribution
const categories = {};
docInspectionResults.forEach(d => {
  const cat = d.category || 'Uncategorized';
  categories[cat] = (categories[cat] || 0) + 1;
});
console.log('Categories distribution:', categories);

// -------------------------------------------------------------
// TASK 2: Test `searchDocs` and `getAllDocs`
// -------------------------------------------------------------
console.log('\n--- TASK 2: Testing searchDocs in lib/docs.ts ---');

// Load searchDocs logic directly or replicate lib/docs.ts implementation to test
function getAllDocs() {
  if (!fs.existsSync(docsDirectory)) return [];
  const files = fs.readdirSync(docsDirectory);
  const docs = [];
  for (const fileName of files) {
    if (!fileName.endsWith('.md')) continue;
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(docsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    docs.push({
      slug,
      title: data.title || slug,
      description: data.description || '',
      category: data.category || 'Général',
      order: typeof data.order === 'number' ? data.order : 999,
      content,
    });
  }
  const categoryOrderMap = {
    'Applications': 1,
    "Modèles d'IA": 2,
    'Guides': 3,
    'Architecture': 4,
    'API': 5,
  };
  return docs.sort((a, b) => {
    const catOrderA = categoryOrderMap[a.category] ?? 99;
    const catOrderB = categoryOrderMap[b.category] ?? 99;
    if (catOrderA !== catOrderB) return catOrderA - catOrderB;
    if (a.order !== b.order) return a.order - b.order;
    return a.title.localeCompare(b.title, 'fr');
  });
}

function getDocBySlug(slug) {
  const fullPath = path.join(docsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    slug,
    title: data.title || slug,
    description: data.description || '',
    category: data.category || 'Général',
    order: typeof data.order === 'number' ? data.order : 999,
    content,
  };
}

function searchDocs(query) {
  const docs = getAllDocs();
  if (!query || !query.trim()) {
    return docs;
  }
  const q = query.toLowerCase().trim();
  return docs.filter((doc) => {
    return (
      doc.title.toLowerCase().includes(q) ||
      doc.description.toLowerCase().includes(q) ||
      doc.category.toLowerCase().includes(q) ||
      doc.content.toLowerCase().includes(q)
    );
  });
}

// Test Suite for searchDocs
const testCases = [
  { name: 'Empty string query', query: '', expectedCount: 30 },
  { name: 'Whitespace query', query: '   ', expectedCount: 30 },
  { name: 'Exact title match ("mProjects")', query: 'mProjects' },
  { name: 'Lowercase title match ("mprojects")', query: 'mprojects' },
  { name: 'UPPERCASE query ("OLLAMA")', query: 'OLLAMA' },
  { name: 'Category search ("Applications")', query: 'Applications', expectedCount: 6 },
  { name: 'Category search ("API")', query: 'API' },
  { name: 'Category search ("Guides")', query: 'Guides' },
  { name: 'Category search ("Architecture")', query: 'Architecture' },
  { name: 'Category search ("Modèles d\'IA")', query: 'Modèles d\'IA' },
  { name: 'Keyword search ("docker")', query: 'docker' },
  { name: 'Keyword search ("rag")', query: 'rag' },
  { name: 'Keyword search ("vector")', query: 'vector' },
  { name: 'Keyword search ("python")', query: 'python' },
  { name: 'Keyword search ("security")', query: 'security' },
  { name: 'Accented search ("modèle")', query: 'modèle' },
  { name: 'Unaccented query for accented text ("modele")', query: 'modele' },
  { name: 'Special characters ("Next.js")', query: 'Next.js' },
  { name: 'Punctuation query ("?")', query: '?' },
  { name: 'Non-existent term ("xyz_nonexistent_12345")', query: 'xyz_nonexistent_12345', expectedCount: 0 },
  { name: 'Multi-word phrase matching exact substring ("hub de projets")', query: 'hub de projets' },
  { name: 'Multi-word non-adjacent words ("Docker Ollama")', query: 'Docker Ollama' },
  { name: 'Path traversal slug in getDocBySlug ("../package.json")', testSlug: '../package.json' },
];

console.log('\nRunning searchDocs test scenarios:');
const testResults = [];

for (const tc of testCases) {
  if (tc.testSlug !== undefined) {
    const doc = getDocBySlug(tc.testSlug);
    console.log(`[TEST] ${tc.name} -> ${doc === null ? 'PASS (Returned null) ✅' : 'FAIL (Security issue: returned doc) ❌'}`);
    testResults.push({ name: tc.name, pass: doc === null, count: doc ? 1 : 0 });
    continue;
  }

  const results = searchDocs(tc.query);
  let pass = true;
  let detail = `${results.length} matches`;

  if (tc.expectedCount !== undefined) {
    pass = results.length === tc.expectedCount;
    detail = `${results.length} matches (expected ${tc.expectedCount})`;
  } else {
    pass = results.length > 0;
  }

  console.log(`[TEST] ${tc.name} ("${tc.query}") -> ${pass ? 'PASS ✅' : 'WARN/FAIL ⚠️'} [${detail}]`);
  if (results.length > 0) {
    console.log(`       Top match: "${results[0].title}" (${results[0].slug})`);
  }
  testResults.push({ name: tc.name, query: tc.query, count: results.length, pass });
}

// Performance benchmark
console.log('\n--- Benchmark searchDocs (1000 queries) ---');
const startTime = Date.now();
for (let i = 0; i < 1000; i++) {
  searchDocs('docker architecture model security');
}
const elapsed = Date.now() - startTime;
console.log(`1000 searches completed in ${elapsed} ms (${(elapsed / 1000).toFixed(3)} ms per search)`);

console.log('\n=== EMPIRICAL TEST HARNESS COMPLETED ===');
