-- Create DB
CREATE DATABASE shopping_db;
USE shopping_db;

-- Create Table
CREATE TABLE shopping_table (
    id INT NOT NULL AUTO_INCREMENT,
    item VARCHAR(255) NOT NULL,
    person VARCHAR(255) NOT NULL,
    purchased BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);

