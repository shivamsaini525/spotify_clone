const express=require('express');
const mongoose=require("mongoose");
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const User=require('./models/User')    
const passport =require('passport');    
const authRoutes=require("./routes/auth");
const songRoutes=require('./routes/song');
const playlistRoutes=require("./routes/playlist");
const cors=require("cors")
require("dotenv").config();

const app= express();
const port=8000
app.use(cors());
app.use(express.json());


// database connect
mongoose.connect("mongodb+srv://sainishivamsaini12345:"+process.env.MONGO_PASSWORD+"@cluster0.z3fa8va.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then((x)=>{
    console.log("connected to mongo");
})
.catch((err)=>{
    console.log("Error while connecting to monogo");
});



// thisKeyIsPagal
// setup passport

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "thisKeyIsPagal";

passport.use(
    new JwtStrategy(opts, async function (jwt_payload, done) {
        try {
            const user = await User.findOne({_id: jwt_payload.identifier});
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        } catch (err) {
            return done(err, false);
        }
    })
);





app.get('/',(req,res)=>{

    res.send("Hello Shivam Saini")
});

app.use("/auth",authRoutes);
app.use('/song',songRoutes);
app.use("/playlist",playlistRoutes);

app.listen(port,()=>{
    console.log("App Running on Port "+ port)
})

// UA2ZhS8I2E5XqvCR