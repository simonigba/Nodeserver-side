const fs = require('fs')
const http = require('http')
const path = require('path')


const newServer = http.createServer(function(request, response){
    if(request.url==='/'){

     let filePath = path.join(__dirname, 'page', '/index.html')
     fs.readFile(filePath, 'utf-8', (err, data) => {
        response.writeHead(200,{'Content-Type':'text/html'})
        response.end(data);
     })
       
    } 
    if(request.url==='/index2.html'){
        let filePath = path.join(__dirname, 'page', './page/index2.html')
        fs.readFile(filePath,'utf-8',(err, data)=>{
            response.writeHead(200,{'COntent-Type':'text/html'})
            response.end(data);
        })
    }
    if (request.url==='/index3'){
        let filePath = path.join(__dirname, 'page', './page/index3.html')
        fs.readFile(filePath, 'utf-8', (err, data)=>{
            response.writeHead(200,{'content-Type':'text/html'})
            response.end(data)
        })
    }
   

})
 newServer.listen(5500,()=>{console.log('server listening on port 5500')})