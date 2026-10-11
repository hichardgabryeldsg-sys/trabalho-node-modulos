const fs = require("fs/promises");
const path = require("path");

async function fazerBackup(nomeArquivo) {
  // 1. Verifica se o arquivo existe (access lança erro se não existir)
  try {
    await fs.access(nomeArquivo);
  } catch {
    throw new Error(`O arquivo "${nomeArquivo}" não existe.`);
  }

  // 2. Cria a pasta backups/ se não existir
  await fs.mkdir("backups", { recursive: true });

  // 3. Copia para backups/ adicionando .bak no final do nome
  const destino = path.join("backups", path.basename(nomeArquivo) + ".bak");
  await fs.copyFile(nomeArquivo, destino);

  return destino;
}

module.exports = { fazerBackup };
