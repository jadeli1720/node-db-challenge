const db = require('../../data/db-config');

module.exports ={
    getProject
}

//RETURN!!!!!!

function getProject() {
    return db('project')
}