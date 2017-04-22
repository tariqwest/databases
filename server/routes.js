var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/messages', function(req, res) {
  console.log('router get');
  controller.messages.get(req, res);
});

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);

router.get('/rooms', controller.rooms.get);

router.post('/rooms', controller.rooms.post);

router.options('/messages', function(req, res) {
  controller.messages.get(req, res);
  console.log('preflight options');
});

module.exports = router;

var cons = function() {
  console.log('hidere');
};
