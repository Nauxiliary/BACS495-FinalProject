var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = req.app.locals.db;
  db.collection("users").get(user);

});

router.get('/:id', function(req, res, next) {
  var db = req.app.locals.db;
  var id = req.params.id;
  console.log(id);
  const query = {'id': id};
  db.collection("users")
    .findOne(query)
    .then(result => {
      console.log(`Got user ${result}`);
      res.json(result);
    })
    .catch(err=>{
      console.log(`Error: ${err}`);
    });
});

router.post("/", function(req, res, next){
  const user = {
    "id": req.body.id,
    "username": req.body.name,
    "password": req.body.password
  }

  var db = req.app.locals.db;
  db.collection("users").insertOne(user);
  res.json({"message":"User inserted"});
});

module.exports = router;
