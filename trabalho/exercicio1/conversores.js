// Funções de conversão de temperatura

function celsiusParaFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

function fahrenheitParaCelsius(f) {
  return ((f - 32) * 5) / 9;
}

// CommonJS: exporta as duas funções dentro de um objeto
module.exports = { celsiusParaFahrenheit, fahrenheitParaCelsius };
