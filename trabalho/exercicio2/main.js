// O default vem sem chaves, a nomeada vem entre chaves
import calcularTotal, { calcularMedia } from "./calculos.js";

const precos = [12.5, 89.9, 45.0, 10.0];

console.log("Preços:", precos);
console.log("Total:", calcularTotal(precos).toFixed(2));
console.log("Média:", calcularMedia(precos).toFixed(2));
