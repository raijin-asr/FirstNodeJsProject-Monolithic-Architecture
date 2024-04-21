//NodeJs Practice
const express= require("express") //rote this two lines used in every nodejs
const app= express() //invoke

//const express= require("express")() //in single line

app.set('view engine','ejs') //set ui render to ejs

//get part
app.get('/',(req,res)=>{
    // console.log(req)
    // res.send("Hello Ameer Rai")
    res.render('home.ejs') //or just ('home')
    //or res.render('folder/home.ejs')
})

//rest
app.get('/about',(req,res)=>{
    res.send("About Ameer")
})

//restful
app.get('/blog',(req,res)=>{
    //dont do this, use ejs rendering
    // res.send("<h1>Blog with Ameer</h1><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Jb5jOY4bmMudUMF1hxvrUg7BSbnPGgVWuUX8ptxZJZmTSUSi9BnDCfWN2g&s'>")
    // res.render('blog.ejs', {name: "Ameer", age: 25})
    
    const data= {name:"Ameer", Age:50}
    res.render('blog.ejs', {data})
})

//restful
app.get('/blog/create',(req,res)=>{
    // res.send("Create blog with Ameer")
    res.render("createblog")
})

//restful
app.get('/blog/edit',(req,res)=>{
    // res.send("Edit blog with Ameer")
    res.render("editblog")
})

app.listen(3000,()=>{
    console.log("Server has started at port 3000 in terminal")
})
