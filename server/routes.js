var controller = require('./controllers');
var router = require('express').Router();
var parser = require('body-parser');

//Connect controller methods to their corresponding routes
router.get('/messages', function(req, res) {
  console.log('router get');
  controller.messages.get(req, res);
});

router.post('/messages', function(req, res) {
  controller.messages.post(req, res);
});

router.get('/users', function(req, res) {
  controller.users.get(req, res);
});

router.post('/users', function(req, res) {
  controller.users.post(req, res);
});

router.get('/rooms', function(req, res) {
  controller.rooms.get(req, res);
});

router.post('/rooms', function(req, res) {
  controller.rooms.post(req, res);
});

router.options('/messages', function(req, res) {
  controller.messages.get(req, res);
  console.log('preflight options');
});

router.options('/users', function(req, res) {
  controller.messages.get(req, res);
  console.log('preflight options');
});

router.options('/rooms', function(req, res) {
  controller.messages.get(req, res);
  console.log('preflight options');
});

module.exports = router;
