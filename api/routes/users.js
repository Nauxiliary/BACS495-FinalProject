var express = require('express');
const { route } = require('.');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  db.collection("users").find({}).toArray((err, result) => {
      if(err) throw err
      res.send(result)
  })
});

router.get('/:password', (req, res) => {
  db.collection('users').find({password: parseInt(req.params.password)}).toArray((err, result) => {
    if(err) throw err
      res.send(result)
  })
});

router.post('/', (req, res) =>{
  let resp = db.collection('users').find({}).sort({password: -1}).limit(1)
  resp.forEach(obj =>{
    if(obj){
      let user ={
        username: req.body.username,
        password: obj.password +1
      }
      db.collection('users').insertOne(user);
      res.json({"message":"User inserted"});
    }
  })
});

module.exports = router;
