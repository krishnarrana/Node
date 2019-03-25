const http = require('http');
const server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello world")
})

server.listen(8080,()=>{
    console.log('server is running')
});