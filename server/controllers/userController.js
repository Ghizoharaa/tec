
const   User=require("../models/userModel")
const JWT=require("jsonwebtoken")


// create token 

const CreateToken = (_id) =>{

   return JWT.sign({_id},process.env.SECRET,{expiresIn:"7d"})
}
// register

const register=async(req,res)=>{
const {email,password,lastname,firstname}=req.body

try {
    const user = await User.register(firstname,lastname,email,password)
    const token = CreateToken(user._id)
    res.status(200).json({token,role:user.role})
} catch (error) {
    res.status(400).json({error:error.message})
}
}

// login

const login=async(req,res)=>{
 const {email,password}=req.body


 try {
    const user = await User.login(email,password)
       const token =CreateToken(user._id)
    res.status(200).json({token,role:user.role})
 } catch (error) {
    res.status(400).json({error:error.message})
 }
}


module.exports ={register,login}