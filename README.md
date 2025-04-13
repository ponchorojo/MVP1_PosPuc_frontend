# Fluxo de Caixa - Projeto MVP - Victor Magno Thuler Pereira

Este é um sistema simples de fluxo de caixa com **front-end em HTML/CSS/JS puro** e **back-end em Python (Flask)**. Ele permite registrar entradas e saídas financeiras, visualizar a lista de registros e calcular o saldo total, além de cancelar registros (DELETE).

---

## 📁 Estrutura do Projeto

```
fluxo_caixa_app/
├── front/           # Interface web (HTML, JS e CSS)
│   ├── index.html
│   ├── script.js
│   └── style.css
│
└── back/            # API REST com Flask
    ├── app.py
    ├── models.py
    └── requirements.txt
```

---

## Como Rodar o Projeto - Front-End

### 1. Rodar o Front-End

Não é necessário servidor. Basta abrir o arquivo `index.html` no navegador:

OBS: O back-end deve estar rodando para que seja possível criar registros no front-end, repositório do back-end: `https://github.com/ponchorojo/MVP1_PosPuc_backend.git`

```bash
cd ../front
start index.html  # (Windows)
# ou
open index.html   # (macOS)
```

Também pode abrir o arquivo manualmente clicando duas vezes em `index.html`.

---

## Funcionalidades

- Registrar entradas e saídas de dinheiro  
- Visualizar todos os registros em uma lista  
- Ver o saldo total atualizado  
- Cancelar (excluir) registros com um clique    
