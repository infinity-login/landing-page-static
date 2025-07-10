const https = require('https');

// Configurações do Cloudflare
const CLOUDFLARE_ZONE_ID = 'YOUR_ZONE_ID'; // Substitua pelo seu Zone ID
const CLOUDFLARE_API_TOKEN = 'YOUR_API_TOKEN'; // Substitua pelo seu API Token
const DOMAIN = 'login.blackfy.tech';

// Função para fazer requisição HTTPS
function makeRequest(options, data = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        try {
          const response = JSON.parse(body);
          resolve({ status: res.statusCode, data: response });
        } catch (error) {
          resolve({ status: res.statusCode, data: body });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    if (data) {
      req.write(JSON.stringify(data));
    }

    req.end();
  });
}

// Função para limpar cache do Cloudflare
async function clearCloudflareCache() {
  console.log('🗑️  Limpando cache do Cloudflare...');
  
  const options = {
    hostname: 'api.cloudflare.com',
    port: 443,
    path: `/client/v4/zones/${CLOUDFLARE_ZONE_ID}/purge_cache`,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${CLOUDFLARE_API_TOKEN}`,
      'Content-Type': 'application/json'
    }
  };

  const data = {
    files: [
      `https://${DOMAIN}/favicon.ico`,
      `https://${DOMAIN}/images/favicon.ico`,
      `https://${DOMAIN}/images/favicon.svg`,
      `https://${DOMAIN}/images/favicon-16x16.svg`,
      `https://${DOMAIN}/images/favicon-192x192.svg`
    ]
  };

  try {
    const response = await makeRequest(options, data);
    
    if (response.status === 200) {
      console.log('✅ Cache do Cloudflare limpo com sucesso!');
      console.log('📋 Arquivos limpos:');
      data.files.forEach(file => {
        console.log(`   - ${file}`);
      });
    } else {
      console.error('❌ Erro ao limpar cache:', response.data);
    }
  } catch (error) {
    console.error('❌ Erro na requisição:', error.message);
  }
}

// Função para testar favicons
async function testFavicons() {
  console.log('🔍 Testando favicons...');
  
  const faviconUrls = [
    `https://${DOMAIN}/favicon.ico`,
    `https://${DOMAIN}/images/favicon.ico`,
    `https://${DOMAIN}/images/favicon.svg`,
    `https://${DOMAIN}/images/favicon-16x16.svg`,
    `https://${DOMAIN}/images/favicon-192x192.svg`
  ];

  for (const url of faviconUrls) {
    try {
      const response = await makeRequest({
        hostname: DOMAIN,
        port: 443,
        path: new URL(url).pathname,
        method: 'HEAD'
      });
      
      if (response.status === 200) {
        console.log(`✅ ${url} - OK`);
      } else {
        console.log(`❌ ${url} - Status: ${response.status}`);
      }
    } catch (error) {
      console.log(`❌ ${url} - Erro: ${error.message}`);
    }
  }
}

// Função principal
async function main() {
  console.log('🚀 Iniciando limpeza de cache e teste de favicons...\n');
  
  // Teste inicial
  await testFavicons();
  
  console.log('\n' + '='.repeat(50) + '\n');
  
  // Limpar cache (se configurado)
  if (CLOUDFLARE_ZONE_ID !== 'YOUR_ZONE_ID' && CLOUDFLARE_API_TOKEN !== 'YOUR_API_TOKEN') {
    await clearCloudflareCache();
    
    console.log('\n⏳ Aguardando 10 segundos para propagação...');
    await new Promise(resolve => setTimeout(resolve, 10000));
    
    console.log('\n' + '='.repeat(50) + '\n');
    
    // Teste final
    await testFavicons();
  } else {
    console.log('⚠️  Cloudflare não configurado. Para limpar cache:');
    console.log('1. Obtenha seu Zone ID em: https://dash.cloudflare.com/');
    console.log('2. Crie um API Token com permissão "Cache Purge"');
    console.log('3. Atualize as variáveis no script');
  }
  
  console.log('\n📋 Próximos passos:');
  console.log('1. Faça hard refresh no navegador (Ctrl+F5)');
  console.log('2. Limpe o cache do navegador');
  console.log('3. Teste em modo incógnito');
  console.log('4. Verifique em diferentes dispositivos');
}

// Executar se chamado diretamente
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { clearCloudflareCache, testFavicons }; 