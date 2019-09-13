const express = require('express');
Projects = require('./project-module');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProject()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            console.log("GET Project", err)
            res.status(500).json({ message: 'Failed to get list of projects' })
        })
})



module.exports = router;