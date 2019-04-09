
const express=require('express');
const ehandlebars=require('express-handlebars');

var app=express();

app.engine('handlebars',ehandlebars({defaultLayout:'mainpage'}));
app.set('view engine','handlebars');
app.use(express.static('views/static'));
// app.use(express.urlencoded());

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/gallery',(req,res)=>{

    res.render('gallery');
});

app.get('/movies',(req,res)=>{

    res.render('movies');
});

app.listen(4000);