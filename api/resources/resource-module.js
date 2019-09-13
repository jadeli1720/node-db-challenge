const db = require('../../data/db-config');

module.exports ={
    getResource
}

//RETURN!!!!!!

function getResource() {
    return db('resource')
};