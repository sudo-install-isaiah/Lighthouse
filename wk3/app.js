const http = require("http");
const PORT = 3000;

// a function which handles requests and sends response
const requestHandler = function (request, response) {
	if (request.url === "/") {
		response.end("Welcome!");
	} else if (request.url === "/urls") {
		response.end("google.com");
	} else {
		response.statusCode = 404;
		response.end("404 Page not found!");
	}
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
	console.log(`Server listening on: http://localhost:${PORT}`);
});
