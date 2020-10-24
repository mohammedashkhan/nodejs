const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes.hander) ;
server.listen(3000);