# Robots.txt - Blackfy Marketplace

## 📍 Localização
- **Arquivo**: `/public/robots.txt`
- **URL**: `https://login.blackfy.tech/robots.txt`

## 🎯 Configurações Implementadas

### ✅ Páginas Públicas Permitidas
```
Allow: /produto/          # Páginas de produtos
Allow: /categoria/        # Páginas de categorias
Allow: /leilao/           # Páginas de leilões
Allow: /perfil/           # Perfis públicos de usuários
Allow: /busca             # Página de busca
Allow: /sobre             # Página sobre a empresa
Allow: /contato           # Página de contato
```

### 🚫 Páginas Privadas Bloqueadas
```
Disallow: /dashboard/     # Painel do usuário
Disallow: /admin/         # Área administrativa
Disallow: /api/           # APIs internas
Disallow: /_next/         # Arquivos do Next.js
Disallow: /login          # Página de login
Disallow: /cadastro       # Página de cadastro
Disallow: /termos         # Termos de uso
Disallow: /privacidade    # Política de privacidade
Disallow: /perfil/*/editar        # Edição de perfil
Disallow: /perfil/*/configuracoes # Configurações de perfil
Disallow: /perfil/*/vendas        # Vendas do usuário
Disallow: /perfil/*/compras       # Compras do usuário
Disallow: /perfil/*/favoritos     # Favoritos do usuário
Disallow: /checkout/      # Processo de checkout
Disallow: /pagamento/     # Páginas de pagamento
Disallow: /minha-conta/   # Área da conta
Disallow: /configuracoes/ # Configurações gerais
```

### 📁 Arquivos e Diretórios Específicos
```
Disallow: /favicon.ico    # Favicon
Disallow: /manifest.json  # Manifest PWA
Disallow: /sw.js          # Service Worker
Disallow: /workbox-*.js   # Workbox files
Disallow: /_vercel/       # Arquivos Vercel
Disallow: /vercel.json    # Configuração Vercel
```

## 🤖 Configurações por Bot

### Bots Principais (Permitidos)
- **Googlebot**: Crawl-delay: 1s
- **Bingbot**: Crawl-delay: 2s
- **Facebook External Hit**: Crawl-delay: 1s
- **Twitterbot**: Crawl-delay: 1s

### Bots Bloqueados (Maliciosos)
- **AhrefsBot**: Bloqueado completamente
- **MJ12bot**: Bloqueado completamente
- **DotBot**: Bloqueado completamente
- **SemrushBot**: Bloqueado completamente

## 🗺️ Sitemap
```
Sitemap: https://blackfy.tech/sitemap.xml
```

## ⚡ Performance
- **Crawl-delay padrão**: 1 segundo
- **Crawl-delay Bing**: 2 segundos
- **Crawl-delay outros bots**: 1 segundo

## 🔍 Benefícios

### Para SEO
- ✅ **Indexação otimizada** de páginas importantes
- ✅ **Proteção** de páginas privadas
- ✅ **Referência** ao sitemap
- ✅ **Controle** de crawl rate

### Para Segurança
- ✅ **Bloqueio** de bots maliciosos
- ✅ **Proteção** de APIs internas
- ✅ **Ocultação** de arquivos sensíveis

### Para Performance
- ✅ **Controle** de crawl delay
- ✅ **Redução** de carga no servidor
- ✅ **Otimização** de recursos

## 📝 Manutenção

### Quando Atualizar
- Adição de novas páginas privadas
- Mudança na estrutura de URLs
- Novos bots maliciosos identificados
- Alteração no sitemap

### Como Atualizar
1. Editar `/public/robots.txt`
2. Testar com Google Search Console
3. Verificar logs de acesso
4. Monitorar indexação

## 🧪 Teste

### Verificar Funcionamento
```bash
# Teste local
curl http://localhost:3000/robots.txt

# Teste produção
curl https://blackfy.tech/robots.txt
```

### Validar com Ferramentas
- **Google Search Console**: Robots.txt Tester
- **Bing Webmaster Tools**: Robots.txt Tester
- **Online Validators**: robots.txt validators

## 📊 Monitoramento

### Métricas Importantes
- Páginas indexadas vs. permitidas
- Crawl rate dos bots
- Erros de acesso ao robots.txt
- Tentativas de acesso a páginas bloqueadas

### Alertas Recomendados
- Mudanças no robots.txt
- Aumento de crawl rate
- Tentativas de acesso a páginas privadas
- Erros 404 em páginas permitidas
