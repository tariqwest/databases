var models = require('../models');

var defaultCorsHeaders = [
  ['access-control-allow-origin', '*'],
  ['access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS'],
  ['access-control-allow-headers', 'content-type, accept'],
  ['access-control-max-age', 10] // Seconds.
];



module.exports = {
  messages: {
    get: function(req, res) {
      console.log('message get');
      res.setHeader('access-control-allow-origin', '*');
      res.setHeader('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.setHeader('access-control-allow-headers', 'content-type, accept');
      res.setHeader('access-control-max-age', 10);


      models.messages.get(res);

    },

    post: function(req, res) {
      res.setHeader('access-control-allow-origin', '*');
      res.setHeader('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.setHeader('access-control-allow-headers', 'content-type, accept');
      res.setHeader('access-control-max-age', 10);
      console.log('message post');
      models.messages.post(req.body, res);
    }
  },

  users: {
    get: function(req, res) {
      // somedatabasefunction( with a quesrystring)
      console.log('users get');
    },


    post: function(req, res) {
      console.log('users post');
      res.setHeader('access-control-allow-origin', '*');
      res.setHeader('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.setHeader('access-control-allow-headers', 'content-type, accept');
      res.setHeader('access-control-max-age', 10);
      console.log('message post');
      models.users.post(req.body, res);
    }
  },

  rooms: {
    get: function(req, res) {
      console.log('rooms get');
    },









    post: function(req, res) {
      console.log('rooms post');
    }
  }

};
