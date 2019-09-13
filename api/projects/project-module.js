const db = require('../../data/db-config');

module.exports ={
    getProject,
    getById,
    insert
}

//RETURN!!!!!!

function getProject() {
    return db('project')
};

function getById(id) {
    return db('project')
        .where({"project.id": id})
        .first()
};

function insert(project){
    return db('project')
        .insert(project, 'id')
        .then(([id]) => getById(id))
};