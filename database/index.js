const server = require("./src/server");
const PORT = 8008;

server.listen(PORT, () => {
  console.log(`Database listening on port ${PORT}`);
});
