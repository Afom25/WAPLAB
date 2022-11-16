console.log("Starting HTTServer for Helloworld ...");

const http = require ('http');

http.createServer(function(req,res){
    res.writeHead(200,{
        "Content-Type":"text/html"
    });
    const pageContent = `
    <!doctype html>
    <html lang="en">
       <head> 
            <title> helloworld </title>
       </head>
       <body>
            <h1> HELLO WORLD NODE </h1>
        
       </body>


    </html>
    
    `
    res.end(pageContent);

}).listen(8080);