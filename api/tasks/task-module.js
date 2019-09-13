const db = require('../../data/db-config');

module.exports ={
    getTask
}

//RETURN!!!!!!

function getTask() {
    return db('task')
};