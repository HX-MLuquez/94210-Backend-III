// Process CPU Usage Example

// Vamos a inicializar con un bucle según la cantidad de CPU que tenga el sistema

const { cpus } = require("os")

const cpuCount = cpus().length;
console.log(`Número de CPUs disponibles: ${cpuCount}`);

for (let i = 0; i < cpuCount; i++) {
  console.log(`Iniciando proceso N° ${i + 1} CPU ${i + 1}`);
}