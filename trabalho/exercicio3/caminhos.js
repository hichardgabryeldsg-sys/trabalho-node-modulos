import path from "path";

// Três partes de um caminho de arquivo
const pasta1 = "uploads";
const pasta2 = "imagens";
const arquivo = "foto_perfil.png";

// path.join junta as partes usando o separador certo do sistema (/ ou \)
// process.cwd() é a pasta de onde o script foi executado
const caminhoCompleto = path.join(process.cwd(), pasta1, pasta2, arquivo);

console.log("Caminho final:", caminhoCompleto);
console.log("Extensão:", path.extname(caminhoCompleto));
console.log("Nome base:", path.basename(caminhoCompleto));
