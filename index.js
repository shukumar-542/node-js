// console.log(__dirname);
// console.log(__filename);
// const _ = require('lodash');
// const people = require('./people');
// console.log(_.last(people));
// console.log(people);
// const path = require('path');
// const os = require('os')
// const myPath = 'C:/Users/Shukumar/Web developmemt/node/index.js'
// console.log(os.cpus());
// console.log(path.toNamespacedPath(myPath));


// File System Modules 

// const fs = require('fs');
// const myFile  = fs.writeFile('file1','node js programmer');
// const readFile = fs.readFile('file1',(err,data)=>{
//       console.log(data.toString());
// })
// console.log(readFile.toString());
// console.log('hello');



////----- EVENT LISTNER 

const EventEmiter = require('events');

const emitter = new EventEmiter();

emitter.on('bellRinging', ()=>{
      console.log('first period Done!');
})

emitter.emit('bellRinging');