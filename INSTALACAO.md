# 📦 Guia de Instalação - MontShop Landing Page

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js 18 ou superior** ([Download](https://nodejs.org/))
- **npm** (vem com Node.js) ou **yarn**
- **Git** ([Download](https://git-scm.com/))

## 🚀 Instalação

### 1. Clone ou Extraia o Projeto

Se você tem o código em um repositório Git:

```bash
git clone <url-do-repositorio>
cd montshop-landing
```

Ou se você baixou o arquivo ZIP, extraia e navegue até a pasta.

### 2. Instale as Dependências

```bash
npm install
```

Este comando irá instalar todas as dependências necessárias listadas no `package.json`.

⏱️ **Tempo estimado:** 2-3 minutos

### 3. Execute em Modo de Desenvolvimento

```bash
npm run dev
```

O site estará disponível em: **http://localhost:3000**

Abra seu navegador e acesse este endereço para ver a landing page.

## 🛠️ Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria a build de produção |
| `npm start` | Inicia o servidor de produção (após build) |
| `npm run lint` | Verifica problemas no código |

## 📋 Estrutura do Projeto

```
montshop-landing/
├── public/              # Arquivos estáticos (imagens, robots.txt, etc)
├── src/
│   ├── app/            # Páginas e rotas
│   │   ├── layout.tsx  # Layout principal + SEO
│   │   ├── page.tsx    # Página inicial
│   │   └── globals.css # Estilos globais
│   └── components/     # Componentes React
├── .env.example        # Exemplo de variáveis de ambiente
├── next.config.js      # Configuração do Next.js
├── tailwind.config.ts  # Configuração do Tailwind CSS
├── package.json        # Dependências do projeto
└── README.md          # Documentação principal
```

## ⚙️ Configuração (Opcional)

### Variáveis de Ambiente

Para configurar Google Analytics, Google Ads e outras integrações:

1. Copie o arquivo de exemplo:
   ```bash
   cp .env.example .env.local
   ```

2. Edite `.env.local` com seus valores reais:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
   NEXT_PUBLIC_SITE_URL=https://montshop.com.br
   ```

## 🌐 Build para Produção

Quando estiver pronto para publicar:

```bash
# 1. Criar a build de produção
npm run build

# 2. Testar a build localmente
npm start
```

A build otimizada estará na pasta `.next/`

## 🐛 Solução de Problemas

### Erro: "Module not found"
```bash
# Limpe e reinstale as dependências
rm -rf node_modules package-lock.json
npm install
```

### Erro: "Port 3000 already in use"
```bash
# Opção 1: Mate o processo na porta 3000
# Windows (PowerShell)
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process

# Linux/Mac
lsof -ti:3000 | xargs kill

# Opção 2: Use outra porta
PORT=3001 npm run dev
```

### Erros de Linting
```bash
npm run lint
```

Se houver erros de formatação, eles serão listados. Corrija-os antes de fazer o build.

## 📱 Testando Responsividade

Para testar em diferentes dispositivos:

1. Abra o site em desenvolvimento: http://localhost:3000
2. Pressione `F12` para abrir DevTools
3. Clique no ícone de dispositivo móvel (ou `Ctrl+Shift+M`)
4. Teste em diferentes resoluções

## 🎨 Personalizando

### Cores
Edite `tailwind.config.ts` para mudar as cores do tema:

```typescript
colors: {
  primary: {
    500: '#0ea5e9', // Cor principal
    600: '#0284c7',
    // ...
  }
}
```

### Conteúdo
Edite os componentes em `src/components/` para mudar:
- Textos
- Imagens
- Links
- Funcionalidades

### Planos e Preços
Edite `src/components/Pricing.tsx` para alterar os planos.

## 📞 Precisa de Ajuda?

- 📖 Leia o [README.md](README.md) completo
- 🚀 Veja o [DEPLOY.md](DEPLOY.md) para publicar o site
- 💌 Email: contato@montshop.com.br

## ✅ Próximos Passos

Após a instalação, você pode:

1. ✅ Personalizar o conteúdo
2. ✅ Adicionar suas imagens
3. ✅ Configurar Google Analytics
4. ✅ Fazer deploy em produção
5. ✅ Configurar domínio próprio

**Pronto! Sua landing page está instalada e funcionando! 🎉**

