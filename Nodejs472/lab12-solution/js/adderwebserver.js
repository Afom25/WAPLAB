

const  http = require("http");
const url = require("url");
const fs = require("fs");
const addmod = require("./addmod.js");
console.log(`Starting server ...`)

http.createServer(function(req,res){
    const endPointURL = url.parse(req.url,true);
    const endpointURLFileName = "." + endPointURL.pathname;
    if(endPointURL.pathname == "./add.js"){
        addmod.add(req,res,endPointURL.query);
    } else {
        fs.readFile(endpointURLFileName,function(err,data){
            if(err){
                res.writeHead(404,{"Content-Type": "text/html"});
                return res.end("<h2 style='color:red;'>404 not found </h2>");
            }
            res.writeHead(200);
            res.write(data);
            return res.end();
        });
    }
}).listen(8001);

console.log(`Starting server .Listening 8001`);