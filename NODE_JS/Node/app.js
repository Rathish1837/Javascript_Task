const express=require('express')
const bodyParser=require('body-parser')
const database=require('./src/config/userConfig')
const router=require('./src/router/userRouter')
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    limit:"50mb",
    extended: true
}))
app.use(router);
app.listen(3000,()=>{
    console.log("server connected - 3000")
})

// const http = require('http');
// const os = require("os");
// const event = require("events");

// var serverCreation = http.createServer((req,res)=>{
//     console.log("working")

// });
// serverCreation.listen(4500)

// console.log(os.hostname());
// console.log(os.version());
// console.log(os.arch());
// console.log(os.networkInterfaces());

// const myEmit=new event();  //Init the Event
// const eventData=()=>{
//     console.log("Tax");
// }
// myEmit.on("start",eventData);   //Register the Event
// myEmit.emit("start");
// myEmit.emit("start");
// myEmit.off("start",eventData)


