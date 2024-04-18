//NodeJs Practice
const express= require("express") //rote this two lines used in every nodejs
const app= express() //invoke

//const express= require("express")() //in single line

//get part
app.get('/',(req,res)=>{
    // console.log(req)
    res.send("Hello Ameer Rai")
})

//rest
app.get('/about',(req,res)=>{
    res.send("About Ameer")
})

//restful
app.get('/blog',(req,res)=>{
    res.send("<h1>Blog with Ameer</h1>")
})

//restful
app.get('/blog/create',(req,res)=>{
    res.send("Create blog with Ameer")
})

//restful
app.get('/blog/edit',(req,res)=>{
    res.send("Edit blog with Ameer")
})

app.listen(3000,()=>{
    console.log("Server has started at port 3000 in terminal")
})
