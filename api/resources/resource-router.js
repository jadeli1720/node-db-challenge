const express = require('express');
Resources = require('./resource-module');

const router = express.Router()

router.get('/', (req, res) => {
    Resources.getResource()
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            console.log("GET Resource", err)
            res.status(500).json({ message: 'Failed to get list of Resources' })
        })
});


module.exports = router