var express= require("express");
var app= express();

app.use(express.static('public'));

app.get("/", function(req, res){
    // console.log(__dirname);
     res.sendFile(__dirname + "/views/home.html");    
     // res.sendFile("home.html");   // error, requires absolute path
 });
 
 app.get("/login", function(req, res){  
      res.sendFile(__dirname + "/views/login.html");    
  });
 

var server = app.listen(3005 , function(){});

console.log("the application is started . browser at the url: http://localhost:3005/");