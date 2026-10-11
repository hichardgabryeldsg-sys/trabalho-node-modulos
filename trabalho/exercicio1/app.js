// CommonJS: importa com require()
const { celsiusParaFahrenheit, fahrenheitParaCelsius } = require("./conversores");

console.log(`25°C em Fahrenheit: ${celsiusParaFahrenheit(25)}°F`);
console.log(`77°F em Celsius: ${fahrenheitParaCelsius(77)}°C`);
