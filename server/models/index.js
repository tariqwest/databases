var db = require('../db');

var addMessageToDb = function(post, res, result) {
  console.log(result);
  var query = `
    insert into messages (userId, text, roomId) values ( 
      (select id from users where username = '${post.username}'),
      '${post.text}', 
      1
    )`;
  db.connection.query(query, function(err, result) {
    if (err) {
      console.log('addMessageToDb: error', err);
      res.status(400).send();
    } else {
      console.log('addMessageToDb: ', result);
      res.status(200).send('hi from addMessageToDb');
    }
  });
};

var addUserToDb = function(post, res, callback) {
  var query = `insert into users (username) value (${post.username}"`;
  db.connection.query(query, function(err, result) {
    if (err) {
      console.log('addUserToDb: error', err);
    } else {
      console.log('addUserToDb: ', result);
      callback(post, res, result);
    }
  });
};

//select id from rooms where roomname = '${post.roomname}


var checkifUserExistsInDb = function(post, res, callback) {
  var query = `select id from users where username = "${post.username}"`;
  db.connection.query(query, function(err, rows, fields) {
    if (err) {
      addUserToDb(post, res, callback);
    } else {
      callback(post, res);
    }
  });
};


module.exports = {
  messages: {
    get: function(res) {
      var query = `SELECT * FROM messages 
                    LEFT JOIN users ON messages.userId = users.id 
                    LEFT JOIN rooms ON messages.roomId = rooms.id`;

      db.connection.query(query, function(err, rows, fields) {
        if (err) {
          console.log('db err! ', err);
        } else {
          console.log('rows : ', rows);
          console.log('fields :', fields);
          var results = [];
          for (var row of rows) {
            results.push({
              roomname: row.roomname,
              text: row.text,
              username: row.username
            });
          }
          res.send(JSON.stringify({ results: results }));
        }
      });
    }, // a function which produces all the messages
    post: function(post, res) {
      console.log('now entering post: ', post.username, post.text, post.roomname);
      checkifUserExistsInDb(post, res, addMessageToDb);
    } // a function which can be used to insert a message into the database
  },



  users: {
    // Ditto as above.
    get: function() {},
    post: function(post, res) {
      checkifUserExistsInDb(post, res, function(post, res, result){
        console.log('User post success', result);
        res.status(200).send(result);
      });
    }
  }
};
