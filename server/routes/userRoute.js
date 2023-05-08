const express=require("express");

const userController=require("../controllers/userController")
const Route=express.Router()



// Display all user
Route.get('/user', userController.getAllUsers)

//Display the index page
Route.get('/', userController.getIndexPage);

// Add user to db
Route.post('/signup', userController.addUser);

// Delete user fron db
Route.delete('/user/:id', userController.deleteUser);


Route.post("/login",userController.login)


Route.post("/register",userController.register)


module.exports=Route