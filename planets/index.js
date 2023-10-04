const server = require("./src/server");
const PORT = 8003;

server.listen(PORT, () => {
  console.log(`Planet services listening on port ${PORT}`);
});
