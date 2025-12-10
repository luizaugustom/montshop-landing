# MontShop - Landing Page

Landing page profissional do MontShop - Sistema completo para gestão de lojas.

## 🚀 Tecnologias

- **Next.js 14** - Framework React para produção
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações suaves
- **Lucide React** - Ícones modernos

## 🎨 Características

- ✅ Design moderno e responsivo
- ✅ Otimizado para SEO (Google Search)
- ✅ Preparado para Google Ads
- ✅ Performance otimizada
- ✅ Animações suaves
- ✅ Estrutura de dados Schema.org
- ✅ Meta tags completas (Open Graph, Twitter)
- ✅ Acessibilidade (WCAG)

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar em produção
npm start
```

## 🌐 Deploy

### Vercel (Recomendado)

1. Fazer push do código para GitHub
2. Conectar repositório na Vercel
3. Deploy automático

### Outros Servidores

```bash
# Build
npm run build

# O output estará em .next/
# Configure seu servidor para servir essa pasta
```

## ⚙️ Configuração

### Variáveis de Ambiente

Copie `.env.example` para `.env.local` e configure:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://montshop.com.br
```

### Google Analytics / Ads

1. Crie uma conta no Google Analytics
2. Adicione o ID no `.env.local`
3. Configure o Google Ads seguindo a documentação do Google

### SEO

Os meta tags e structured data já estão configurados em:
- `src/app/layout.tsx` - Meta tags globais
- `src/app/page.tsx` - Conteúdo da página

## 📊 Palavras-chave SEO

A landing page está otimizada para:
- sistema para lojas
- sistema de caixa
- PDV
- ponto de venda
- gestão de estoque
- controle de estoque
- emissão de nota fiscal
- NFC-e
- sistema comercial
- ERP para lojas
- e muito mais...

## 🎯 Conversão

A landing page implementa diversas técnicas de conversão:
- CTAs estrategicamente posicionados
- Prova social (depoimentos)
- Urgência (teste grátis limitado)
- Clareza de benefícios
- Design de alta qualidade

## 📱 Responsividade

Totalmente responsivo para:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🔧 Estrutura do Projeto

```
montshop-landing/
├── public/
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout principal + SEO
│   │   ├── page.tsx        # Página principal
│   │   └── globals.css     # Estilos globais
│   └── components/
│       ├── Navbar.tsx      # Menu de navegação
│       ├── Hero.tsx        # Seção hero
│       ├── Benefits.tsx    # Benefícios
│       ├── Features.tsx    # Recursos
│       ├── Pricing.tsx     # Planos e preços
│       ├── Testimonials.tsx # Depoimentos
│       ├── FAQ.tsx         # Perguntas frequentes
│       ├── CTA.tsx         # Call to action
│       └── Footer.tsx      # Rodapé
├── .env.example            # Exemplo de variáveis
├── next.config.js          # Configuração Next.js
├── tailwind.config.ts      # Configuração Tailwind
└── package.json            # Dependências
```

## 📈 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- SEO Score: 100

## 🤝 Suporte

Para dúvidas ou suporte:
- Email: montsoftwares@gmail.com
- Website: https://montshop.com.br

## 📄 Licença

© 2024 MontShop. Todos os direitos reservados.

