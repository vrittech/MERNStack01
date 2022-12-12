const pino = require("pino");
const transport = pino.transport({
  target: "./transports.js",
  options: { destination: "error.log" },
});

const logger = pino(transport);

module.exports = logger;
