CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/

  /* 

  CREATE TABLE messages (
  	id INTEGER PRIMARY KEY,
		username varchar(100) TEXT NOT NULL,
		text varchar(140) TEXT NOT NULL,
		roomname varchar(50) TEXT NOT NULL,
		user_id FOREIGN KEY(username) REFERENCES users(id)
	);

	CREATE TABLE users (
		id INTEGER PRIMARY KEY,
		username varchar(100) TEXT NOT NULL
	)







  )
	users
	id (PRIMAR_KEY, int not null), name (varchar 100)
	
	messages
		id (PRIMARY_KEY) | text (varchar 140) | created_at (date) | user_id (FOREIGN_KEY) | room (FOREIGN_KEY)
	
	rooms
		id (PRIMARY_KEY) | text (varchar 100)


  */

);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

