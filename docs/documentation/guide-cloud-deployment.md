---
title: "Déploiement Cloud sur Kubernetes & mDevsLabs Cloud"
description: "Guide de mise en production de clusters mAI avec mise à l'échelle automatique."
category: "Guides"
order: 3
---

# Déploiement Cloud sur Kubernetes & mDevsLabs Cloud ☁️☸️

Ce guide fournit les étapes d'architecture et de déploiement pour héberger les services **mAI** sur un cluster Kubernetes d'entreprise (EKS, GKE, AKS ou Kubernetes sur site).

---

## ☸️ Manifeste Helm / Kubernetes (`mai-deployment.yaml`)

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mai-inference-deployment
  namespace: mdevslabs
  labels:
    app: mai-inference
spec:
  replicas: 3
  selector:
    matchLabels:
      app: mai-inference
  template:
    metadata:
      labels:
        app: mai-inference
    spec:
      containers:
      - name: mai-container
        image: mdevslabs/mai-engine:latest
        resources:
          limits:
            nvidia.com/gpu: 1
            memory: "32Gi"
            cpu: "8"
          requests:
            nvidia.com/gpu: 1
            memory: "16Gi"
            cpu: "4"
        ports:
        - containerPort: 11434
        readinessProbe:
          httpGet:
            path: /api/version
            port: 11434
          initialDelaySeconds: 15
          periodSeconds: 10
```

---

## 📈 Auto-scaling avec KEDA (Kubernetes Event-driven Autoscaling)

Vous pouvez configurer l'auto-scaling basé sur la longueur de la file d'attente de requêtes HTTP ou l'utilisation VRAM du GPU.

```yaml
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: mai-gpu-scaler
  namespace: mdevslabs
spec:
  scaleTargetRef:
    name: mai-inference-deployment
  minReplicaCount: 1
  maxReplicaCount: 10
  triggers:
  - type: prometheus
    metadata:
      serverAddress: http://prometheus-k8s.monitoring:9090
      metricName: mai_queue_latency_seconds
      threshold: '2.5'
      query: sum(mai_queue_latency_seconds)
```
