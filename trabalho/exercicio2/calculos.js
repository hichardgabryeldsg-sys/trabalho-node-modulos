// Função auxiliar (não exportada) usada pelas duas funções abaixo
function somar(arrayDeNumeros) {
  return arrayDeNumeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

// Exportação NOMEADA: quem importa precisa usar exatamente este nome entre { }
export function calcularMedia(arrayDeNumeros) {
  if (arrayDeNumeros.length === 0) return 0;
  return somar(arrayDeNumeros) / arrayDeNumeros.length;
}

// Exportação PADRÃO (default): quem importa pode dar o nome que quiser
export default function calcularTotal(arrayDeNumeros) {
  return somar(arrayDeNumeros);
}
