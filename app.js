const express=require("express")
const app=express()
const mongoose =require("mongoose")
const url="mongodb://localhost/AlienDex"

mongoose.connect(url,{useNewUrlParser:true})
const conn=mongoose.connection

conn.on("open",function(){
    console.log("connecteddddddd........")

})

const alienRouter=require("./routers/alien")
app.use("/alien",alienRouter)

// app.get("/",(req,res)=>{
//     res.send("Hehloooooooooooooo heyyyyyyyyyyyyyyy")
// })

app.listen(3000,()=>console.log("server running"))