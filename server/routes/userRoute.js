const express=require("express");

const {login,register}=require("../controllers/userController")
const Route=express.Router()





Route.get("/login",login)


Route.get("/register",register)


module.exports=Route