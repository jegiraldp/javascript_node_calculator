const express = require('express');
const app = express();
const cua = require('./public/js/cuadrado.js');
const bodyParser = require('body-parser');

//settings
//app.set('appName','ServerCalculadora');
app.set('views',__dirname+'/views')
app.set('public',__dirname+'/public')
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.get('/',(req,res)=> {
  res.render('index.ejs');
});

app.get('/calcuadrado',(req,res)=> {
  //const nume=req.query.txtNum;
  const cuadrado=0;
  res.render('calculadora.ejs',{cuadrado:cuadrado});
});


app.post('/calcuadrado',(req,res)=> {
  const nume = req.body.txtNum;
  const cuadrado=cua.calcular(nume);
  res.render('calculadora.ejs',{cuadrado:cuadrado,numero:nume});

});

app.get('*',(req,res,next)=> {
  const error='Error de URL -- Confirmar';
  res.end(error);
});

var port = process.env.PORT || 8080;

const server = app.listen(port,()=>{
    console.log("server ok -- :) -- ");
});
