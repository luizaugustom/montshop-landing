# 🎯 Guia Google Ads - MontShop Landing Page

Este guia mostra como configurar e otimizar campanhas do Google Ads para a landing page do MontShop.

## 📋 Pré-requisitos

- [ ] Landing page online (deploy completo)
- [ ] Google Ads account criada
- [ ] Google Analytics configurado
- [ ] Pixel de conversão instalado

## 🎨 Estrutura da Campanha Recomendada

### Campanha 1: Rede de Pesquisa (Search)

**Objetivo:** Capturar intenção de compra ativa

**Grupos de Anúncios:**

1. **PDV e Sistema de Caixa**
   - sistema de caixa
   - PDV para loja
   - ponto de venda
   - sistema pdv

2. **Gestão de Estoque**
   - controle de estoque
   - gestão de estoque
   - sistema de estoque
   - software estoque

3. **Nota Fiscal Eletrônica**
   - emissão de nota fiscal
   - NFC-e
   - emitir nota fiscal eletrônica
   - sistema nfc-e

4. **Genérico Gestão de Lojas**
   - sistema para lojas
   - software para loja
   - gestão de loja
   - ERP para lojas

### Campanha 2: Rede Display

**Objetivo:** Branding e remarketing

**Segmentações:**
- Proprietários de negócios
- Varejo
- Gestores de lojas
- Interessados em software empresarial

## 💰 Orçamento Sugerido

### Inicial (Teste)
- **Diário:** R$ 50-100
- **Mensal:** R$ 1.500-3.000
- **Duração:** 30 dias
- **Objetivo:** Coletar dados e otimizar

### Escalado
- **Diário:** R$ 200-500
- **Mensal:** R$ 6.000-15.000
- **Foco:** Conversões + Branding

## 📝 Modelos de Anúncios

### Anúncio 1: Foco em Teste Grátis

```
Título 1: Sistema PDV Completo | MontShop
Título 2: 7 Dias Grátis - Sem Cartão
Título 3: + de 5.000 Lojas Confiam
Descrição 1: Sistema completo de gestão para lojas com PDV, estoque e NFC-e. Interface intuitiva e suporte 24/7.
Descrição 2: Experimente grátis por 7 dias. Sem compromisso. Cancele quando quiser. Comece agora!
```

### Anúncio 2: Foco em Recursos

```
Título 1: Gestão Completa para Lojas
Título 2: PDV + Estoque + NFC-e Automática
Título 3: A partir de R$ 49,90/mês
Descrição 1: Controle total de vendas, estoque e notas fiscais em uma única plataforma. Simples e eficiente.
Descrição 2: Ideal para pequenas e médias lojas. Teste grátis. Planos flexíveis. Suporte em português.
```

### Anúncio 3: Foco em Benefícios

```
Título 1: Economize Tempo na Gestão
Título 2: Sistema de Caixa Inteligente
Título 3: Aumente suas Vendas em 35%
Descrição 1: Descubra como mais de 5.000 lojistas economizam tempo e aumentam vendas com MontShop.
Descrição 2: PDV rápido, controle de estoque automático e relatórios detalhados. Teste 7 dias grátis!
```

## 🎯 Palavras-chave e Estratégia de Lance

### Palavras-chave de Alta Intenção (CPC mais alto)
```
[sistema de caixa para loja]          - Correspondência Exata
[PDV para pequenas lojas]             - Correspondência Exata
[software gestão de loja]             - Correspondência Exata
"melhor sistema PDV"                  - Correspondência de Frase
"sistema para loja de roupas"         - Correspondência de Frase
+sistema +loja +preço                 - Modificador de Correspondência Ampla
```

**Lance Sugerido:** R$ 2,00 - R$ 5,00

### Palavras-chave de Pesquisa (CPC médio)
```
como escolher sistema de caixa
tipos de sistema pdv
sistema de gestão de estoque
emitir nota fiscal eletrônica
```

