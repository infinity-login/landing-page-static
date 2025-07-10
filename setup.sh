#!/bin/bash

# Blackfy Login Site - Setup Script
echo "🚀 Iniciando setup do Blackfy Login Site..."

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Por favor, instale o Node.js 18+ primeiro."
    exit 1
fi

# Verificar versão do Node.js
NODE_VERSION=$(node -v | cut -d'.' -f1 | cut -d'v' -f2)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js versão 18+ necessária. Versão atual: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detectado"

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Erro ao instalar dependências. Tentando novamente..."
    npm install --force
    if [ $? -ne 0 ]; then
        echo "❌ Falha ao instalar dependências. Verifique sua conexão e tente novamente."
        exit 1
    fi
fi

echo "✅ Dependências instaladas com sucesso"

# Criar arquivo .env.local se não existir
if [ ! -f ".env.local" ]; then
    echo "📝 Criando arquivo .env.local..."
    cat > .env.local << EOL
# Configurações do Blackfy Login Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_YOUTUBE_VIDEO_ID=JDfSNwq2jZQ
NEXT_PUBLIC_ANALYTICS_ID=

# Configurações de desenvolvimento
NODE_ENV=development
NEXT_PUBLIC_APP_ENV=development
EOL
    echo "✅ Arquivo .env.local criado"
fi

# Executar lint para verificar se está tudo ok
echo "🔍 Verificando código..."
npm run lint --silent

echo ""
echo "🎉 Setup concluído com sucesso!"
echo ""
echo "📋 Próximos passos:"
echo "   1. Execute 'npm run dev' para iniciar o servidor de desenvolvimento"
echo "   2. Acesse http://localhost:3000 no seu navegador"
echo "   3. Para build de produção: 'npm run build'"
echo ""
echo "🌐 Site do Blackfy Login pronto para uso!"
echo "   - VSL incorporada do YouTube"
echo "   - Design responsivo e moderno"
echo "   - Identidade visual do Blackfy.react"
echo "   - Focado em conversão"
echo "" 