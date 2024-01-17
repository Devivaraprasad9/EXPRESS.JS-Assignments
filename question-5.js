var express= require("express");
var app= express();

app.get("/", function( req , res){

      let id = "10256;" 
      let uname = "Narasimha Rao";
      let job = "Manager";
      let deptno = "10";
      let email = "tnrao.trainer@gamil.com"


      let str ="<h1 align='center'> Created the express js program to display employee details as follows</h1>";
      str += "<hr/>";

      str += `<div style="border:1px solid green;text-align:center; background-color:red;color:white; border-width: 20px; padding:5px; width:300px; border-radius:10px;">
              Employee Id : ${id} <br/>
              Employee Name : ${uname}  <br/>
              Employee Job : ${job} <br/>
              Employee Dept No : ${deptno} <br/>
              Employee Email-Id: ${email} <br/>
              </div>`;
            

        res.send(str);

});

var server = app.listen(3005 , function(){});

console.log("the application is started . browser at the url: http://localhost:3005/");