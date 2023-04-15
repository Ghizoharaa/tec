require("dotenv").config();

const express=require("express")
const app=express();
const mongoose = require('mongoose');

const UserRoute=require("./routes/userRoute")

app.use(express.json())

app.use("/api/user/",UserRoute)
mongoose.connect(process.env.URL_MONGO).then(()=>{
    app.listen(4040,()=>{
    console.log("listen in 4040");
})
}).catch((error)=>{
    console.log(error);
})
