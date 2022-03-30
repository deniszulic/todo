const express = require('express')
const router = express.Router();
const db = require('../util/database')
const todo = require('../models/todo')

// router.get('/', (req, res) => todo.findAll().then(todo => {
//     //console.log(todo[0].dataValues);
//     //console.log(todo.every(todo => todo instanceof todo));
//     res.sendStatus(200)
// }).catch(err => console.log(err.message)))

router.get('/alldata', (req, res) => {
    todo.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error"
            });
        });
});

router.post('/postdata', (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Empty"
        });
        return;
    }
    const data = {
        completed: req.body.completed,
        text: req.body.text
    };

    todo.create(data)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error"
            });
        });
});

module.exports = router