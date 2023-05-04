require("dotenv").config();

const express=require("express")
const app=express();
const mongoose = require('mongoose');
const cors=require("cors")
const UserRoute=require("./routes/userRoute")
const ItemsRoute=require("./routes/itemsRoute")

const allowedOrigins = [process.env.PORTFRONT];
app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(express.json())

app.use("/api/user/",UserRoute)

app.use("/api/items/",ItemsRoute)
mongoose.connect(process.env.URL_MONGO).then(()=>{
    app.listen(4040,()=>{
    console.log("listen in 4040");
})
}).catch((error)=>{
    console.log(error);
})
