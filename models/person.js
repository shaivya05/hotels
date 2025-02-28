//person ka  model
const { application } = require('express');
const mongoose=require('mongoose');
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required :true
    },
    work:{
        type:String,
        enum:['chef','manager','waiter'],
        required :true
    },
    email:{
        type:String,
        required :true,
        unique:true
    },
    adress:{
        type:String,
       
    },
    salary:{
        type:Number,
        required:true
    }
});

const person=mongoose.model('person',personSchema)
module.exports=person;