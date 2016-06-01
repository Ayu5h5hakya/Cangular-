var express=require('express'),
    path = require('path')
express().get('/',function(req,res){
  res.sendFile(path.resolve('index.html'))
}).listen(3000)
