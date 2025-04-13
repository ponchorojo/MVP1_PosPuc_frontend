# Fluxo de Caixa - Projeto MVP

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

## Como Rodar o Projeto


### 1. Rodar o Front-End

Não é necessário servidor. Basta abrir o arquivo `index.html` no navegador:

```bash
cd ../front
start index.html  # (Windows)
# ou
open index.html   # (macOS)
```

Você também pode abrir o arquivo manualmente clicando duas vezes em `index.html`.

---

## ⚙️ Funcionalidades

- Registrar entradas e saídas de dinheiro  
- Visualizar todos os registros em uma lista  
- Ver o saldo total atualizado  
- Cancelar (excluir) registros com um clique    

---

## 🔗 Endpoints da API (Flask)

| Método | Rota                 | Descrição                          |
|--------|----------------------|------------------------------------|
| GET    | `/fluxo_caixa`       | Lista todos os registros           |
| POST   | `/fluxo_caixa`       | Cria um novo registro              |
| DELETE | `/fluxo_caixa/<id>`  | Deleta um registro por ID          |
| GET    | `/saldo`             | Retorna o saldo (entradas - saídas)|

---

## 🧪 Exemplo de JSON para POST

```json
{
  "descricao": "Pagamento Cliente",
  "valor": 500.00,
  "tipo": "entrada"
}