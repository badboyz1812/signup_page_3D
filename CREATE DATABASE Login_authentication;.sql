CREATE DATABASE Login_authentication;
use Login_authentication;

CREATE TABLE Users (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Username NVARCHAR(50) NOT NULL,
    Email NVARCHAR(100) NOT NULL UNIQUE,
    Password NVARCHAR(MAX) NOT NULL
);

INSERT into users(Username,Email,Password) VALUES ('Pradeep','Pradeep18122001@gmail.com','Pradeep')
SELECT * FROM Users;
