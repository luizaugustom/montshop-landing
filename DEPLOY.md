# 🚀 Guia de Deploy - MontShop Landing Page

Este documento descreve como fazer o deploy da landing page do MontShop em produção.

## 📋 Pré-requisitos

- [ ] Node.js 18+ instalado
- [ ] Conta no provedor de hospedagem (Vercel, Netlify, ou servidor próprio)
- [ ] Google Analytics ID (opcional)
- [ ] Google Ads ID (opcional)
- [ ] Domínio configurado (ex: montshop.com.br)

## 🔧 Configuração Inicial

### 1. Variáveis de Ambiente

Antes do deploy, configure as variáveis de ambiente:

```bash
# Copie o arquivo de exemplo
cp .env.example .env.local

# Edite com seus valores reais
nano .env.local
```

Configure as seguintes variáveis:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Ads
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX

# URL do Site
NEXT_PUBLIC_SITE_URL=https://montshop.com.br

# Email de Contato
NEXT_PUBLIC_CONTACT_EMAIL=montsoftwares@gmail.com

# Verificação Google Search Console
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=seu-codigo-aqui
```

### 2. Configurar Google Analytics

1. Acesse [Google Analytics](https://analytics.google.com/)
2. Crie uma propriedade para seu site
3. Copie o ID (formato: G-XXXXXXXXXX)
4. Cole no arquivo `.env.local`

### 3. Configurar Google Ads

1. Acesse [Google Ads](https://ads.google.com/)
2. Configure uma campanha
3. Vá em Ferramentas > Conversões
4. Crie uma conversão "Iniciar teste grátis"
5. Copie o ID de conversão
6. Adicione o pixel de conversão no código

### 4. Verificação Google Search Console

1. Acesse [Google Search Console](https://search.google.com/search-console)
2. Adicione sua propriedade
3. Escolha "Verificação por meta tag HTML"
4. Copie o código de verificação
5. Adicione no `.env.local`

## 🌐 Deploy na Vercel (Recomendado)

### Vantagens:
- Deploy automático
- HTTPS grátis
- CDN global
- Preview de PRs
- Zero configuração

### Passo a Passo:

1. **Criar conta na Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com GitHub

2. **Importar Projeto**
   ```bash
   # No terminal, instale o Vercel CLI
   npm install -g vercel
   
   # Faça login
   vercel login
   
   # Deploy
   cd montshop-landing
   vercel
   ```

3. **Configurar Domínio**
   - No dashboard da Vercel
   - Settings > Domains
   - Adicione seu domínio
   - Configure os DNS conforme instruções

4. **Adicionar Variáveis de Ambiente**
   - Settings > Environment Variables
   - Adicione todas as variáveis do `.env.local`

5. **Deploy para Produção**
   ```bash
   vercel --prod
   ```

## 🔷 Deploy na Netlify

### Passo a Passo:

1. **Criar conta na Netlify**
   - Acesse [netlify.com](https://netlify.com)

2. **Deploy via Git**
   - New site from Git
   - Conecte seu repositório
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Ou via CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

## 🖥️ Deploy em Servidor Próprio (VPS)

### Requisitos:
- Ubuntu 20.04+ ou similar
- Node.js 18+
- Nginx
- PM2 (gerenciador de processos)

### 1. Preparar Servidor

```bash
# Atualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Instalar PM2
sudo npm install -g pm2

# Instalar Nginx
sudo apt install -y nginx
```

### 2. Upload do Código

```bash
# Via Git (recomendado)
cd /var/www
sudo git clone https://github.com/seu-usuario/montshop-landing.git
cd montshop-landing

# Ou via SCP/FTP
# Faça upload da pasta para /var/www/montshop-landing
```

### 3. Instalar Dependências e Build

```bash
cd /var/www/montshop-landing

# Instalar dependências
npm install

# Criar arquivo .env.local com suas variáveis

# Build
npm run build
```

### 4. Configurar PM2

```bash
# Criar arquivo ecosystem.config.js
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'montshop-landing',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/montshop-landing',
    instances: 2,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF

# Iniciar aplicação
pm2 start ecosystem.config.js

# Salvar configuração
pm2 save

# Configurar para iniciar no boot
pm2 startup
```

### 5. Configurar Nginx

```bash
# Criar configuração do site
sudo nano /etc/nginx/sites-available/montshop
```

Cole o seguinte conteúdo:

```nginx
server {
    listen 80;
    server_name montshop.com.br www.montshop.com.br;

    # Redirecionar para HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name montshop.com.br www.montshop.com.br;

    # Certificado SSL (configurar com Certbot)
    ssl_certificate /etc/letsencrypt/live/montshop.com.br/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/montshop.com.br/privkey.pem;

    # Configurações SSL
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Cache para assets estáticos
    location /_next/static {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
```

### 6. Habilitar Site e SSL

```bash
# Habilitar site
sudo ln -s /etc/nginx/sites-available/montshop /etc/nginx/sites-enabled/

# Testar configuração
sudo nginx -t

# Instalar Certbot para SSL
sudo apt install -y certbot python3-certbot-nginx

# Obter certificado SSL
sudo certbot --nginx -d montshop.com.br -d www.montshop.com.br

# Reiniciar Nginx
sudo systemctl restart nginx
```

## 📊 Monitoramento

### Verificar Status PM2
```bash
pm2 status
pm2 logs montshop-landing
pm2 monit
```

### Logs Nginx
```bash
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

## 🔄 Atualização

### Vercel/Netlify
```bash
# Apenas faça push para o repositório
git push origin main
```

### Servidor Próprio
```bash
cd /var/www/montshop-landing
git pull
npm install
npm run build
pm2 restart montshop-landing
```

## ✅ Checklist Pós-Deploy

- [ ] Site acessível via domínio
- [ ] HTTPS funcionando
- [ ] Google Analytics rastreando
- [ ] Google Ads pixel instalado
- [ ] Formulários funcionando
- [ ] Links internos funcionando
- [ ] Responsivo em mobile
- [ ] Velocidade < 3s (teste no PageSpeed Insights)
- [ ] Sitemap acessível (/sitemap.xml)
- [ ] Robots.txt acessível (/robots.txt)
- [ ] Verificado no Google Search Console
- [ ] Testado em múltiplos navegadores

## 🆘 Troubleshooting

### Site não carrega
```bash
# Verificar se o serviço está rodando
pm2 status

# Verificar logs
pm2 logs montshop-landing

# Reiniciar
pm2 restart montshop-landing
```

### Erro de Build
```bash
# Limpar cache e reinstalar
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### SSL não funciona
```bash
# Renovar certificado
sudo certbot renew

# Verificar configuração Nginx
sudo nginx -t
```

## 📞 Suporte

Para dúvidas:
- Email: montsoftwares@gmail.com
- Documentação: README.md

