---
title: "Prompts"
description: "Meilleures pratiques de rédaction de prompts et d'utilisation de formats structurés (JSON/XML)."
category: "Guides"
order: 5
---

# Prompt Engineering & Structuration de Contextes ✍️⚡

Ce guide résume les meilleures pratiques pour tirer le meilleur parti des modèles **mAI** grâce à des techniques modernes dePrompt Engineering.

---

## 🎯 Principes Fondamentaux

1. **Rôle & Contexte Système Explicit** : Définissez toujours un rôle clair dans le champ system message.
2. **Exemples Few-Shot** : Fournissez 2 ou 3 exemples d'entrées et de sorties attendues.
3. **Balisage XML pour Contextes Multiples** : Utilisez des balises `<document>`, `<instructions>`, `<constraints>` pour séparer les éléments du prompt.
4. **Format de Sortie Contraint (JSON Schema)** : Forcez le modèle à répondre avec un schéma JSON strict pour les intégrations logicielles.

---

## 📄 Exemple de Prompt Optimisé

```markdown
<system>
Tu es un expert en audit de code TypeScript pour la plateforme mProjects.
</system>

<instructions>
Analyse le code ci-dessous et renvoie un rapport au format JSON contenant :
- "score": nombre de 0 à 10
- "vulnerabilities": liste des failles de sécurité
- "recommendations": liste des améliorations
</instructions>

<code_to_audit>
export function parseInput(raw: any) {
  return eval(raw);
}
</code_to_audit>
```

---

## ❌ Mauvaise Pratique vs ✅ Bonne Pratique

- ❌ *Mauvais* : "Refais ce code en mieux."
- ✅ *Bon* : "Refactorise la fonction `parseInput` en supprimant l'usage de `eval()` et en sécurisant le typage TypeScript avec un schéma Zod."