**Lance Sugerido:** R$ 1,00 - R$ 3,00

### Palavras-chave Negativas (Excluir)
```
-gratis
-gratuito
-pirata
-crackeado
-download gratis
-open source
-usado
-segunda mao
```

## 📊 Configuração de Conversões

### Conversão 1: Início de Teste Grátis (Principal)

**Evento:** Clique no botão "Começar Grátis"

**Valor:** R$ 100-200 (valor estimado de um cliente)

**Código de Conversão:**
```javascript
gtag('event', 'conversion', {
  'send_to': 'AW-XXXXXXXXXX/xxxxx',
  'value': 150.0,
  'currency': 'BRL'
});
```

### Conversão 2: Clique em "Ver Planos"

**Evento:** Micro-conversão

**Valor:** R$ 20

### Conversão 3: Scroll para Preços

**Evento:** Engajamento

**Valor:** R$ 10

## 🎨 Criativos para Display/Remarketing

### Formatos Necessários

1. **Banner Horizontal**
   - 728x90 (Leaderboard)
   - 970x90 (Large Leaderboard)

2. **Banner Vertical**
   - 160x600 (Wide Skyscraper)
   - 300x600 (Half Page)

3. **Banner Quadrado**
   - 250x250 (Square)
   - 300x250 (Medium Rectangle)

4. **Banner Mobile**
   - 320x50 (Mobile Banner)
   - 320x100 (Large Mobile Banner)

### Mensagens para Banners

1. "Gerencie sua loja de qualquer lugar"
2. "7 dias grátis. Sem cartão de crédito"
3. "+ 5.000 lojas confiam no MontShop"
4. "PDV + Estoque + NFC-e por R$ 49,90"

## 🔄 Estratégia de Remarketing

### Lista 1: Visitantes da Home (Todos)
- **Duração:** 30 dias
- **Anúncio:** Genérico sobre a plataforma
- **Lance:** R$ 0,50 - R$ 1,50

### Lista 2: Visitantes de Preços
- **Duração:** 60 dias
- **Anúncio:** Foco em planos e teste grátis
- **Lance:** R$ 1,00 - R$ 3,00
- **Prioridade:** Alta (usuário interessado)

### Lista 3: Clicou mas não converteu
- **Duração:** 90 dias
- **Anúncio:** Depoimentos + Urgência
- **Lance:** R$ 1,50 - R$ 4,00
- **Prioridade:** Muito Alta

### Lista 4: Conversão (Excluir)
- **Ação:** Excluir de todas as campanhas
- **Motivo:** Já é cliente

## 📈 Métricas para Acompanhar

### Essenciais
- **CTR (Click-Through Rate):** > 3% é bom
- **CPC (Cost Per Click):** R$ 2-5 típico
- **Taxa de Conversão:** > 5% é excelente
- **CPA (Cost Per Acquisition):** < R$ 200 é ótimo
- **ROAS (Return on Ad Spend):** > 300% é excelente

### Por Campanha
| Métrica | Pesquisa | Display | Remarketing |
|---------|----------|---------|-------------|
| CTR     | 3-8%     | 0.5-2%  | 2-5%        |
| CPC     | R$2-5    | R$0.5-2 | R$1-3       |
| Conv.   | 5-10%    | 1-3%    | 3-8%        |

## 🎯 Extensões de Anúncio

### Sitelinks (Links Adicionais)
```
1. Ver Recursos → montshop.com.br/#recursos
2. Ver Planos → montshop.com.br/#planos
3. Depoimentos → montshop.com.br/#depoimentos
4. Teste Grátis → montshop.com.br/#planos
```

### Callouts (Frases de Destaque)
```
- 7 Dias Grátis
- Sem Cartão de Crédito
- Suporte 24/7
- + 5.000 Lojas
- Cancele Quando Quiser
- NFC-e Ilimitada
- Dados 100% Seguros
```

