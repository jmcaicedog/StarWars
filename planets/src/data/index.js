const axios = require("axios");

module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8008/Planet");
    return results.data;
  },
  create: async () => {
    throw Error("Error creando planeta");
  },
};
