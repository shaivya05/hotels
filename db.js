//is file me connection establish krenge
var mongoose =require('mongoose');
const mongoURL='mongodb://127.0.0.1:27017/hotels'

mongoose.connect(mongoURL);

const db=mongoose.connection;
db.on('connected',()=>{
    console.log("conected");
})
db.on('disconnected',()=>{
    console.log("disconected");
})
module.exports=db;