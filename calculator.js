//jshint esversion:6

const express = require('express');
const app = express();

app.listen(3000, function(){
    console.log('server has started')
})

app.get('/', function(req, res){
    res.send('hi')
})