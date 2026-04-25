# ✂️ Hair Day | Agendamento de Serviços

![Preview do Projeto](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black)
![JSON Server](https://img.shields.io/badge/JSON_Server-000?style=for-the-badge&logo=json)

Uma aplicação web robusta e modular desenvolvida para o gerenciamento de agendamentos em estabelecimentos de beleza. O projeto simula um ambiente real de agendamento, permitindo a escolha de datas, verificação de disponibilidade de horários em tempo real e gestão de cancelamentos, aplicando conceitos avançados de modularização e integração com APIs.

🔗 **[Acessar a aplicação online](https://devoliveir4.github.io/HairDay/)**

---

## 🎯 Funcionalidades

* **Agendamento Inteligente:** Seleção de datas com validação automática para impedir agendamentos no passado.
* **Disponibilidade em Tempo Real:** Exibição dinâmica de horários vagos, filtrando automaticamente horários já ocupados e horários que já passaram no dia atual.
* **Organização por Períodos:** Separação visual intuitiva dos agendamentos em turnos (Manhã, Tarde e Noite).
* **Gestão de Cancelamentos:** Interface interativa para remover agendamentos existentes com confirmação de segurança.
* **Persistência de Dados:** Integração completa com API local para salvar, recuperar e deletar agendamentos.
* **Interface Responsiva:** Design otimizado para proporcionar uma excelente experiência tanto em dispositivos móveis quanto desktops.

---

## 🚀 Tecnologias e Conceitos Aplicados

Este projeto foi construído utilizando uma arquitetura moderna e escalável, focada em boas práticas de desenvolvimento:

* **Arquitetura Modular (ES Modules):** Divisão rigorosa de responsabilidades entre `services` (comunicação com API), `modules` (lógica de UI) e `utils` (ferramentas auxiliares).
* **Consumo de API REST:** Utilização de `fetch` para operações completas de CRUD (Create, Read, Delete) integradas ao JSON Server.
* **Manipulação Avançada de Datas:** Uso da biblioteca **Dayjs** para cálculos complexos de fuso horário, verificações de intervalos e formatação internacional.
* **Tratamento de Exceções:** Implementação de blocos `try...catch` em todas as camadas de integração para garantir feedbacks amigáveis ao usuário em caso de erros.
* **Tooling com Webpack:** 
  * Configuração de `loaders` para processamento de CSS e JavaScript.
  * Automação de build com `plugins` para injeção de scripts e cópia de assets.
  * Ambiente de desenvolvimento otimizado com `Webpack Dev Server`.
* **Manipulação Dinâmica da DOM:** Criação e renderização de elementos complexos em tempo real baseada nos estados da aplicação.
* **Event Delegation:** Uso eficiente de escutadores de eventos para gerenciar interações em listas dinâmicas.

---

## ⚙️ Como executar o projeto localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/devoliveir4/HairDay.git
   ```
2. Instale as dependências necessárias:
   ```bash
   npm install
   ```
3. Inicie o servidor da API (Banco de Dados Local):
   ```bash
   npm run server
   ```
4. Em outro terminal, inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

---

## 📝 Boas Práticas Implementadas

- **Nomenclatura Semântica:** Variáveis e funções nomeadas de forma clara para facilitar a manutenção.
- **Separação de Preocupações (SoC):** A lógica de negócio está isolada da lógica de renderização.
- **Código Limpo:** Evitou-se repetições desnecessárias (DRY) através da criação de funções utilitárias reutilizáveis.

---
Desenvolvido por **Gabriel Oliveira do Carmo** 🚀
