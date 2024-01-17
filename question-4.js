var express= require("express");
var app= express();

app.get("/", function( req , res){
      let str ="<h1 align='center'> Created the express js program to display employee details as follows</h1>";
      str += "<hr/>";
      str += "Employee Id : '10256'<br/>";
      str += "Employee Name :'Narasimha Rao'<br/>"
      str += "Employee Job :'Manager'<br/>"
      str += "Employee Dept No :'10'<br/>"
      str += "Employee Email-Id:'tnrao.trainer@gamil.com'<br/>"

      res.send(str);

});

var server = app.listen(3005 , function(){});

console.log("the application is started . browser at the url: http://localhost:3005/");
