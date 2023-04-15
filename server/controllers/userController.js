

// register

const register=(req,res)=>{
    res.status(200).json({data:"you are register"})
}

// login

const login=(req,res)=>{
    res.status(200).json({data:"you are login"})
}


module.exports ={register,login}