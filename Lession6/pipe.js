const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
      const myReadStreaming = fs.ReadStream(`${__dirname}/bigData.txt`,'utf8')
      myReadStreaming.pipe(res)
})

server.listen(3000);
console.log('3000 port listening');