var fs = require("fs");
var http = require("http");
function start(route) {
function onRequest(request, response) {
var pathname = url.parse(request.url).pathname;
console.log("Request for" + pathname + "received");
route(pathname);
var page = fs.readFileSync('index.html');
response.writeHead(200, { 'Content-Type': 'text/html' });
response.write(page);
response.end();
}
http.createServer(onRequest).listen(8888);
console.log("Server has started");
}
exports.start = start;