# 🧪 Projeto de Testes Automatizados - Blog Agibank

## 📌 Descrição

Este projeto tem como objetivo validar a funcionalidade de busca do blog do Agibank utilizando **Cypress** para testes end-to-end.

---

## 🚀 Tecnologias utilizadas

* Node.js
* Cypress
* GitHub Actions (CI/CD)

---

## 📂 Estrutura do projeto

```
cypress/
  e2e/
    pesquisas.cy.js
  support/
cypress.config.js
package.json
```

---

## ⚙️ Pré-requisitos

* Node.js instalado (versão 16 ou superior)
* NPM ou Yarn

---

## 🔧 Instalação

Clone o repositório:

```bash
git clone <https://github.com/jandersc/Desafio_Agi.git>
```

Acesse a pasta:

```bash
cd Desafio_Agi
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Como executar os testes

### 🔹 Modo headless (CI)

```bash
npx cypress run
```

---

## 🧪 Cenários implementados

### ✅ Pesquisa com sucesso

* Realiza busca por um termo válido
* Valida:

  * URL com parâmetro de busca
  * Título da página
  * Existência de resultados

### ❌ Pesquisa sem resultados

* Realiza busca com termo inválido
* Valida:

  * Mensagem de "nenhum resultado encontrado"

---

## 🔄 Integração contínua (CI)

O projeto utiliza **GitHub Actions** para execução automática dos testes:

* Executa em:

  * Push
  * Pull Request

### 📁 Arquivo de configuração:

```
.github/workflows/cypress.yml
```

---

## 📊 Evidências

Em caso de falha:

* Screenshots são gerados automaticamente
* Vídeos da execução são armazenados

---

## 💡 Boas práticas aplicadas

* Uso de seletores resilientes
* Evitar dependência de estrutura DOM
* Testes independentes
* Validação por comportamento

---

## 👨‍💻 Autor

Projeto desenvolvido para desafio técnico de QA.
