---
title: "Fine-Tuning"
description: "Méthodologie pour adapter les modèles mAI à vos jeux de données métiers."
category: "Guides"
order: 4
---

# Fine-Tuning de Modèles avec LoRA et QLoRA 🎯🧬

Ce guide explique comment réentraîner et adapter le modèle **mAI-1** sur vos propres jeux de données spécialisés en utilisant les méthodes d'adaptation à bas rang **LoRA (Low-Rank Adaptation)** et **QLoRA (Quantized LoRA)**.

---

## 🛠️ Outils & Bibliothèques Requis

- Python 3.10+
- `unsloth`, `peft`, `transformers`, `bitsandbytes`, `trl`
- GPU NVIDIA avec au moins 16 Go de VRAM (ex: RTX 4090 ou A10G)

---

## 💻 Script d'Entraînement avec Unsloth & PEFT

```python
from unsloth import FastLanguageModel
import torch
from trl import SFTTrainer
from transformers import TrainingArguments

max_seq_length = 4096

model, tokenizer = FastLanguageModel.from_pretrained(
    model_name="mdevslabs/mai-1",
    max_seq_length=max_seq_length,
    load_in_4bit=True,
)

model = FastLanguageModel.get_peft_model(
    model,
    r=16,
    target_modules=["q_proj", "k_proj", "v_proj", "o_proj", "gate_proj", "up_proj", "down_proj"],
    lora_alpha=16,
    lora_dropout=0,
    bias="none",
)

# Configuration de l'entraîneur
trainer = SFTTrainer(
    model=model,
    tokenizer=tokenizer,
    train_dataset=dataset,
    dataset_text_field="text",
    max_seq_length=max_seq_length,
    args=TrainingArguments(
        per_device_train_batch_size=2,
        gradient_accumulation_steps=4,
        warmup_steps=10,
        max_steps=100,
        learning_rate=2e-4,
        fp16=not torch.cuda.is_bf16_supported(),
        bf16=torch.cuda.is_bf16_supported(),
        output_dir="outputs",
    ),
)

trainer.train()
model.save_pretrained_gguf("mai-1-custom-lora", tokenizer, quantization_method="q4_k_m")
```
