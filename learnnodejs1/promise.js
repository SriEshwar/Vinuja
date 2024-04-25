//define the promise
// const { promises } = require("dns");

// const { rejects } = require("assert");
// const { resolve } = require("path");

// const book= new  Promise((resolve,reject)=>{
//    let bookingSuccess=0;
//    if (bookingSuccess)
//        resolve()
//     else 
//     reject()
// })

// .then(success)
// .catch(failure)

// function success(){
//     console.log("Success....")
// }

// function failure(){
//     console.log("failure...")
// }


// function tosscoin(){
//     return new Promise((resolve,reject)=>{
//         const rand=Math.floor(Math.random)*2;
//         if(rand==1)
//         resolve()
//         else
//         reject()
//     })
// }

// tosscoin()
// .then(()=>console.log("win"))
// .catch(()=> console.log("loss"))


var event=require('events');
var emitter=new event.EventEmitter();
emitter.on('trackdelivery',()=>{

console.log("order out for delivery")

})


function deliveryStatus(){
    console.log("Please wait for the delivery status. we are loadin");

    console.log("final status");
    emitter.emit('trackdelivery');
}
deliveryStatus()

//--------path module---------
var path=require('path');
var filename={dir:'\\dir3\\',base:"start.txt"}

var exactpath=path.format(filename)
console.log(exactpath);

var xpath=path.join("test","dummy","start.txt")
console.log(xpath);


//-----OS--------
var os=require('os');
console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.type());

//-----Cluster------
var cluster=require('cluster');
var http=require('http');
const { ChildProcess } = require('child_process');
var cpus=require('os').cpus.length;
if(cluster.isMaster){
    masterprocess()
}else{
    childProcess()
}

function masterprocess(){
    console.log(`Master ${process.pid} is running`)
    for(let i=0;i<cpus;i++){
        console.log(`forking process number ${i}`);
    }
    process.exit();
}

function childProcess(){
    console.log(`child ${process.pid} started and completed`)
    process.exit()
}