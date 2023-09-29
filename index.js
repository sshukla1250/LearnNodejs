const http=require('http');
http.createServer((req,res)=>{
    res.write('<h1>Welcome Nodejs!</h1>');
    res.end();
    
}).listen(4500);
console.log('Server Started!');
