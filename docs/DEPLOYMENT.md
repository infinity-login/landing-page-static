# 🚀 Guia de Deployment - Hostgator

Este guia mostra como fazer o deploy do site Blackfy Login no Hostgator de forma automatizada.

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Comando `zip` disponível no sistema
- Acesso ao painel do Hostgator

## 🔧 Scripts Disponíveis

### 1. Preparar arquivos para Hostgator
```bash
npm run prepare-hostgator
```
- Cria a pasta `hostgator-ready` com a estrutura correta
- Cada página fica em sua própria pasta com `index.html`
- Copia todos os arquivos estáticos necessários

### 2. Compactar arquivos
```bash
npm run compress-hostgator
```
- Cria um arquivo `blackfy-site-hostgator.zip`
- Pronto para upload no Hostgator

### 3. Deploy completo (recomendado)
```bash
npm run deploy-compressed
```
- Executa build + preparação + compactação em uma única linha
- Gera o arquivo .zip final automaticamente

## 📁 Estrutura Gerada

```
hostgator-ready/
├── index.html                    # Página inicial
├── pricing/
│   └── index.html               # Página de preços
├── privacy-policy/
│   └── index.html               # Política de privacidade
├── cookies-policy/
│   └── index.html               # Política de cookies
├── terms-of-service/
│   └── index.html               # Termos de serviço
├── thank-you/
│   └── index.html               # Página de agradecimento
├── test/
│   └── index.html               # Página de teste
├── images/                      # Imagens e favicons
├── _next/                       # Arquivos do Next.js
├── favicon.ico                  # Favicon na raiz
└── .htaccess                    # Configurações do Apache
```

## 🌐 URLs Finais

Após o deploy, as URLs ficarão:
- **Homepage**: `seudominio.com/`
- **Pricing**: `seudominio.com/pricing/`
- **Privacy Policy**: `seudominio.com/privacy-policy/`
- **Cookies Policy**: `seudominio.com/cookies-policy/`
- **Terms of Service**: `seudominio.com/terms-of-service/`
- **Thank You**: `seudominio.com/thank-you/`
- **Test**: `seudominio.com/test/`

## 📤 Deploy no Hostgator

### Opção 1: Deploy Automatizado (Recomendado)

1. **Execute o comando completo:**
   ```bash
   npm run deploy-compressed
   ```

2. **Faça upload do arquivo gerado:**
   - Arquivo: `blackfy-site-hostgator.zip`
   - Localização: Raiz do seu domínio (`public_html`)

3. **Extraia o arquivo:**
   - Use o gerenciador de arquivos do Hostgator
   - Ou via SSH: `unzip blackfy-site-hostgator.zip`

4. **Pronto!** Seu site estará funcionando automaticamente.

### Opção 2: Deploy Manual

1. **Prepare os arquivos:**
   ```bash
   npm run prepare-hostgator
   ```

2. **Compacte manualmente:**
   - Compacte a pasta `hostgator-ready`
   - Faça upload do arquivo .zip

3. **Extraia na raiz do domínio**

## ✅ Verificações Pós-Deploy

1. **Teste todas as páginas:**
   - Homepage carrega corretamente
   - Navegação entre páginas funciona
   - Favicons aparecem
   - Google Tag Manager está funcionando

2. **Verifique no Google Tag Manager:**
   - Acesse o painel do GTM
   - Use o "Preview Mode" para testar
   - Confirme que os eventos estão sendo capturados

3. **Teste responsividade:**
   - Mobile
   - Tablet
   - Desktop

## 🔧 Solução de Problemas

### Favicons não aparecem
- Verifique se o arquivo `.htaccess` foi enviado
- Confirme se os tipos MIME estão configurados

### Páginas não carregam
- Verifique se os arquivos `index.html` estão nas pastas corretas
- Confirme se o `.htaccess` está na raiz

### Google Tag Manager não funciona
- Verifique se o script está no `<head>`
- Confirme se o noscript está no `<body>`
- Teste no modo de visualização do GTM

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs do servidor
2. Teste localmente primeiro
3. Confirme se todos os arquivos foram enviados

---

**🎉 Parabéns! Seu site está pronto para produção!** 