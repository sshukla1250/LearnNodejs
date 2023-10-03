const express=require('express');
const data=require('./data.js');
const app=express();
app.get('',(req,res)=>{
    console.log('Data sent by Browser '+req.query.name);
    res.send('This is Home page!');
});
app.get('/about',(req,res)=>{
    

    res.send(
        '<h1>Hello world</h1> <a href="/help">go to Help page</a>'
    );
});
app.get('/help',(req,res)=>{
    
    res.send('This is Help page!'+JSON.stringify(data));
});

app.listen(5000);