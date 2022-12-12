const { createWriteStream } = require("fs");

const myTransport = (options) => {
  return createWriteStream(options.destination);
};

module.exports = myTransport;
