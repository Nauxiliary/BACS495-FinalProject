var express = require('express');
var router = express.Router();

var users = [
  {"id":1, "name":"Daniel"}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  console.log(id);
  for(let user of users){
    if(user.id == id){
      res.json(user.name);
    }
  }
  res.send("Cannot find user");
})

module.exports = router;
