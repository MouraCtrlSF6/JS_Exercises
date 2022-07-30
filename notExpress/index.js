const http = require("http");
const notExpress = require("./notExpress");
const routes = require("./routes")

const server = http.createServer((request, response) => {
  const app = notExpress(request, response);  
  routes(app);
});

server.listen(3000, "0.0.0.0", (err) => {
  if(err) {
    console.error("An error has ocurred:", err.message);
    return;
  }
  console.log("Server running on PORT 3000");
});