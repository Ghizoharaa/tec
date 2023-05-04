const mongoose=require('mongoose')
const bcrypt=require("bcryptjs")

const Schema=mongoose.Schema ;


const UserSchema = new Schema({
     firstname:{
        type:String,
        required :true,
     },
     lastname:{
        type:String,
        required :true,
     },
     email:{
        type:String,
        required :true,
        unique:true
     }
     ,


     password:{
        type:String,
        required :true,
       
     },
     role:{
        type:String,
        required:true,
        default:"user"
    }



})

// create static methode 


UserSchema.statics.register=async function(firstname,lastname,email,password){
    if(!lastname  || !firstname || !email || !password){
        throw Error("ALL fields must be filled")
    }

    // find user in bd
    const exist= await this.findOne({email})
    if (exist) {
        throw  Error("Email already  exsist in bd")
    }
// create user
  //encrytion password
  const salt=await bcrypt.genSalt(10)
  const hash=await bcrypt.hash(password,salt)
const user = await this.create({firstname:firstname,lastname:lastname,password:hash,email:email})

return user
}

UserSchema.statics.login = async function(email,password) {
    if( !email || !password){
        throw Error("ALL fields must be filled")
    }

    const  user =await this.findOne({email})
    // check email
    if (!user) {
        throw Error("incorrect email")
    }
    // check password if correct or no


    const correct = await bcrypt.compare(password,user.password)
    if (!correct) {
        throw Error("incorrect password")
    }
    return user
}

module.exports = mongoose.model("User",UserSchema)