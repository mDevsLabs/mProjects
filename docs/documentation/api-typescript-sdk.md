---
title: "SDK TypeScript"
description: "Intégration Web & Node.js avec streaming de réponses et typage strict."
category: "API"
order: 3
---

# SDK TypeScript / JavaScript (`@mdevslabs/sdk`) 🟨⚡

Le SDK officiel `@mdevslabs/sdk` permet d'intégrer facilement les services **mAI** et **mSearch** dans vos applications Web (Next.js, React, Vue, Svelte) et serveurs (Node.js, Bun, Deno).

---

## 📦 Installation

```bash
npm install @mdevslabs/sdk
# ou via pnpm
pnpm add @mdevslabs/sdk
```

---

## 💻 Exemple d'Usage dans Next.js Server Action

```typescript
import { mDevsClient } from '@mdevslabs/sdk';

const client = new mDevsClient({
  apiKey: process.env.MDEVS_API_KEY,
});

export async function askAssistant(question: string) {
  const result = await client.chat.completions.create({
    model: 'mai-1',
    messages: [{ role: 'user', content: question }],
    temperature: 0.7,
  });

  return result.choices[0].message.content;
}
```

---

## 🌊 Streaming Web API Exemple

```typescript
const responseStream = await client.chat.completions.create({
  model: 'mai-1',
  messages: [{ role: 'user', content: 'Raconte une histoire courte.' }],
  stream: true,
});

for await (const chunk of responseStream) {
  process.stdout.write(chunk.choices[0]?.delta?.content || '');
}
```
