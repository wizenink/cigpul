var router = require('express').Router();
var Todo = require("../model/todo.js");
router.get('/todo',function(req,res){
    Todo.find({},function(err,todos){
        if(err)
        {
        res.status(500).send(err);
        }
        else
        {
        res.send(todos);
        }
        
    });
});

router.get('/todo/:id',function(req,res){
    Todo.find({_id:req.params.id},function(err,doc){
        if(err)
        {
            res.status(404).send(err);
        }
        else
        {
            res.send(doc);
        }
    });
});

router.post('/todo',function(req,res){
    var newtext = req.body.text;
    console.log(newtext);
    var newTodo = new Todo(
        {
            text: newtext
        });
        
    newTodo.save(newTodo,function(err,result){
        if(err)
        {
            res.send(err);
        }
        else
        {
            res.status(201).send(result);
        }
    });
});

router.delete('/todo/:id',function(req,res){
    Todo.findByIdAndRemove(req.params.id, function(err) {
        
  if (err)
  {
      res.status(404).send(err);
  }
  else
  {
      res.status(204).send();
  }
});
});

router.get("/",function(req,res){
    res.send("Todo API.");
});

module.exports = router;