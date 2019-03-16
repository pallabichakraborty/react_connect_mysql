#create database simple_react_sql_db;

use simple_react_sql_db;

create table simple_react_sql_db.users
(
id int not null auto_increment,
username varchar(45) not null,
email varchar(45) not null,
password varchar(45) not null,
post varchar(45) not null,
salary int not null,
primary key(id),
unique index id_unq (id asc),
unique index username_unq (username asc),
unique index email_unq (email asc)
);