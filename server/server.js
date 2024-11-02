const http=require('http')
const fs=require('fs')
const path=require('path')

const port=8080

const server=http.createServer((req,res)=>{
    const filePath=path.join(__dirname, req.url === '/' ? "index.html" : "req.url")

    const extName=String(path.extname(filePath)).toLocaleLowerCase()
    const mineType={
        '.html' : 'text/html',
        '.css' : 'text/css',
        '.js' : 'text/javascript',
        '.png' : 'text/png'
    }

    const contentType=mineType[extName] || 'application/octet-stream';

    fs.readFile(filePath,(err,content)=>{
        if(err){
          if(err.code === "ENOENT"){
            res.writeHead(404, {"Content-Type" : "text/html"})
            res.end("404: File NOT Found...")
          }
        }else{
            res.writeHead(200,{'Content-Type': contentType})
            res.end(content,"utf-8")
        }
    })
    
})

server.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
})