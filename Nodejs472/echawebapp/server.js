
console.log(`Start server ...`)
const http = require("http");
const url = require("url");

http.createServer(function(request,response){
    response.writeHead(200,{
        "Content-Type" : "text/html"
    });
    console.log(request.url);

    const queryString = url.parse(request.url,true,false).query;

    const resContent = `Year was ${queryString.year}. Month was ${queryString.month}`;



    response.write(resContent);
    response.end();
}).listen(8000);
