var express= require("express");
var app= express();

app.get("/", function( req , res){

      let id = "10256;" 
      let uname = "LG Printer";
      let price = "2500";
      let quantity = "3";
      let amount = "7500"


      let str ="<h1 align='center'> Created the express js program to display employee details as follows</h1>";
      str += "<hr/>";

      str += `<center><table border =5></center>
             <tr><td> Product Id :<td> ${id} <br/></tr>
             <tr><td>Product Name : <td>${uname}  <br/></tr>
             <tr><td>unit price :<td> ${price} <br/></tr>
             <tr><td>Quantity :<td> ${quantity} <br/></tr>
             <tr><td>Total Amount:<td> ${amount} <br/></tr>
              </table>`;
            

        res.send(str);

});

var server = app.listen(3005 , function(){});

console.log("the application is started . browser at the url: http://localhost:3005/");