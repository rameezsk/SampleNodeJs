var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World Heroku Nodjs!");

});

var port = 80;
server.listen(process.env.PORT || 5000);

console.log("Server running at http://localhost:%d", port);
