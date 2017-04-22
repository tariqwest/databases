CREATE DATABASE chat; 

USE chat; 


CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	username varchar(100) NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE rooms (
	id INTEGER NOT NULL AUTO_INCREMENT,
	roomname varchar(50) NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE messages (
	id INTEGER NOT NULL AUTO_INCREMENT,
	userId INTEGER NOT NULL,
	text varchar(140) NOT NULL,
	roomId INTEGER NOT NULL,
	FOREIGN KEY(userId) REFERENCES users(id),
	FOREIGN KEY(roomId) REFERENCES rooms(id),
	PRIMARY KEY (id)
);

insert into rooms (roomname) values ('lobby'); 
insert into users (username) values ('jash');
insert into messages (userId, text, roomId) values (1, 'im jash and . . .', 1);

/*	

add a user:

REMINDER WE NEED TO ADD LOBBY TO DB at roomId = 1;


add a message(after adding user . . .)




  */


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

