# 🌿 Nivos - Headless Commerce Engine (Backend)

> **API Restful para E-commerce de Alta Performance e Autonomia de Marketing.**

Este é o repositório do **Back-end** do projeto Nivos. Ele foi arquitetado utilizando **Strapi v5 (Headless CMS)** para servir como a fonte da verdade de dados, produtos e conteúdo para uma aplicação Front-end em Next.js.

O foco deste projeto não é apenas "guardar dados", mas fornecer uma **arquitetura modular** onde a equipe de marketing tem autonomia para criar Landing Pages dinâmicas sem depender de deploy de código.

---

## 🚀 Diferenciais de Arquitetura (Agency Grade)

Ao contrário de e-commerces tradicionais monolíticos, este projeto utiliza uma abordagem moderna focada em performance e flexibilidade:

### 1. Fábrica de Landing Pages (Dynamic Zones)

Implementação de um sistema de blocos modulares (`Blocks.Hero`, `Blocks.ProductGrid`, `Blocks.Newsletter`).

- **Benefício:** O cliente pode criar campanhas (ex: Black Friday) montando a estrutura da página visualmente pelo CMS.
- **Controle:** Opções de _Header Minimalista_ ou _Sem Header_ para foco total em conversão (Ads).

### 2. Modelagem Avançada de SEO (`Shared.Seo`)

Componente reutilizável injetado em todas as coleções (Produtos, Categorias e Blog).

- **Travas de Segurança:** Limites de caracteres configurados no Strapi para `MetaTitle` (<60) e `MetaDescription` (<160) seguindo diretrizes do Google.
- **Social Sharing:** Validação estrita para garantir que imagens de compartilhamento (OG Image) sejam leves.

### 3. Gestão de Mídia Otimizada (Cloudinary)

Uploads não sobrecarregam o servidor. O Strapi foi configurado com o provider do **Cloudinary**.

- Entrega automática de formatos modernos (**WebP/AVIF**) dependendo do navegador do usuário.
- Transformação de imagem _on-the-fly_ para performance no Front-end.

---

## 🛠️ Stack Tecnológico

- **Core:** Strapi v5 (Community Edition)
- **Linguagem:** TypeScript / Node.js
- **Banco de Dados:** SQLite (Dev) / PostgreSQL (Produção/Render)
- **Plugins Ativos:**
  - `@strapi/provider-upload-cloudinary`: Gestão de ativos digitais.
  - `Users & Permissions`: Controle de acesso público (API) e autenticado.

---

## 📦 Modelagem de Conteúdo (Content Types)

A API expõe os seguintes endpoints públicos:

| Collection        | Descrição                                                                                   |
| :---------------- | :------------------------------------------------------------------------------------------ |
| **Products**      | Catálogo com gestão de preço (`price`) e promoção (`salePrice`), controle de estoque e SEO. |
| **Categories**    | Taxonomia para organização da loja.                                                         |
| **Landing Pages** | Páginas de campanha com URL personalizada (`slug`) e layout flexível.                       |
| **Posts (Blog)**  | Conteúdo rico com relação cruzada para produtos (Cross-selling).                            |

---

## ⚙️ Instalação e Execução

### Pré-requisitos

- Node.js >= 20 (ajustado conforme `package.json` do projeto)
- Conta no Cloudinary (para as imagens)

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone <url-do-seu-repo>
   cd backend-nivos
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as Variáveis de Ambiente:**
   Renomeie o arquivo `.env.example` para `.env` e preencha suas chaves do Cloudinary:

   ```env
   HOST=0.0.0.0
   PORT=1337
   APP_KEYS=... (gerados automaticamente)
   API_TOKEN_SALT=...
   ADMIN_JWT_SECRET=...
   TRANSFER_TOKEN_SALT=...

   # Cloudinary Config (Obrigatório para Imagens)
   CLOUDINARY_NAME=seu_cloud_name
   CLOUDINARY_KEY=sua_api_key
   CLOUDINARY_SECRET=sua_api_secret
   ```

4. **Inicie o Servidor (Desenvolvimento):**

   ```bash
   npm run develop
   ```

   - **Painel Admin:** http://localhost:1337/admin

   - **API:** http://localhost:1337/api

---

## 🔗 Links Relacionados

- **Repositório Front-end (Next.js):** https://github.com/thiagoribeiro21/backend-ecommerce

- **Deploy do Strapi (Render):** [Link do seu deploy se tiver]

---

## 📝 Licença

Este projeto é um case de estudo para portfólio.

---
