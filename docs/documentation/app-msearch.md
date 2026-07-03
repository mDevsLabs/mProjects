---
title: "mSearch"
description: "Recherche sémantique hybride, indexation vectorielle et intégration avec les modèles mAI."
category: "Applications"
order: 2
---

# mSearch - Moteur de Recherche Intelligent & Vectoriel 🔍

**mSearch** est la solution de recherche sémantique d'entreprise développée par **mDevsLabs**. Combinant la recherche textuelle classique (BM25) et la recherche vectorielle basée sur des plongements sémantiques (embeddings), mSearch offre un taux de rappel et de précision exceptionnel.

---

## 🔑 Fonctionnalités Clés

1. **Recherche Hybride BM25 + Dense Vectors** : Fusion Reciprocal Rank Fusion (RRF) des scores de recherche textuelle et vectorielle.
2. **Indexation Temps Réel** : Prise en charge des documents PDF, Markdown, Docx, HTML et bases SQL.
3. **Reranking Réflexif** : Module de ré-ordonnancement basé sur `mAI-Reasoning` pour éliminer les bruits.
4. **API Restful High Performance** : Temps de réponse sous les 15 millisecondes pour des corpus de plus de 1 million de documents.

---

## 🛠️ Configuration de l'Indexateur

Voici un extrait de configuration `msearch.config.yaml` :

```yaml
version: "1.0"
index:
  name: "knowledge-base-v1"
  embedding_model: "mdevslabs/mai-embeddings"
  dimension: 768
  metric: "cosine"

hybrid_search:
  weight_dense: 0.65
  weight_sparse: 0.35
  top_k: 50
  rerank_top_k: 10
```

---

## 🧪 Exemple d'Interrogation via Curl

```bash
curl -X POST http://localhost:8080/v1/search \
  -H "Content-Type: application/json" \
  -d '{
    "query": "Comment configurer la mémoire contextuelle dans mAI ?",
    "limit": 5,
    "filters": {
      "category": "Guides"
    }
  }'
```

---

## 📊 Benchmark vs Solutions Traditionnelles

| Solution | Temps Moyen (ms) | Precision@5 | Coverage Sémantique |
| --- | --- | --- | --- |
| **mSearch Hybride** | **12 ms** | **94.2%** | **Très Élevée** |
| BM25 Standard | 8 ms | 68.5% | Faible |
| Vector Search Pur | 22 ms | 81.0% | Moyenne |
