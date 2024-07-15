# **REST API with Express and MongoDB**

This project demonstrates a basic RESTful API implementation using Node.js, Express, and MongoDB, specifically focusing on managing data related to dogs.


## **Running the Server**

Start the server using: npm start

The server will run at http://localhost:3000


## **API Endpoints:**

GET /dogs

- Retrieves all dogs from the database.

GET /dogs/:id

- Retrieves a single dog by ID.

PUT /edit_dog/:id

- Updates a dog's details based on ID.

POST /insert_dogs

- Inserts a new dog entry into the database.

DELETE /delete_dogs/:id

- Deletes a dog from the database based on ID.

## **Data Model:**

The Dog model schema includes:

name (String, required)

breed (String, required)

age (Number, required)

isGoodBoy (Boolean, default: true)


## Technologies Used:

Node.js
Express.js
MongoDB (via Mongoose)


## Author:

Onesmus Mutyauvyu
