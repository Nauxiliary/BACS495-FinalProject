var express = require('express');
const { route } = require('.');
var router = express.Router();

router.post('/', (req, res) =>{
    let resp = db.collection('questions').find({}).sort({id: -1}).limit(1)
    resp.forEach(obj =>{
      if(obj){
        let quest ={
            id: obj.id +1,
            body: req.body.body
        }
        db.collection('questions').insertOne(quest);
        res.json({"message":"Question added"});
      }
    })
  });

router.get('/', (req, res) => {
    db.collection("questions").find({}).toArray((err, result) => {
        if(err) throw err
        res.send(result)
    })
});

router.patch("/", function(req, res, next){
    const question = {
      "id": req.body.id
    }
    var db = req.app.locals.db; 
    db.collection("questions").updateOne(question
        , {$set: {"votes": req.body.votes}}
        , {upsert: true}); 
    res.json({"message": " - " + req.body.votes + " votes registered for: " + req.body.id});
  });
  
  
module.exports = router;