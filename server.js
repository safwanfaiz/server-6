const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; // <== You can change the port
const cors = require('cors');
server.use(cors({
    origin: '*'
}));
server.use(middlewares);
server.use(router);

server.listen(port);