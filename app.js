const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");

const app=express();
var blahs=[];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",function(req,res){
     res.render("list",{sleeps:blahs});
});
app.post("/",function(req,res){
var blah=req.body.newItem;
blahs.push(blah);
res.redirect("/");
});
app.get("/about",function(_req,res){
    res.render("about");
});
app.listen(3000,function(){
    console.log("Server is running bro");
})






