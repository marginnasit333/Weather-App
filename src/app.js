const express=require('express');
const path =require('path');
const app=express();
const port=8000 || process.env.PORT;

const static_path=path.join(__dirname,"../public");
app.use(express.static(static_path));


app.get("",(req,res)=>{
    res.send("Home page");
});

app.get("/about",(req,res)=>{
    res.send("About page");
});


app.get("/weather",(req,res)=>{
    res.send("weather page");
});


app.get("*",(req,res)=>{
    res.send("Error page");
});



app.listen(port,()=>{
    console.log(`listining to the ${port}`);
})