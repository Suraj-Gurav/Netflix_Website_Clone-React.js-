const express=require("express");
const app=express();
const PORT =5002;
const conn=require("./database");
const cors=require("cors");

//show backend to frontend data
app.use(cors());

//middlewere function 
app.use(express.json());

//router file import
app.use("/admin",require("./Router/admin"));

//database connection
conn.connection.on("connected",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("database connected");
    }
});

app.listen(PORT,(req,res)=>{
    console.log(`server is start port:${PORT}`);
});

