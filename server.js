const express = require("express");
const  {connectToDB}  = require('./config/db.js');
const { Dog } = require("./models/User.js");

const port = process.env.PORT

const app = express();
const connection = connectToDB();
app.use(express.json());

//GET Method
//How to querry all items in a model
app.get("/dogs", async (req, res) => {
    const allDogs = await Dog.find();
    return res.status(200).json(allDogs);
  });


  //How to querry a database using ID.
  app.get("/dogs/:id", async (req, res) => {
    const { id } = req.params;
    const dog = await Dog.findById(id);
    return res.status(200).json(dog);
  });

//PUT Method
 // Editing a value based on id
app.put("/edit_dog/:id", async (req, res) => { // Changed to PUT method
    try {
        const { id } = req.params;
        const updatedDog = await Dog.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedDog) {
            return res.status(404).json({ message: "Dog not found" });
        }
        return res.status(200).json(updatedDog);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

//POST Method
  //Insert one entry to the model
  app.post("/insert_dogs", async (req, res) => {
    const newDog = new Dog({ ...req.body });
    const insertedDog = await newDog.save();
    return res.status(201).json(insertedDog);
  });

//DELETE Method 
  app.delete("/delete_dogs/:id", async (req, res) => {
    const { id } = req.params;
    const deletedDog = await Dog.findByIdAndDelete(id);
    return res.status(200).json(deletedDog);
  });

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});