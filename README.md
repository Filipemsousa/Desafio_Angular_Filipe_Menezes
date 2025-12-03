# Desafio Angular - Filipe Menezes Sousa

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 📋 Sobre o Projeto: Pode rodar com npm start ou com ng serve. Use cd desafio_angular antes de usar npm start.
Use *********cd desafio_angular para ir até a pasta do desafio e use npm start ou ng serve.**********
Este é um **monorepo profissional** desenvolvido para o desafio de Angular, contendo uma aplicação completa com:
- **Frontend**: Aplicação Angular com interface moderna e responsiva
- **Backend**: API RESTful em Node.js com Express
- **Modelos**: Estruturas de dados TypeScript compartilhadas
- **Documentação**: Páginas estáticas para referência

## 🏗️ Estrutura do Projeto

```
├── apps/                          # Aplicações principais
│   ├── angular-app/               # Frontend Angular
│   ├── api/                       # Backend API
│   └── docs/                      # Documentação/páginas estáticas
├── packages/                      # Pacotes compartilhados
│   └── models/                    # Modelos TypeScript
├── docs/                          # Documentação do projeto
├── .gitignore                     # Configurações Git
└── package.json                   # Configuração do monorepo
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js >= 18
- npm ou yarn

### Instalação
```bash
# Instalar todas as dependências
npm run install:all
```

### Desenvolvimento

```bash
# Iniciar apenas o frontend Angular
npm start

# Iniciar apenas a API
npm run start:api

# Se preferir executar as aplicações separadamente:
cd apps/angular-app && npm start
cd apps/api && npm start
```

## 📁 Estrutura dos Diretórios

### apps/
- **angular-app/**: Aplicação frontend completa
  - Dashboard interativo
  - Páginas dinâmicas
  - Recursos visuais com imagens do Ford

- **api/**: API backend
  - Endpoints REST para veiculos e usuários
  - json-server para mock de dados
  - CORS configurado

- **docs/**: Documentação histórica
  - Versão estática anterior da aplicação

### packages/
- **models/**: Modelos TypeScript compartilhados
  - `Usuario.model.ts`: Estrutura de usuários
  - `Veiculo.model.ts`: Estrutura de veículos

## 🛠️ Scripts Disponíveis

```json
{
  "start": "Inicia o frontend Angular",
  "start:api": "Inicia o backend API",
  "build": "Compila a aplicação Angular",
  "test": "Executa os testes",
  "lint": "Verifica qualidade do código",
  "install:all": "Instala dependências de todos os workspaces"
}
```

## 📊 Stack Tecnológico

### Frontend
- **Angular** - Framework web moderno
- **TypeScript** - Tipagem estática e confiável
- **RxJS** - Programação reativa

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web minimalista
- **CORS** - Suporte a requisições cruzadas
- **json-server** - Mock API para desenvolvimento

### Desenvolvimento
- **Workspaces** - Monorepo moderno
- **npm** - Gerenciamento de dependências
- **Git** - Versionamento de código

## 🏷️ Funcionalidades

### Frontend (Angular)
- ✅ Dashboard responsivo
- ✅ Navegação SPA
- ✅ Componentes reutilizáveis
- ✅ Gestão de veículos Ford
- ✅ Interface moderna e intuitiva

### Backend (API)
- ✅ Endpoints RESTful
- ✅ Suporte a operações CRUD
- ✅ Dados mockados
- ✅ Documentação clara

## 👥 Autor

**Filipe Menezes**
- GitHub: [@Filipemsousa](https://github.com/Filipemsousa)
- LinkedIn: [Seu LinkedIn]

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

⭐ Se este projeto foi útil, considere dar uma estrela no repositório!

## 📞 Contato

Para dúvidas ou sugestões, abra uma issue no GitHub ou envie um email.