### Snippets Estruturados
```
Categoria: Recursos
- PDV completo
- Controle de estoque
- Emissão de NFC-e
- Relatórios avançados
- App mobile
```

### Extensão de Preço
```
Plano Basic: A partir de R$ 49,90
Plano Pro: A partir de R$ 99,90
Plano Plus: A partir de R$ 199,90
```

## 📱 Campanhas Mobile

### Anúncios Específicos para Mobile

```
Título 1: App Gestão de Loja
Título 2: PDV no seu Celular
Título 3: Android e iOS
Descrição: Gerencie vendas, estoque e NFC-e direto do celular. Grátis 7 dias.
```

### Ajustes de Lance Mobile
- **Smartphone:** +20% (maior conversão)
- **Tablet:** -10% (menor intenção)

## 🧪 Testes A/B Sugeridos

### Teste 1: Mensagem Principal
- **Variante A:** Foco em "Teste Grátis"
- **Variante B:** Foco em "Aumento de Vendas"
- **Duração:** 14 dias

### Teste 2: Preço no Anúncio
- **Variante A:** Mostra preço (R$ 49,90)
- **Variante B:** Não mostra preço
- **Duração:** 14 dias

### Teste 3: Landing Page
- **Variante A:** Página completa (atual)
- **Variante B:** Página simplificada (criar versão)
- **Duração:** 30 dias

## 💡 Dicas de Otimização

### Primeira Semana
1. Monitorar impressões e CTR
2. Pausar anúncios com CTR < 2%
3. Ajustar lances para palavras de alta performance
4. Adicionar palavras negativas diariamente

### Segundo Mês
1. Focar em palavras-chave com melhor CPA
2. Criar anúncios específicos para top performers
3. Testar novos grupos de anúncios
4. Implementar remarketing

### Terceiro Mês em Diante
1. Escalar orçamento em campanhas lucrativas
2. Expandir palavras-chave long-tail
3. Testar campanhas de vídeo (YouTube)
4. Otimizar para maximizar conversões

## 📞 Integração com CRM (Futuro)

Quando tiver mais volume:
```javascript
// Enviar lead para CRM
gtag('event', 'generate_lead', {
  'currency': 'BRL',
  'value': 150,
  'lead_source': 'google_ads'
});
```

## 🚨 Checklist Pré-Lançamento

Antes de ativar as campanhas:

- [ ] Pixel de conversão instalado e testado
- [ ] Google Analytics vinculado ao Ads
- [ ] Landing page carregando em < 3s
- [ ] Formulários testados e funcionando
- [ ] Todas as páginas com HTTPS
- [ ] Anúncios criados (mínimo 3 por grupo)
- [ ] Palavras negativas adicionadas
- [ ] Extensões configuradas
- [ ] Orçamento definido
- [ ] Alertas configurados (gasto diário)
- [ ] Tracking de telefone (se aplicável)

## 📊 Relatórios Semanais

Monitore estas métricas toda semana:

```
1. Gasto total
2. Impressões e cliques
3. CTR médio
4. CPC médio
5. Conversões
6. CPA
7. Taxa de conversão
8. ROAS
9. Posição média
10. Quality Score
```

## 🎓 Recursos Adicionais

- [Google Ads Help](https://support.google.com/google-ads)
- [Google Skillshop](https://skillshop.withgoogle.com/)
- [Think with Google](https://www.thinkwithgoogle.com/)

## 💼 Quando Considerar uma Agência

Considere contratar ajuda profissional se:
- Orçamento > R$ 10.000/mês
- Não tem tempo para otimizar semanalmente
- CPA não está melhorando após 90 dias
- Quer escalar rapidamente

## 📞 Suporte

Dúvidas sobre configuração:
- Email: montsoftwares@gmail.com

---

**Importante:** Este é um guia inicial. O sucesso no Google Ads requer teste constante e otimização baseada em dados reais do seu negócio.

