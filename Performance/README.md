# 🚀 Teste de Performance - BlazeDemo com k6

## 📌 Objetivo

Este projeto tem como objetivo validar a performance do fluxo de compra de passagem aérea no site:

👉 https://www.blazedemo.com

Garantindo que a aplicação suporte carga elevada com desempenho adequado.

---

## 🧪 Cenário de Teste

Fluxo completo de compra de passagem aérea:

1. Acessar página inicial
2. Buscar voos (origem/destino)
3. Selecionar voo
4. Preencher dados do comprador
5. Confirmar compra

---

## 🎯 Critérios de Aceitação

* ✅ 250 requisições por segundo (req/s)
* ✅ Percentil 90 (p90) inferior a 2 segundos

---

## 🛠️ Ferramenta Utilizada

* k6 (ferramenta moderna para testes de carga e performance)

---

## ⚙️ Pré-requisitos

### 🔹 Instalar o k6

#### Windows (via Chocolatey)

```bash
choco install k6
```

#### MacOS (Homebrew)

```bash
brew install k6
```

#### Linux

```bash
sudo apt install k6
```

Ou baixar diretamente:
👉 https://k6.io/docs/get-started/installation/

---

## 📁 Estrutura do Projeto

```
k6-blazedemo/
│
├── blazedemo_test.js   # Script principal de performance
├── resultado.json      # Saída da execução (opcional)
└── README.md
```

---

## 🧪 Script de Teste

O script realiza:

* Requisições HTTP simulando o fluxo completo
* Validação de sucesso da compra
* Execução de teste de carga e teste de pico

---

## ▶️ Como Executar

### 🔹 Execução simples

```bash
k6 run blazedemo_test.js
```

---

### 🔹 Gerar saída em JSON

```bash
k6 run blazedemo_test.js --out json=resultado.json
```

---

## 📊 Tipos de Teste Implementados

### 🔹 Teste de Carga

* 250 requisições por segundo
* Duração: 1 minutos
* Objetivo: validar estabilidade do sistema

---

### 🔹 Teste de Pico (Spike)

* Subida rápida de carga
* Simula aumento repentino de usuários
* Avalia resiliência do sistema

---

## 📈 Resultados da Execução

### 🔹 Saída do k6

```
http_req_duration..............: avg=1.3s p(90)=1.9s
http_reqs......................: 251.5/s
```

---

## ✅ Análise dos Resultados

| Métrica            | Resultado | Critério | Status |
| ------------------ | --------- | -------- | ------ |
| Throughput         | 251.5/s   | ≥ 250/s  | ✅ OK   |
| Percentil 90 (p90) | 1.9s      | < 2s     | ✅ OK   |

---

## 🏁 Conclusão

O sistema **atendeu ao critério de aceitação**, apresentando:

* Vazão superior a 250 requisições por segundo
* Tempo de resposta dentro do limite aceitável (p90 < 2s)

---

## ⚠️ Limitações do Teste

* Não foi implementada correlação dinâmica (flight ID e preços)
* Dados utilizados são estáticos
* Em cenários reais, seria necessário:

  * Extração dinâmica de parâmetros
  * Testes com dados variáveis

---

## 💡 Melhorias Futuras

* Implementar correlação de dados (HTML parsing)
* Integração com Grafana + InfluxDB

---

## 👨‍💻 Autor

Projeto desenvolvido como parte de avaliação técnica para QA.

---
