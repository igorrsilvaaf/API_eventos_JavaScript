<div align="center">

# 🎫 API de Eventos

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)](https://jwt.io/)

Sistema moderno de gerenciamento de eventos com autenticação, 
compra de ingressos e interface responsiva.

[Documentação](#documentação) •
[Instalação](#instalação) •
[API](#api-endpoints) •
[Contribuição](#contribuição)

</div>

---

## ⚡ Quick Start

```bash
# Instalar dependências
npm install

# Configurar ambiente
cp .env.example .env

# Iniciar servidor
npm run dev
```

## 🛠️ Stack Tecnológica

<table>
  <tr>
    <td><strong>Backend</strong></td>
    <td><strong>Frontend</strong></td>
  </tr>
  <tr>
    <td>
      • Node.js + Express<br/>
      • MongoDB<br/>
      • JWT (autenticação)<br/>
      • Swagger (documentação)
    </td>
    <td>
      • JavaScript (ES6+)<br/>
      • HTML5 + CSS3<br/>
      • Design Responsivo
    </td>
  </tr>
</table>

## 📁 Estrutura do Projeto

```plaintext
.
├── 📂 src/
│   ├── 📂 config/        # Configurações
│   ├── 📂 controllers/   # Controladores
│   ├── 📂 events/        # Lógica de eventos
│   ├── 📂 middleware/    # Middlewares
│   ├── 📂 models/        # Modelos MongoDB
│   ├── 📂 routes/        # Rotas da API
│   └── 📂 utils/         # Utilitários
├── 📄 .env
├── 📄 .gitignore
├── 📄 package.json
└── 📄 README.md
```

## ✨ Funcionalidades

<table>
  <tr>
    <td>✅ Autenticação de usuários</td>
    <td>✅ Sistema de busca</td>
  </tr>
  <tr>
    <td>✅ CRUD de eventos</td>
    <td>✅ Interface responsiva</td>
  </tr>
  <tr>
    <td>✅ Compra de ingressos</td>
    <td>✅ Modo escuro/claro</td>
  </tr>
</table>

## 🚀 Instalação

1️⃣ **Clone o repositório**
```bash
git clone https://github.com/igorrsilvaaf/API_eventos_JavaScript.git
cd API_eventos_JavaScript
```

2️⃣ **Instale as dependências**
```bash
npm install
```

3️⃣ **Configure o ambiente**
```bash
# Crie o arquivo .env
cp .env.example .env

# Configure as variáveis
PORT=3000
MONGODB_URI=sua_url_mongodb
SECRET_KEY=sua_chave_secreta
```

4️⃣ **Inicie o servidor**
```bash
npm run dev
```

## 🔌 API Endpoints

### 🔐 Autenticação

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/api/auth/register` | Registro de usuário |
| `POST` | `/api/auth/login` | Login |
| `POST` | `/api/auth/refresh` | Refresh token |

### 🎫 Eventos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/api/events` | Lista eventos |
| `POST` | `/api/events` | Cria evento |
| `GET` | `/api/events/:id` | Detalhes do evento |
| `PUT` | `/api/events/:id` | Atualiza evento |
| `DELETE` | `/api/events/:id` | Remove evento |

### 🎟️ Ingressos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/api/tickets` | Compra ingresso |
| `GET` | `/api/tickets/user` | Ingressos do usuário |

## 📚 Documentação

Acesse a documentação completa da API em:

```
http://localhost:3000/api-docs
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie sua feature branch
   ```bash
   git checkout -b feature/nova-feature
   ```
3. Commit suas mudanças
   ```bash
   git commit -m 'Adiciona nova feature'
   ```
4. Push para a branch
   ```bash
   git push origin feature/nova-feature
   ```
5. Abra um Pull Request

## 📝 Licença

[MIT](LICENSE) © Igor Silva

---

<div align="center">
  <sub>Feito com ❤️ por Igor Silva</sub>
</div>