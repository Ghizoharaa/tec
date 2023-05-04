const express=require("express");

const Route=express.Router()





Route.get("/all",(req,res)=>{
    res.status(200).json({data:"salam i am item 1"})
})




module.exports=Route