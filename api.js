const express = require("express");
const app = express();
const fs = require("fs");
const session = require("express-session");
const random = require("generaterandom");
const cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );
app.use(session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false,
}));

app.use("/signin",(req,res,next)=>{
    const db =  JSON.parse(fs.readFileSync("./db.json").toString());
    const {username,password}=req.body;
    const user = db.users.find(user=>user.username===username&&user.password===password)
    if(!user){
        res.json({
            status:false,
            data:"Invalid Username/Password"
        });
    }else{
        res.json({
            status:true,
            data:user
        });
    }
    
})

app.use("/signup",(req,res,next)=>{
    const db =  JSON.parse(fs.readFileSync("./db.json").toString());
    const {username,password,admin}=req.body;
    db.users.push({
        id:random.alphanumeric(100),
        username:username,
        password:password,
        admin:admin
    });
    fs.writeFileSync("./db.json",JSON.stringify(db));
    res.json({
        status:true,
        data:"user created"
    })
})

app.listen(4000);