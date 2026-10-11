import fs from "fs/promises";

const usuarios = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Hichard" },
];

async function main() {
  // Cria a pasta "database" se não existir (recursive evita erro caso já exista)
  await fs.mkdir("database", { recursive: true });

  // Objeto -> texto JSON, e grava no arquivo
  await fs.writeFile("database/usuarios.json", JSON.stringify(usuarios, null, 2));

  // Lê o arquivo (vem como texto) e converte de volta para objeto
  const conteudo = await fs.readFile("database/usuarios.json", "utf-8");
  const lidos = JSON.parse(conteudo);

  console.log("Nome do segundo usuário:", lidos[1].nome);
}

main();
