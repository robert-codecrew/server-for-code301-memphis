'use strict';
// require the dotenv module
require('dotenv').config();

// bring in the Express module 
const express = require('express');

// define the Port to use
const port = process.env.PORT || 3002;

// instantiate the Express server
const app = express();

// route 
app.get('/', (req, res) => {
    res.send('Hello World');
})

// send the user a StarWars Character
app.get('/starwars', (req, res) => {
    res.send({
        characterName: "Luke Skywalker",
        characterAge: 95,
        light_saber: "green",
        dad: "The Bad Guy",
        quip:"May the force be with you...."
    })
})
app.get('/users', (req, res) => {
    res.send([
        {
            "username": "ShortStuff",
            "email": "shortstuff@gmail.com",
            "bio": "Dont let the size fool you!",
            "region": "North America"
        },
        {
            "username": "shorterThanMe",
            "email": "shorterThanMe@gmail.com",
            "bio": "I might be shorter than you but definitely a better player!",
            "region": "South America"
        },
        {
            "userName": "elephanTime",
            "email": "elephanTime@gmail.com",
            "bio": "I like to make things go BOOM! The bigger the Thing the Better the BOOM!",
            "region": "North Africa"
        },
        {
            "userName": "theGoat",
            "email": "theGoat@gmail.com",
            "bio": "Bio in username",
            "region": "North America"
        },
        {
            "userName": "flyByNight",
            "email": "flyByNight@gmail.com",
            "bio": "I don't play a lot, but when I do...",
            "region": "European Union"
        }
    ])
})

app.get('/starwars/:id', (req, res) => { 
    if (req.params.id !== 'leia') {
        res.sendStatus(400)
    } else {
        res.send({
        characterName: "Leia",
        characterAge: 95.5,
        light_saber: "blue",
        dad: "The God Guy",
    })} 
    
   
})













// listen on port 3001
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})




