import cluster from "cluster";
import os from "os";
import app from "./src/app.js"; // Importamos la app configurada

// Definimos el puerto que va a usar el servidor
const PORT = 3000;

// Obtenemos la cantidad de núcleos del CPU
// console.log("Núcleos disponibles:", os.cpus())
const numCPUs = os.cpus().length;
// console.log("Núcleos disponibles:", os.cpus())
// console.log("Núcleos disponibles length:", os.cpus().length);
//* Proceso principal (master / primary), generamos workers
//! code aqui

// console.log("cluster -> ", cluster);



// Comentar para levantar desde Bloque Cluster
// const server = app.listen(PORT, () => {
//   console.log(`escuchando en puerto http://localhost:${PORT}`);
// });
