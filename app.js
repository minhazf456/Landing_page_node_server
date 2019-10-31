//get http
var http = require('http');
//reading and writing content using fs
var fs = require('fs');
//create the server
var server = http.createServer(function (request, response){
    // log the client's request
    console.log('client request URL: ', request.url);
    // serve index.html - the root
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); // sending data
            response.write(contents); // send response
            response.end(); // complete the action
        });
    }

/// localhost:6789/ninjas    This route should serve a view file called ninjas.html and display information about ninjas

else if (request.url === "/ninjas.html") { 
    fs.readFile('ninjas.html', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write(contents); 
        response.end();
    });
}

 // serve dojo.html if this url is used
 else if (request.url === "/new/dojos.html") {
    fs.readFile('dojos.html', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write(contents); 
        response.end();
    });
}

else {
    fs.readFile('error.html', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write(contents); 
        response.end('File not found!!!');
    });
}
});
server.listen(6789);
console.log("Running in localhost at port 6789");