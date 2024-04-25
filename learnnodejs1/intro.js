// console.log("Hi")
// const os=require('os');
// const path=require('path')
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())
// console.log(os.platform())
// console.log(os.release())
// console.log(os.arch())
// console.log(os.totalmem())
// // console.log(__dirname);//line 7 and 9 same
// // console.log(__filename);
// // console.log(path.dirname(__filename))
// // console.log(path.basename(__filename)) // only give filename without any directory
// // console.log(path.extname(__filename))
// // console.log(path.parse(__filename))

// // const math=require('./math')
// // console.log(math.add(2,3));
// // console.log(math.sub(2,3));
// // console.log(math.mul(2,3));
// // console.log(math.div(2,3));

// const {add,sub,mul,div}=require('./math')

// console.log(add(3,6))
// console.log(sub(3,6))
// console.log(mul(3,6))
// console.log(div(3,6))


//-------------File System---------------


// -----------readFile()-------


// const fs = require('fs');

// fs.readFile('./files/start.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// }); ----->output will be buffer data.

// const fs = require('fs');

// fs.readFile('./files/start.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// });


// const fs = require('fs');

// fs.readFile('./files/start.txt','utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// process.on('uncaughtException',err=>{
//     console.error(`There was an uncautch error: ${err}`)
//     process.exit(1)
// })

// const fs = require('fs');
// const path =require('path')
// fs.readFile(path.join(__dirname,'files','start.txt'),'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// process.on('uncaughtException',err=>{
//     console.error(`There was an uncautch error: ${err}`)
//     process.exit(1)
// })


// -------writefile()-------
// const fs=require('fs');
// const path=require('path')

// fs.writeFile(path.join(__dirname,'files','hello.txt'),'Hello Guys!',(err)=>{
//     if(err) throw err;
//     console.log('write complete')
// });
// process.on('uncaughtException',err=>{
//         console.error(`There was an uncautch error: ${err}`)
//         process.exit(1)
//     })

// fs.appendFile(path.join(__dirname,'files','start.txt'),'\n\nHii Guys!',(err)=>{
//     if(err) throw err;
//     console.log('append complete')
// });

// fs.rename(path.join(__dirname,'files','hello.txt'),path.join(__dirname,'files','hii.txt'),(err)=>{
//     if(err) throw err;
//     console.log('rename  complete')
// });

  
const express = require('express');
const { exec } = require('child_process');

const app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

const PORT = 3000;

app.listen(PORT, function() {
  console.log(`Server is running on port ${PORT}`);
  
  // Open the browser automatically
  exec(`start http://localhost:${PORT}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error opening browser: ${error}`);
      return;
    }
    console.log('Browser opened successfully');
  });
});

  

