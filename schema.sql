DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

USE reviews;

CREATE TABLE reviews (
  id int,
  name varchar(50),
  stars int,
  date varchar(50),
  review varchar(1000),
  image varchar(250),
  title varchar(50),
  avatar int,
  foundThisHelpful int
);

--  Execute this file from the command line by typing:
--    mysql -u <USER> < schema.sql
--    OR
--    mysql -u <USER> -p < schema.sql


