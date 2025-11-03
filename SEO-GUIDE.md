# 🔍 Guia de SEO - MontShop Landing Page

Este documento explica todas as otimizações de SEO implementadas na landing page e como configurá-las.

## ✅ O que já está implementado

### 1. Meta Tags Completas

**Localização:** `src/app/layout.tsx`

- ✅ Title otimizado com palavras-chave
- ✅ Description persuasiva (155 caracteres)
- ✅ Keywords relevantes
- ✅ Open Graph (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Canonical URL
- ✅ Robots meta tags

### 2. Structured Data (Schema.org)

**Tipos implementados:**
- ✅ `SoftwareApplication` - Descreve o software
- ✅ `Organization` - Dados da empresa
- ✅ `AggregateRating` - Avaliações
- ✅ `Offers` - Informações de preços

Isso ajuda o Google a entender melhor seu conteúdo e pode gerar rich snippets nos resultados de busca.

### 3. Performance

- ✅ Next.js 14 com otimizações automáticas
- ✅ Imagens otimizadas (quando usar next/image)
- ✅ CSS minificado
- ✅ JavaScript otimizado
- ✅ Lazy loading automático

### 4. Acessibilidade

- ✅ HTML semântico
- ✅ ARIA labels quando necessário
- ✅ Contraste adequado
- ✅ Navegação por teclado

### 5. URLs e Sitemap

- ✅ URLs limpas e descritivas
- ✅ Sitemap.xml configurado
- ✅ Robots.txt configurado

## 📊 Palavras-chave Alvo

### Principais (Primary Keywords)
1. **sistema para lojas** - Volume alto, competição média
2. **sistema de caixa** - Volume alto, competição média
3. **PDV sistema** - Volume médio, competição baixa
4. **software para loja** - Volume médio, competição média

### Secundárias (Secondary Keywords)
- gestão de estoque
- controle de estoque
- emissão de NFC-e
- sistema comercial
- ERP para lojas
- controle de vendas
- ponto de venda
- frente de caixa

### Long-tail (Cauda Longa)
- "sistema de caixa para loja de roupas"
- "software de gestão para pequenas lojas"
- "como emitir nota fiscal eletrônica"
- "melhor sistema PDV para varejo"

## 🎯 Otimizações por Seção

### Hero Section
- **H1:** Contém palavra-chave principal
- **Descrição:** Menciona benefícios + palavras-chave
- **CTA:** Claro e persuasivo

### Features Section
- **H2:** Inclui variação da palavra-chave
- **Conteúdo:** Descreve funcionalidades com termos relevantes
- **Alt text:** Quando adicionar imagens, use descrições ricas

### Pricing Section
- **Structured Data:** Preços marcados para Google
- **Comparação:** Facilita decisão do usuário
- **Trust signals:** Garantias e benefícios

## 🚀 Configuração Google Search Console

### 1. Verificar Propriedade

1. Acesse [Google Search Console](https://search.google.com/search-console)
2. Adicione sua propriedade (URL)
3. Escolha método de verificação:
   - **Meta tag HTML** (já implementado)
   - Ou arquivo HTML
   - Ou Google Analytics
4. Cole o código no `.env.local`:
   ```env
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=seu-codigo-aqui
   ```

### 2. Enviar Sitemap

1. No Search Console, vá em "Sitemaps"
2. Adicione: `https://montshop.com.br/sitemap.xml`
3. Clique em "Enviar"

### 3. Solicitar Indexação

Para indexação mais rápida:
1. No Search Console, use "Inspeção de URL"
2. Digite sua URL
3. Clique em "Solicitar indexação"

## 📈 Configuração Google Analytics

### 1. Criar Propriedade

1. Acesse [Google Analytics](https://analytics.google.com/)
2. Crie uma conta/propriedade
3. Copie o ID (formato: G-XXXXXXXXXX)

### 2. Adicionar ao Site

Edite `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Já está integrado em `src/app/layout.tsx`

### 3. Eventos Importantes

Configure estes eventos no GA4:
- ✅ Clique em "Começar Grátis"
- ✅ Visualização de planos
- ✅ Scroll para preços
- ✅ Clique em contato

## 🎯 Configuração Google Ads

### 1. Pixel de Conversão

1. Crie campanha no Google Ads
2. Configure evento de conversão: "Iniciar teste grátis"
3. Copie o ID: `AW-XXXXXXXXXX`
4. Adicione ao `.env.local`:
   ```env
   NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
   ```

### 2. Remarketing

O pixel já está configurado para rastrear visitantes e permitir remarketing.

### 3. Landing Page Quality Score

Para melhor Quality Score:
- ✅ Relevância: Keywords na página
- ✅ Velocidade: < 3s carregamento
- ✅ Mobile-friendly: 100% responsivo
- ✅ Experiência: Design limpo e navegação clara

## 📝 Boas Práticas de Conteúdo

### Títulos (H1, H2, H3)
```html
<!-- Bom -->
<h1>Sistema Completo para Gestão de Lojas | MontShop</h1>

<!-- Evitar -->
<h1>Bem-vindo</h1>
```

### Descrições
- Use verbos de ação
- Inclua benefícios específicos
- Mencione diferenciadores
- Máximo 155 caracteres

### Links Internos
- Use texto âncora descritivo
- Link para seções importantes
- Estrutura hierárquica clara

## 🔧 Ferramentas de Análise

### Testar SEO
1. **Google PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Meta: Score > 90

2. **Google Mobile-Friendly Test**
   - URL: https://search.google.com/test/mobile-friendly
   - Deve passar 100%

3. **Lighthouse** (Chrome DevTools)
   - Performance: > 90
   - SEO: 100
   - Accessibility: > 90
   - Best Practices: 100

4. **Structured Data Testing Tool**
   - URL: https://validator.schema.org/
   - Valide o JSON-LD

### Monitorar Ranking

Ferramentas gratuitas:
- Google Search Console
- Google Analytics
- Ubersuggest (básico)

Ferramentas pagas:
- SEMrush
- Ahrefs
- Moz

## 📱 SEO para Mobile

✅ **Já implementado:**
- Design responsivo (Tailwind CSS)
- Touch targets adequados (> 48px)
- Texto legível sem zoom
- Viewport configurado
- Sem pop-ups intrusivos

## 🌐 SEO Local (se aplicável)

Se seu negócio tem endereço físico:

```json
{
  "@type": "LocalBusiness",
  "name": "MontShop",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Exemplo, 123",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "01234-567"
  }
}
```

Adicione isso ao structured data em `layout.tsx`.

## ✍️ Dicas de Conteúdo para Blog (futuro)

Tópicos que podem rankear bem:
1. "Como escolher um sistema de PDV para sua loja"
2. "10 erros comuns na gestão de estoque"
3. "Guia completo: Como emitir NFC-e"
4. "Sistema de caixa: Vale a pena investir?"
5. "Controle financeiro para pequenos comércios"

## 📊 Métricas para Acompanhar

### Essenciais
- **Tráfego orgânico** (Google Analytics)
- **Posição nos rankings** (Google Search Console)
- **Taxa de conversão** (GA4 Events)
- **Taxa de rejeição** (< 60% é bom)
- **Tempo na página** (> 2min é bom)

### KPIs de Conversão
- Cliques em "Começar Grátis"
- Visualizações da página de preços
- Preenchimento de formulário de contato
- Downloads (se aplicável)

## 🔄 Manutenção SEO

### Mensal
- [ ] Verificar posições no Search Console
- [ ] Analisar páginas mais visitadas (GA)
- [ ] Corrigir erros de indexação
- [ ] Atualizar conteúdo se necessário

### Trimestral
- [ ] Revisar e atualizar keywords
- [ ] Analisar concorrentes
- [ ] Atualizar structured data
- [ ] Testar velocidade (PageSpeed)

### Anual
- [ ] Auditoria completa de SEO
- [ ] Revisar estratégia de conteúdo
- [ ] Atualizar dados da empresa
- [ ] Renovar certificado SSL

## 🚨 Checklist Pré-Lançamento

Antes de colocar o site no ar:

- [ ] Todas as meta tags configuradas
- [ ] Google Analytics ativo
- [ ] Google Search Console verificado
- [ ] Sitemap enviado
- [ ] Robots.txt correto
- [ ] HTTPS configurado (SSL)
- [ ] URLs amigáveis
- [ ] Structured data validado
- [ ] Performance > 90 no Lighthouse
- [ ] Mobile-friendly test passou
- [ ] Todas as imagens com alt text
- [ ] Sem links quebrados
- [ ] Formulários testados

## 📞 Suporte

Dúvidas sobre SEO?
- Email: contato@montshop.com.br
- Consulte: [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)

