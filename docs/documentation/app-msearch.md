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

## 📊 Architecture de l'Indexation

### Pipeline d'Ingestion

1. **Extraction** : Parse les fichiers PDF, DOCX, Markdown, HTML
2. **Chunking Intelligent** : Découpe par paragraphes, fonctions, sections
3. **Embedding** : Génération de vecteurs avec le modèle d'embeddings mAI
4. **Indexation HNSW** : Construction de l'index vectoriel
5. **Métadonnées** : Association des chemins, types, dates aux vecteurs

### Gestion des Collections

```yaml
collections:
  - name: "documentation"
    path: "/docs"
    priority: "high"
  - name: "knowledge-base"
    path: "/data"
    priority: "normal"
  - name: "legacy"
    path: "/archive"
    priority: "low"
```

---

## 🧪 Exemple d'Interrogation via Curl

```bash
curl -X POST http://localhost:8080/v1/search \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $MSEARCH_API_KEY" \
  -d '{
    "query": "Comment configurer la mémoire contextuelle dans mAI ?",
    "limit": 5,
    "filters": {
      "category": "Guides"
    },
    "include_sources": true
  }'
```

### Réponse Typique

```json
{
  "query": "Comment configurer la mémoire contextuelle dans mAI ?",
  "results": [
    {
      "document_id": "guide-context-memory-management",
      "title": "Gestion de la Mémoire Contextuelle",
      "score": 0.94,
      "snippet": "...fenêtre glissante (Sliding Window Attention)...",
      "source": "docs/guide-context-memory-management.md"
    }
  ],
  "took_ms": 12,
  "total_results": 1
}
```

---

## 📈 Benchmark vs Solutions Traditionnelles

- **mSearch Hybride** : Temps Moyen 12 ms, Precision@5 94.2%, Coverage Sémantique Très Élevée
- **BM25 Standard** : Temps Moyen 8 ms, Precision@5 68.5%, Coverage Sémantique Faible
- **Vector Search Pur** : Temps Moyen 22 ms, Precision@5 81.0%, Coverage Sémantique Moyenne

---

## 🔐 Recherche Sécurisée

mSearch prend en charge :

- **Chiffrement des données au repos** : Tous les fichiers et vecteurs sont chiffrés.
- **Contrôle d'accès granulaire** : Permissions par collection et par utilisateur.
- **Audit des requêtes** : Journalisation des accès pour conformité RGPD.

---

## 🚀 Optimisation des Performances

### Paramètres Recommandés (Production)

```bash
# Variables d'environnement
export MSEARCH_THREADS=8
export MSEARCH_GPU_LAYERS=32
export MSEARCH_CACHE_SIZE=4GB
export MSEARCH_MAX_CONCURRENT_QUERIES=100
```

### Mémoire VRAM

| Modèle | VRAM Min (Q4_K_M) | VRAM Rec (Q8_0) |
|--------|-------------------|-----------------|
| mAI-1 | 7.2 Go | 13.1 Go |
| mAI-1-Light | 1.8 Go | 3.2 Go |

---

## 📚 Ressources

- **Documentation technique** : [Architecture RAG](/docs?doc=arch-rag-pipeline)
- **Indexation vectorielle** : [Guide HNSW](/docs?doc=arch-vector-indexing)
- **Déploiement Cloud** : [Kubernetes Guide](/docs?doc=guide-cloud-deployment)

