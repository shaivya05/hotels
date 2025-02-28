// console.log("hello")

// function add(a,b)
// {
//     return a+b;
// }
// var add=function(a,b){
//     return a+b;
// }
// var add=(a,b)=>{
//     return a+b;
// }
// var add=(a,b)=> a+b;
// var result=add(7,5);
// console.log(result);
// var fs=require("fs");
// fs.appendFile('greeting.txt','hiiiiii',()=>console.log("fie created"))
const express=require("express")
const app=express();
const db=require('./db');
const person=require('./models/person');
const menu=require('./models/menu');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send('welcone to my page ...how can i help you')
})

//creating routes 
const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);
const menuRoutes=require('./routes/menuRoutes');
app.use('/menu',menuRoutes);
console.log("hiiiiiiiii");
app.listen(3000)