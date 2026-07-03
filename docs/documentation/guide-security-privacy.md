---
title: "Confidentialité"
description: "Protection des données locales, anonymisation et isolation du réseau."
category: "Guides"
order: 7
---

# Sécurité, Confidentialité & Conformité RGPD 🔐🛡️

La sécurité et le respect de la vie privée des utilisateurs constituent la première priorité de l'architecture **mDevsLabs**.

---

## 🔒 Principes de Confidentialité mDevsLabs

1. **Isolation Réseau Complète (Air-Gapped Ready)** : Les modèles mAI s'exécutent intégralement hors-ligne sans dépendance à des requêtes API distantes.
2. **Aucun Entraînement sur vos Données** : Vos prompts, documents joints et interactions ne sont jamais enregistrés ni utilisés pour de futurs ré-entraînements.
3. **Anonymisation Dynamique des PII (Personally Identifiable Information)** : Masquage automatique des adresses emails, numéros de sécurité sociale et clés d'API avant l'envoi au moteur de calcul.

---

## 🛡️ Prévention des Attaque Prompt Injection

Le module `mAI-Guard` inspecte les entrées pour neutraliser les tentatives de contournement (*jailbreak*) et les injections indirectes issues de documents scannés ou de pages web externes.

```bash
# Activation de l'audit de sécurité local
export MDEVS_SECURITY_GUARD=strict
```
