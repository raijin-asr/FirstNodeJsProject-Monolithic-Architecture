//NodeJs Practice
const express= require("express") //rote this two lines used in every nodejs
const { blogs } = require("./model/index") //auto imported after blogs typed and entered
const app= express() //invoke

//const express= require("express")() //in single line

require("./model/index")
app.set('view engine','ejs') //set ui render to ejs

app.use(express.json())
app.use(express.urlencoded({extended: true})) //this shows posted data in console instead of undefined

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

//post operation
app.post('/blog', async(req,res)=>{ //for posting form data
    // console.log(req.body) //for data in object in console, terminal
    
    //showing data of form and holding them
    // const title= req.body.title
    // const subtitle= req.body.subtitle
    // const description= req.body.description
    // console.log(title, subtitle, description)

    //destructuring above 3 line js code to less line
    const {title, subtitle,description}= req.body
    console.log(title, subtitle, description)
    
    //accessing db table using db.blogs of index.js
    await blogs.create({ //used await to bypass delay and added async in app.post
        title: title, //in js, if two value is same in key value pair, write one title only
        subTitle:subtitle,
        description:description
    })
    // res.send("Blog created successfully")
    res.redirect('/') //redirect
}

)

app.listen(3000,()=>{
    console.log("Server has started at port 3000 in terminal")
})
