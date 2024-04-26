const http=require('http');
const url=require('url');

const server=http.createServer((req,res)=>{
 const parse_url=url.parse(req.url,true)
 if(parse_url.pathname==="/"){
 res.writeHead(200,{"content-Type": "text/html"});
 res.write("<h1>Home page</h1>")
 res.end()
 }else if(parse_url.pathname==="/about"){
 res.writeHead(200,{"content-Type": "text/html"});
 res.write("<h1>About page</h1>")
 res.end()
 }else{
res.writeHead(404,{"content-Type": "text/html"});
 res.write("<h1>Page not found</h1>")
 res.end()
 }
})

server.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
    });
    