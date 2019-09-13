const express = require('express');
const Tasks = require('./task-module')

const router = express.Router()

router.get('/', (req, res) => {
    Tasks.getTask()
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            console.log("GET Task", err)
            res.status(500).json({ message: 'Failed to get list of Tasks' })
        })
});


module.exports = router