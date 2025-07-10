const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Função para verificar se o zip está disponível
function checkZipAvailable() {
  try {
    execSync('zip --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

// Função para compactar usando zip
function compressWithZip(sourceDir, outputFile) {
  try {
    execSync(`cd "${sourceDir}" && zip -r "../${outputFile}" .`, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error('❌ Erro ao compactar com zip:', error.message);
    return false;
  }
}

// Função principal
function compressForHostgator() {
  const hostgatorDir = path.join(__dirname, '..', 'hostgator-ready');
  const outputFile = 'blackfy-site-hostgator.zip';
  
  console.log('🗜️  Compactando arquivos para Hostgator...');
  
  // Verificar se a pasta existe
  if (!fs.existsSync(hostgatorDir)) {
    console.error('❌ Pasta "hostgator-ready" não encontrada!');
    console.log('💡 Execute primeiro: npm run prepare-hostgator');
    process.exit(1);
  }
  
  // Verificar se zip está disponível
  if (!checkZipAvailable()) {
    console.error('❌ Comando "zip" não encontrado!');
    console.log('💡 Instale o zip ou compacte manualmente a pasta "hostgator-ready"');
    process.exit(1);
  }
  
  // Compactar
  console.log(`📦 Compactando ${hostgatorDir}...`);
  const success = compressWithZip(hostgatorDir, outputFile);
  
  if (success) {
    const outputPath = path.join(__dirname, '..', outputFile);
    const stats = fs.statSync(outputPath);
    const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    
    console.log('\n🎉 Arquivo compactado com sucesso!');
    console.log(`📁 Arquivo: ${outputFile}`);
    console.log(`📏 Tamanho: ${sizeInMB} MB`);
    console.log(`📍 Localização: ${outputPath}`);
    console.log('\n📋 Próximos passos:');
    console.log('1. Faça upload do arquivo .zip para o Hostgator');
    console.log('2. Extraia na raiz do seu domínio (public_html)');
    console.log('3. Pronto! Seu site estará funcionando automaticamente.');
  } else {
    console.error('❌ Falha ao compactar arquivos');
    process.exit(1);
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  compressForHostgator();
}

module.exports = { compressForHostgator }; 