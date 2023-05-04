const express=require("express");

const {login,register}=require("../controllers/userController")
const Route=express.Router()





Route.post("/login",login)


Route.post("/register",register)


module.exports=Route