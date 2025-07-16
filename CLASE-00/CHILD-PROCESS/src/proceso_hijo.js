// PROCESS CHILD
//* Proceso hijo que realiza un cálculo complejo


// ---

const { calculoComplejo } = require("./functionCompleja.js"); // Importa la función de cálculo complejo

process.on("message", (msg) => {
  console.log(`Proceso hijo (PID ${process.pid}) recibió: "${msg}"`);

  console.log("Comienza cálculo complejo");
  console.time("Duración del cálculo");

  const result = calculoComplejo();

  console.timeEnd("Duración del cálculo");

  process.send({ type: "resultado", result: Math.round(result) });
});
