const { fazerBackup } = require("./backup");

async function main() {
  try {
    const destino = await fazerBackup("teste.txt");
    console.log(`Backup criado com sucesso em: ${destino}`);
  } catch (erro) {
    console.error("Erro ao fazer backup:", erro.message);
  }
}

main();
