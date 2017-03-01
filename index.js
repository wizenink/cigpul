var bodyParser = require("body-parser");
var express = require("express");
var router = require("./routes/router.js");
var mongoose = require("mongoose");
var helmet = require("helmet");

var config = require("./config.json");
var app = express();
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router(app);
var port = config.port || process.env.PORT || 8080;
var mongourl = config.mongourl || process.env.MONGOURL || "mongodb://127.0.0.1:27017/todos";
mongoose.connect(mongourl);
app.get("/",function(req,res){
    res.send("Todo API");
});
app.listen(port,function(){
    console.log("App listening on port "+port);
});

