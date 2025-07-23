const { Command, Option } = require("commander");
const program = new Command();

program.addOption(
  new Option("-m, --mode <MODE>", "Modo de ejecución del server")
    .choices(["prod", "dev"])
    .default("dev")
);
program.allowUnknownOption();
program.allowExcessArguments();

program.parse();
console.log(program.opts());
const { mode } = program.opts();
//  { mode: 'prod' }

process.loadEnvFile(mode === "prod" ? "./.env.prod" : "./.env.dev");

const config = {
  PORT: process.env.PORT,
  SECRET: process.env.SECRET,
};

module.exports = { config };


// Descanso de 10 minutos - Regresamos a las "20:32"