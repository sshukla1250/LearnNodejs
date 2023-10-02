const express=require('express');
const app=express();
app.get('',(req,res)=>{
    res.send('This is Home page!');
});
app.get('/about',(req,res)=>{
    res.send('This is About page!');
});
app.get('/help',(req,res)=>{
    res.send('This is Help page!');
});
app.listen(5000);