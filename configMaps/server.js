const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    fs.readFile("/etc/config/enemies.cheat.level",(err,data)=>{
        if(err) return;
        res.writeHead(200,{"Content-type":"text/html"});
        res.write("ENEMIES (from env variable ) "+process.env.ENEMIES+'</br>');
        res.write("enemies.cheat.level from volume "+data); // every key will be  available as a file.
        res.end()
    })
}).listen(3000)