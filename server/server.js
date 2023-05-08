require("dotenv").config();

const express=require("express")
const bodyParser = require('body-parser');
const app=express();
const mongoose = require('mongoose');
const cors=require("cors")
const UserRoute=require("./routes/userRoute")
const ItemsRoute=require("./routes/itemsRoute")
const requestsRoutes = require('./routes/RequestsRouter')
const postRoutes = require('./routes/PostRoutes')
const servicesRoute = require('./routes/ServicesRoutes')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

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
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// User routes
app.get('/', UserRoute)
app.get('/user', UserRoute)
app.post('/signup', UserRoute)
app.delete('/user/:id', UserRoute)

// Requests Routes

app.get('/requests/form', requestsRoutes)
app.post('/addRequest', requestsRoutes)
app.get('/requests', requestsRoutes)
app.delete('/requests/:id', requestsRoutes)
app.get('/requests/:requestId', requestsRoutes)

// Posts Routes

app.get('/posts/form', postRoutes)
app.post('/addPost', postRoutes)
app.get('/posts', postRoutes)
app.delete('/post/:id', postRoutes)

// Service Routes

app.get('/services/form', servicesRoute)
app.post('/addService', servicesRoute)
app.get('/services', servicesRoute)
app.delete('/service/:id', servicesRoute)

app.use("/api/user/",UserRoute)

app.use("/api/items/",ItemsRoute)
mongoose.connect(process.env.URL_MONGO).then(()=>{
    app.listen(4040,()=>{
    console.log("listen in 4040");
})
}).catch((error)=>{
    console.log(error);
})
