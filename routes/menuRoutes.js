const express=require('express');
const router=express.Router();
const menu=require('./../models/menu')
router.post('/',async(req,res)=>{
    try{
const data =req.body;
const newItem= new menu (data);
const response =await newItem.save();
console.log('data saved');
res.status(200).json(response);
    }
    catch(err){
        console.log(err);
res.status(500).json({error:'internal server error'});
    }
})
router.get('/',async(req,res)=>{
    try{
        const data =await menu.find();
        console.log("data detched");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
res.status(500).json({error:'internal server error'});

    }
   

})
router.get('/:taste',async(req,res)=>{
    try{
        const taste=req.params.taste;
        if(taste=='sweet'||taste=='sour'|| taste=='spicy'){
            const response =await menu.find({taste:taste});
            console.log("data fetched");
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:'invalid work type'});
        }
    }
    catch(err){console.log(err);
        res.status(500).json({error:'internal server error'});

    }
})
router.put('/:id',async(req,res)=>{
    try{
     const menuId=req.params.id;
     const updatedMenuData=req.body;
const response=await menu.findByIdAndUpdate(menuId,updatedMenuData,{
    new:true,
    runValidators:true,
})
if(!response)
{
    return res.status(404).json({error:'item not found'});
}
console.log("updated");
res.status(200).json(response);
    }
    catch(err){console.log(err);
        res.status(500).json({error:'internal server error'});

    }
})
router.delete('/:id',async(req,res)=>{
    try{
     const menuId=req.params.id;
     
const response=await menu.findByIdAndDelete(menuId)
if(!response)
{
    return res.status(404).json({error:'item not found'});
}
console.log("deleted");
res.status(200).json({message:'item data deleted'});
    }
    catch(err){console.log(err);
        res.status(500).json({error:'internal server error'});

    }
})
module.exports=router;