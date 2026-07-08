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

---

## 🔐 Authentification & Gestion des Clés API

### Format de Clé Sécurisée

Toutes les clés API respectent le format : `mp-[10 caractères alphanumériques]-[5 chiffres]`

Exemple : `mp-k9x2m7p1qa-84920`

### Sécurité des Clés

- **Masquage automatique** : Les clés sont masquées après une première affichage
- **Limites de rate** : 60 RPM (requêtes/minute) pour les comptes gratuits
- **IP Restriction** : Possible de restreindre l'utilisation à une adresse IP

---

## 🧹 Gestion des Données Locaux

### Nettoyage Automatique

```python
from mdevslabs.security import DataCleaner

cleaner = DataCleaner(
    pii_patterns=[
        r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b',  # Email
        r'\b\d{15,16}\b',  # Carte de crédit
        r'\b\d{2}:\d{2}:\d{2}\b',  # Horaires
    ],
    action="mask"  # "remove" ou "mask"
)

cleaned_data = cleaner.process(document)
```

### Chiffrement des Fichiers

```bash
# Chiffrer un fichier avant stockage
openssl enc -aes-256-cbc -salt -in sensitive_data.txt -out sensitive_data.enc

# Déchiffrer pour traitement
openssl enc -d -aes-256-cbc -in sensitive_data.enc -out sensitive_data.txt
```

---

## 🕵️‍♂️ Détection d'Anomalies

### Surveillance des Requêtes

```python
from mdevslabs.monitoring import RequestMonitor

monitor = RequestMonitor(
    suspicious_patterns=[
        r'ignore.*previous.*instructions',
        r'jailbreak',
        r'system\s+prompt',
    ]
)

if monitor.is_suspicious(user_input):
    log_security_event(user_input)
    return "Entrée rejetée pour raisons de sécurité"
```

---

## 📋 Conformité RGPD

### Droit à l'Oubli

```python
from mdevslabs.compliance import GDPRCompliance

gdpr = GDPRCompliance(user_id="user_123")

# Supprimer toutes les données utilisateur
gdpr.right_to_be_forgotten()

# Obtenir un rapport de données
gdpr.export_user_data()
```

### Consentement & Transparence

```markdown
<consent>
J'accepte que mes interactions avec mAI soient utilisées pour améliorer le modèle.
Je comprends que je peux retirer ce consentement à tout moment.
</consent>
```

---

## 🔒 Bonnes Pratiques de Sécurité

### 1. Environnements de Déploiement

```bash
# Ne jamais exposer les modèles en direct sur internet
# Utiliser un reverse proxy avec authentification

nginx {
    location /api {
        proxy_pass http://localhost:11434;
        auth_basic "Accès restreint";
        auth_basic_user_file /etc/nginx/.htpasswd;
    }
}
```

### 2. Mots de Passe & Secrets

```bash
# Utiliser un gestionnaire de secrets
export OLLAMA_MODELS_PATH="/secure/models"
export MDEVS_API_KEYS_PATH="/secure/keys"

# Ne jamais commit les clés dans le code source
# Utiliser .env ou secrets manager
```

### 3. Journalisation Sécurisée

```python
import logging

# Ne jamais logger les données sensibles
logger = logging.getLogger("mAI")
logger.setLevel(logging.INFO)

# Masquer les clés avant logging
def sanitize_for_log(text):
    return text.replace("mp-", "[API_KEY_REDACTED]-")
```

---

## 📚 Ressources

- **Authentification API** : [Guide Auth](/docs?doc=api-security-authentication)
- **Prompt Security** : [Guide Prompts](/docs?doc=guide-prompt-engineering)
- **Déploiement** : [Kubernetes Guide](/docs?doc=guide-cloud-deployment)