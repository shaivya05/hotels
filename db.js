//is file me connection establish krenge
var mongoose =require('mongoose');
require('dotenv').config();
// const mongoURL='mongodb://127.0.0.1:27017/hotels'
// 
// const mongoURL='mongodb+srv://shaivya05:PMFYgnxIIrPqNIjI@cluster0.lyu8p.mongodb.net/'
const mongoURL=process.env.DB_URL;
mongoose.connect(mongoURL);

const db=mongoose.connection;
db.on('connected',()=>{
    console.log("conected");
})
db.on('disconnected',()=>{
    console.log("disconected");
})
module.exports=db;