# eCommerce-Back-End Using ORM

## Description 
The back end architecture of an example ecommerce website using ORM, mySQL, and sequelize.
## Usage 

<h3>User Story</h3>
AS A manager at an internet retail company
 - I WANT a back end for my e-commerce website that uses the latest technologies
 - SO THAT my company can compete with other e-commerce companies

<h3> Application Description </h3>

GIVEN a functional Express.js API
 - WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
 - THEN I am able to connect to a database using Sequelize
 - WHEN I enter schema and seed commands
 - THEN a development database is created and is seeded with test data
 - WHEN I enter the command to invoke the application
 - THEN my server is started and the Sequelize models are synced to the MySQL database
 - WHEN I open API GET routes in Insomnia for categories, products, or tags
 - THEN the data for each of these routes is displayed in a formatted JSON
 - WHEN I test API POST, PUT, and DELETE routes in Insomnia
 - THEN I am able to successfully create, update, and delete data in my database

## Installation

<h3> npm packages required </h3>
Please install the following npm packages to run this application: 
 - express
 - mySQL2
 - sequelize 
 - dotenv
 - note: please follow the .env.EXMAPLE to link your database to your server

## Walkthrough Videos

Walkthrough Video 1 (mySQL database creation, seed, start server.js)

https://drive.google.com/file/d/1ybjZn6RGK5C-_s_lvbKR6BrzhMc9cSCY/view

Walkthrough Video 2 (route GET, POST, PULL and DELETE tests)

https://drive.google.com/file/d/1eUExzTkZhuWjCD-xh68j1j1CZiO5kq2x/view
