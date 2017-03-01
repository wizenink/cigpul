var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    text : {type:String,required:true},
    done : Boolean
});


var Todo = mongoose.model("Todo",todoSchema);

module.exports = Todo;