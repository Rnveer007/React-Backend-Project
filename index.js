const express = require('express');
// import express from "express"

const app = express(); // Calling express function and storing in a variable
app.use(express.json()); // req & res data format will always be in json format (in key : value pair) 
app.use(express.urlencoded({ extended: true })); //accept the data coming from the body 

const port = 2000; // variable name can be anything

// CRUD Oprations : Create, Read, Update, Delete 
// clint server model: - in this model clint (user) send the request to server (backend) and server give a response to the clint according to the data ....

const data = [
    { id: 1, name: "Ranveer" },
    { id: 2, name: "Shikhar" },
    { id: 3, name: "Dheeraj" },
    { id: 4, name: "Rishi" },
]


//for getting existing data we need this opration (.get).
app.get('/api/get', (req, res) => { // res always be second argument 
    res.send(data);
});

app.post('/api/post', (req, res) => { // for adding or sending a new data in existing data we need this opration
    const newData = req.body;
    data.push(newData);
    res.status(201).send(data);
});

app.listen(port, () => {
    console.log("server has started at port " + port)
})


