import fs from 'fs';
import path from 'path';
import readline from 'readline';

// Configuration de la recherche et du remplacement
const REPLACEMENTS = [
    { search: 'LobeHub', replace: 'mAI', regex: /LobeHub/g },
    { search: 'LobeAI', replace: 'May', regex: /LobeAI/g }
];

const TARGET_DIR_PATH = 'C:\\Users\\maria\\Desktop\\MATHIAS\\Dossiers Mathias\\mCompany\\mProjects\\docs\\documentation\\mai';
const SESSIONS_DIR = path.join(import.meta.dirname, '.remplace_sessions_docs');

// Création de l'interface pour poser des questions dans le terminal (y/n)
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Promisify la fonction question
const askQuestion = (query) => {
    return new Promise((resolve) => rl.question(query, resolve));
};

function ensureSessionsDir() {
    if (!fs.existsSync(SESSIONS_DIR)) {
        fs.mkdirSync(SESSIONS_DIR, { recursive: true });
    }
}

function saveSession(session) {
    ensureSessionsDir();
    session.updatedAt = new Date().toISOString();
    const safeName = session.name.replace(/[^a-zA-Z0-9_-]/g, '_');
    const filePath = path.join(SESSIONS_DIR, `${safeName}.json`);
    fs.writeFileSync(filePath, JSON.stringify(session, null, 2), 'utf8');
}

function getSessions() {
    ensureSessionsDir();
    return fs.readdirSync(SESSIONS_DIR)
        .filter(file => file.endsWith('.json'))
        .map(file => {
            const filePath = path.join(SESSIONS_DIR, file);
            try {
                const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                return {
                    filename: file,
                    path: filePath,
                    name: data.name || file.replace('.json', ''),
                    createdAt: data.createdAt,
                    updatedAt: data.updatedAt,
                    ignoredCount: data.ignoredOccurrences ? data.ignoredOccurrences.length : 0,
                    modifiedCount: data.stats && data.stats.modified ? data.stats.modified : 0,
                    data
                };
            } catch {
                return null;
            }
        })
        .filter(Boolean)
        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
}

async function getAllMarkdownFiles(dir) {
    let results = [];
    const list = await fs.promises.readdir(dir);
    for (const file of list) {
        const filePath = path.join(dir, file);
        const stat = await fs.promises.stat(filePath);
        if (stat && stat.isDirectory()) {
            const subResults = await getAllMarkdownFiles(filePath);
            results = results.concat(subResults);
        } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
            results.push(filePath);
        }
    }
    return results;
}

async function showMenu() {
    while (true) {
        console.log(`\n========================================================`);
        console.log(`   🤖 GESTIONNAIRE DE REMPLACEMENT LobeHub/LobeAI ➔ mAI/May`);
        console.log(`========================================================`);
        console.log(`[1] 🆕 Commencer une NOUVELLE session`);
        console.log(`[2] 📂 CHARGER une session existante`);
        console.log(`[3] 🗑️  SUPPRIMER une session existante`);
        console.log(`[4] 🚪 Quitter le script`);
        console.log(`========================================================`);
        
        const choice = (await askQuestion(`👉 Votre choix [1-4] : `)).trim();
        
        if (choice === '1') {
            const session = await createNewSessionMenu();
            if (session) return session;
        } else if (choice === '2') {
            const session = await loadSessionMenu();
            if (session) return session;
        } else if (choice === '3') {
            await deleteSessionMenu();
        } else if (choice === '4') {
            console.log(`\n👋 Au revoir !`);
            rl.close();
            process.exit(0);
        } else {
            console.log(`❌ Choix invalide.`);
        }
    }
}

async function createNewSessionMenu() {
    console.log(`\n🆕 --- CRÉER UNE NOUVELLE SESSION ---`);
    const nameInput = (await askQuestion(`Nom de la session (laisser vide pour auto) : `)).trim();
    let sessionName = nameInput || `session_${new Date().toISOString().replace(/T/, '_').replace(/\..+/, '').replace(/:/g, '-')}`;
    const safeName = sessionName.replace(/[^a-zA-Z0-9_-]/g, '_');
    const filePath = path.join(SESSIONS_DIR, `${safeName}.json`);
    
    if (fs.existsSync(filePath)) {
        console.log(`⚠️  Session "${safeName}" existe déjà.`);
        const overwrite = (await askQuestion(`[c]harger, [e]craser, [a]nnuler ? : `)).trim().toLowerCase();
        if (overwrite === 'c') {
            try { return JSON.parse(fs.readFileSync(filePath, 'utf8')); } catch { return null; }
        } else if (overwrite === 'a') { return null; }
    }
    
    const session = { name: safeName, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), ignoredOccurrences: [], stats: { modified: 0, ignored: 0 } };
    saveSession(session);
    console.log(`✅ Session "${safeName}" créée !`);
    return session;
}

