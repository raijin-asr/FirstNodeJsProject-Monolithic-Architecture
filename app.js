//NodeJs Practice
const express= require("express") //rote this two lines used in every nodejs
const app= express() //invoke

//const express= require("express")() //in single line

//get part
app.get('/',(req,res)=>{
    res.send("Hello Ameer Rai")
})

app.listen(3000,()=>{
    console.log("Server has started at port 3000 in terminal")
})
