const fs = require('fs');

const ourStreaming = fs.createReadStream(`${__dirname}/bigData.txt`);

ourStreaming.on('data',(chunk)=>{
      console.log(chunk.toString());
})