async function loadSessionMenu() {
    const sessions = getSessions();
    if (!sessions.length) { console.log(`📭 Aucune session.`); return null; }
    console.log(`\n📂 --- CHARGER UNE SESSION ---`);
    sessions.forEach((s, idx) => console.log(`  [${idx + 1}] 📝 ${s.name} (Modifié : ${s.modifiedCount}, Ignoré : ${s.ignoredCount})`));
    console.log(`  [${sessions.length + 1}] 🔙 Retour`);
    
    const choice = parseInt((await askQuestion(`👉 Choix : `)).trim(), 10);
    if (isNaN(choice) || choice < 1 || choice > sessions.length + 1) return null;
    if (choice === sessions.length + 1) return null;
    return sessions[choice - 1].data;
}

async function deleteSessionMenu() {
    const sessions = getSessions();
    if (!sessions.length) { console.log(`📭 Aucune session.`); return; }
    sessions.forEach((s, idx) => console.log(`  [${idx + 1}] 📝 ${s.name}`));
    const choice = parseInt((await askQuestion(`👉 Supprimer [1-${sessions.length}] (0 pour annuler) : `)).trim(), 10);
    if (choice > 0 && choice <= sessions.length) {
        fs.unlinkSync(sessions[choice - 1].path);
        console.log(`🗑️  Supprimé.`);
    }
}

