const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const sq = new Sequelize('postgres://keodijah@localhost:5432/inclusion');
//Sequelize is an ORM (Object Relational Mapper - Queries data base without using sql uses javascript) 
app.get('/', function (req, res){
    res.send("hello world")
})
app.get('/baby-names', function(req,res){

})
app.listen(3000,function(){
    console.log('Example app listening on port 3000!')
})