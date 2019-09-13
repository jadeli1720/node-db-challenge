const db = require('../../data/db-config');

module.exports ={
    getTask,
    getById,
    insert
}

//RETURN!!!!!!

function getTask() {
    return db('task')
};

function getById(id) {
    return db('task')
        .where({"task.id": id})
        .first()
};

function insert(task){
    return db('task')
        .insert(task, 'id')
        .then(([id]) => getById(id))
};