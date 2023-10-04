const { catchedAsync } = require("../utils");

module.exports = {
  getCharacters: catchedAsync(require("./getCharacters")),
  createCharecters: catchedAsync(require("./createCharacters")),
};
