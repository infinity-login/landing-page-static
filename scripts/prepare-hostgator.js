const fs = require('fs');
const path = require('path');

// Função para criar diretório se não existir
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Função para copiar arquivo
function copyFile(src, dest) {
  fs.copyFileSync(src, dest);
}

// Função principal
function prepareHostgator() {
  const outDir = path.join(__dirname, '..', 'out');
  const hostgatorDir = path.join(__dirname, '..', 'hostgator-ready');
  
  console.log('🚀 Preparando arquivos para Hostgator...');
  
  // Limpar diretório anterior se existir
  if (fs.existsSync(hostgatorDir)) {
    fs.rmSync(hostgatorDir, { recursive: true });
  }
  
  // Criar diretório principal
  ensureDir(hostgatorDir);
  
  // Mapeamento de páginas para suas pastas
  const pages = [
    { file: 'index.html', folder: '' },
    { file: 'pricing.html', folder: 'pricing' },
    { file: 'privacy-policy.html', folder: 'privacy-policy' },
    { file: 'cookies-policy.html', folder: 'cookies-policy' },
    { file: 'terms-of-service.html', folder: 'terms-of-service' },
    { file: 'thank-you.html', folder: 'thank-you' },
    { file: 'test.html', folder: 'test' }
  ];
  
  // Processar cada página
  pages.forEach(({ file, folder }) => {
    const sourceFile = path.join(outDir, file);
    const targetDir = path.join(hostgatorDir, folder);
    const targetFile = path.join(targetDir, 'index.html');
    
    if (fs.existsSync(sourceFile)) {
      // Criar diretório se necessário
      ensureDir(targetDir);
      
      // Copiar arquivo como index.html
      copyFile(sourceFile, targetFile);
      console.log(`✅ ${file} → ${folder}/index.html`);
    } else {
      console.log(`⚠️  Arquivo não encontrado: ${file}`);
    }
  });
  
  // Copiar arquivos estáticos
  const staticDirs = ['images', '_next'];
  staticDirs.forEach(dir => {
    const sourceDir = path.join(outDir, dir);
    const targetDir = path.join(hostgatorDir, dir);
    
    if (fs.existsSync(sourceDir)) {
      // Copiar diretório recursivamente
      copyDirRecursive(sourceDir, targetDir);
      console.log(`✅ ${dir}/ → ${dir}/`);
    }
  });
  
  // Copiar arquivos da raiz
  const rootFiles = ['favicon.ico', '.htaccess'];
  rootFiles.forEach(file => {
    const sourceFile = path.join(outDir, file);
    const targetFile = path.join(hostgatorDir, file);
    
    if (fs.existsSync(sourceFile)) {
      copyFile(sourceFile, targetFile);
      console.log(`✅ ${file} → ${file}`);
    }
  });

  // Copiar favicons personalizados
  const faviconsSrc = path.join(__dirname, '..', 'public', 'favicons');
  const faviconsDest = path.join(hostgatorDir, 'favicons');
  if (fs.existsSync(faviconsSrc)) {
    copyDirRecursive(faviconsSrc, faviconsDest);
    console.log('✅ favicons/ → favicons/');
  }
  
  // Garantir que o Logoambar.svg seja copiado para a pasta correta
  const logoambarSrc = path.join(__dirname, '..', 'public', 'images', 'Logoambar.svg');
  const logoambarDestDir = path.join(hostgatorDir, 'images');
  const logoambarDest = path.join(logoambarDestDir, 'Logoambar.svg');
  if (fs.existsSync(logoambarSrc)) {
    ensureDir(logoambarDestDir);
    copyFile(logoambarSrc, logoambarDest);
    console.log('✅ Logoambar.svg → images/Logoambar.svg');
  }
  
  console.log('\n🎉 Estrutura para Hostgator criada com sucesso!');
  console.log(`📁 Pasta: ${hostgatorDir}`);
  console.log('\n📋 Próximos passos:');
  console.log('1. Compacte a pasta "hostgator-ready"');
  console.log('2. Faça upload do arquivo compactado para o Hostgator');
  console.log('3. Extraia na raiz do seu domínio');
  console.log('4. Pronto! Seu site estará funcionando automaticamente.');
}

// Função para copiar diretório recursivamente
function copyDirRecursive(src, dest) {
  ensureDir(dest);
  
  const items = fs.readdirSync(src);
  
  items.forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    
    const stat = fs.statSync(srcPath);
    
    if (stat.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      copyFile(srcPath, destPath);
    }
  });
}

// Executar se chamado diretamente
if (require.main === module) {
  prepareHostgator();
}

module.exports = { prepareHostgator }; 