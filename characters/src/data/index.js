const axios = require("axios");
module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8008/Character");
    return results.data;
  },
  create: async () => {
    throw Error("Error creando personaje");
  },
};