async function main() {
    console.log(`\n📁 Dossier cible par défaut : ${TARGET_DIR_PATH}`);
    const customDir = (await askQuestion(`Appuyez sur Entrée pour utiliser ce dossier ou saisissez un nouveau chemin : `)).trim();
    const targetDir = customDir || TARGET_DIR_PATH;

    if (!fs.existsSync(targetDir)) {
        console.error(`❌ Dossier cible "${targetDir}" introuvable.`);
        rl.close(); return;
    }
    const currentSession = await showMenu();
    if (!currentSession) { rl.close(); return; }

    console.log(`\n🔍 Recherche dans les fichiers Markdown de : ${targetDir} (et tous ses sous-dossiers)...\n`);
    let modifiedFilesCount = 0;
    let renamedFilesCount = 0;
    let replaceAll = false;
    let ignoreAll = false;

    try {
        let allFiles = await getAllMarkdownFiles(targetDir);
        
        // 1. Remplacement dans le contenu des fichiers
        for (const filePath of allFiles) {
            let content = await fs.promises.readFile(filePath, 'utf8');
            let hasMatch = REPLACEMENTS.some(r => content.match(r.regex));
            
            if (hasMatch) {
                const relativePath = path.relative(process.cwd(), filePath);
                let quitRequested = false;
                
                if (replaceAll) {
                    let newContent = content;
                    for (const r of REPLACEMENTS) {
                        newContent = newContent.replace(r.regex, r.replace);
                    }
                    await fs.promises.writeFile(filePath, newContent, 'utf8');
                    currentSession.stats.modified += 1; 
                    saveSession(currentSession);
                    console.log(`   ✅ \x1b[36m${relativePath}\x1b[0m contenu modifié automatiquement.`);
                    modifiedFilesCount++;
                    continue;
                }
                
                if (ignoreAll) {
                    continue;
                }

                const lines = content.split('\n');
                let modifiedLines = [];
                let fileModified = false;

                for (let i = 0; i < lines.length; i++) {
                    let originalLine = lines[i];
                    let currentLineModified = originalLine;
                    let lineHasModifications = false;

                    for (const r of REPLACEMENTS) {
                        let match;
                        const lineRegex = new RegExp(r.regex.source, r.regex.flags);
                        let currentLineBuilder = "";
                        let lastIndex = 0;
                        let lineModifiedForR = false;

                        while ((match = lineRegex.exec(currentLineModified)) !== null) {
                            if (quitRequested) break;
                            
                            currentLineBuilder += currentLineModified.substring(lastIndex, match.index);
                            
                            const occurrenceKey = `${relativePath}::${i + 1}::${match.index}::${r.search}`;

                            if (currentSession.ignoredOccurrences.includes(occurrenceKey) || ignoreAll) {
                                currentLineBuilder += match[0];
                                lastIndex = lineRegex.lastIndex;
                                continue;
                            }
                            if (replaceAll) {
                                currentLineBuilder += r.replace;
                                lineModifiedForR = true;
                                currentSession.stats.modified++;
                                lastIndex = lineRegex.lastIndex;
                                continue;
                            }

                            console.log(`\n⚠️  Occurrence de "${r.search}" dans \x1b[36m${relativePath}\x1b[0m (Ligne ${i + 1})`);
                            const lineToDisplay = currentLineModified.substring(0, match.index) + `\x1b[31m${match[0]}\x1b[0m` + currentLineModified.substring(lineRegex.lastIndex);
                            console.log(`   ${i + 1}: ${lineToDisplay.trim()}\n`);

                            let validResponse = false;
                            while (!validResponse) {
                                const answer = await askQuestion(`   Remplacer par "${r.replace}" ? [y=Oui, n=Non, ya=Oui Tout, na=Non Tout, q=Quitter] : `);
                                const choice = answer.trim().toLowerCase();

                                if (choice === 'y' || choice === 'yes') {
                                    currentLineBuilder += r.replace;
                                    lineModifiedForR = true;
                                    currentSession.stats.modified++;
                                    saveSession(currentSession);
                                    validResponse = true;
                                } else if (choice === 'n' || choice === 'no') {
                                    currentLineBuilder += match[0];
                                    currentSession.ignoredOccurrences.push(occurrenceKey);
                                    currentSession.stats.ignored++;
                                    saveSession(currentSession);
                                    validResponse = true;
                                } else if (choice === 'ya' || choice === 'yesall') {
                                    replaceAll = true;
                                    currentLineBuilder += r.replace;
                                    lineModifiedForR = true;
                                    currentSession.stats.modified++;
                                    saveSession(currentSession);
                                    validResponse = true;
                                    console.log(`✅ Remplacement global activé.`);
                                } else if (choice === 'na' || choice === 'noall') {
                                    ignoreAll = true;
                                    currentLineBuilder += match[0];
                                    validResponse = true;
                                    console.log(`⏭️  Ignorer global activé.`);
                                } else if (choice === 'q' || choice === 'quit') {
                                    quitRequested = true;
                                    currentLineBuilder += match[0];
                                    validResponse = true;
                                } else {
                                    console.log(`❌ Invalide.`);
                                }
                            }
                            lastIndex = lineRegex.lastIndex;
                        }
                        if (quitRequested) {
                            currentLineBuilder += currentLineModified.substring(lastIndex);
                            currentLineModified = currentLineBuilder;
                            break;
                        } else {
                            currentLineBuilder += currentLineModified.substring(lastIndex);
                            currentLineModified = currentLineBuilder;
                        }
                        if (lineModifiedForR) lineHasModifications = true;
                    }
                    
                    modifiedLines.push(currentLineModified);
                    if (lineHasModifications) fileModified = true;
                    
                    if (quitRequested) {
                        for (let j = i + 1; j < lines.length; j++) modifiedLines.push(lines[j]);
                        break;
                    }
                }
                
                if (fileModified) {
                    await fs.promises.writeFile(filePath, modifiedLines.join('\n'), 'utf8');
                    console.log(`   💾 Contenu sauvegardé : \x1b[36m${relativePath}\x1b[0m\n`);
                    modifiedFilesCount++;
                }
                if (quitRequested) {
                    saveSession(currentSession);
                    console.log(`\n🛑 Interrompu lors du contenu.`);
                    rl.close(); return;
                }
            }
        }
        
        // 2. Renommage des fichiers (après avoir traité le contenu)
        allFiles = await getAllMarkdownFiles(targetDir); // Rafraîchir la liste au cas où
        for (const filePath of allFiles) {
            const fileName = path.basename(filePath);
            let newFileName = fileName;
            let fileNeedsRename = false;
            
            for (const r of REPLACEMENTS) {
                if (newFileName.includes(r.search)) {
                    newFileName = newFileName.replace(r.regex, r.replace);
                    fileNeedsRename = true;
                }
            }
            
            if (fileNeedsRename) {
                const relativePath = path.relative(process.cwd(), filePath);
                const newFilePath = path.join(path.dirname(filePath), newFileName);
                
                if (replaceAll) {
                    await fs.promises.rename(filePath, newFilePath);
                    console.log(`   🔄 \x1b[36m${relativePath}\x1b[0m renommé en \x1b[32m${newFileName}\x1b[0m (Auto)`);
                    renamedFilesCount++;
                    continue;
                }
                
                if (ignoreAll) continue;
                
                console.log(`\n⚠️  Le nom du fichier \x1b[36m${relativePath}\x1b[0m contient un terme à remplacer.`);
                let validResponse = false;
                while (!validResponse) {
                    const answer = await askQuestion(`   Renommer en "${newFileName}" ? [y=Oui, n=Non, ya=Oui Tout, na=Non Tout] : `);
                    const choice = answer.trim().toLowerCase();

                    if (choice === 'y' || choice === 'yes') {
                        await fs.promises.rename(filePath, newFilePath);
                        console.log(`   🔄 Renommé en \x1b[32m${newFileName}\x1b[0m`);
                        renamedFilesCount++;
                        validResponse = true;
                    } else if (choice === 'n' || choice === 'no') {
                        validResponse = true;
                    } else if (choice === 'ya' || choice === 'yesall') {
                        replaceAll = true;
                        await fs.promises.rename(filePath, newFilePath);
                        console.log(`   🔄 Renommé en \x1b[32m${newFileName}\x1b[0m`);
                        renamedFilesCount++;
                        validResponse = true;
                        console.log(`✅ Remplacement global activé.`);
                    } else if (choice === 'na' || choice === 'noall') {
                        ignoreAll = true;
                        validResponse = true;
                        console.log(`⏭️  Ignorer global activé.`);
                    } else {
                        console.log(`❌ Invalide.`);
                    }
                }
            }
        }

        saveSession(currentSession);
        console.log(`\n🎉 Terminé !`);
        console.log(`📄 Fichiers dont le contenu a été modifié : ${modifiedFilesCount}`);
        console.log(`🔄 Fichiers renommés : ${renamedFilesCount}`);
    } catch (e) { 
        console.error(e); 
    } finally { 
        rl.close(); 
    }
}

main();
