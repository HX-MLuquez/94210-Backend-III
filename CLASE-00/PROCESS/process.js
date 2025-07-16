// 
console.log("01 cwd", process.cwd()); // C:\Users\mauuu\OneDrive\Escritorio\CODERHOUSE\[ 94210 Back-III CLASE ]\CLASE-00\PROCESS

console.log("02 ID", process.pid); // 25172


console.log("03 ID", process.argv);
/*
* node process.js hola como tan
[
  'C:\\Users\\mauuu\\AppData\\Roaming\\nvm\\v20.17.0\\node.exe',
  'C:\\Users\\mauuu\\OneDrive\\Escritorio\\CODERHOUSE\\[ 94210 Back-III CLASE ]\\CLASE-00\\PROCESS\\process.
js',
  'hola',
  'como',
  'tan'
]
*/

/*

node process.js --mode dev
*/


const mode = process.argv[3] === "dev" ? "dev" : "prod"

// npm i commander <- Librería para crear CLI y manejar comandos

