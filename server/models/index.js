var db = require('../db');

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
          res.send(JSON.stringify({results: results}));
        }
      });
    }, // a function which produces all the messages
    post: function({ username, text, roomname }) {
      console.log('now entering post: ', username, text, roomname);
      var querystring = `select id from users where username = "${username}"`;
      db.connection.query(querystring, function(err, rows, fields) {
        console.log('now entering post callback1: ', username, text, roomname);
        if (err) {
          console.log('db err in post to messages', err);
        } else if (rows) {
          console.log(rows);
          userId = rows[0].id; //double check this we never saw this object
          querystring2 = 'insert into messages (userId, text, roomId) values (' + userId + ', ' + '"' + text + '", 1);';
          db.connection.query(querystring2, function(err, result) {
            if (err) {
              console.log('db err in post querystring2', err);
            } else {
              console.log('insert success:', result);
            }
          });
        }
      });

        // check if user exists
        // if nto exists, create
        // check if room exists
        // if not exists, create 





    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function() {},
    post: function() {}
  }
};
