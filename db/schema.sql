CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burger
(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(250) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY (id)
);