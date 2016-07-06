var express=require('express');
var app=express();
var port=3000;
app.listen(port, function(request, response){
  console.log("We're On!");
});
app.use(express.static('public'));
