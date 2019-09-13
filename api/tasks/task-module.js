const db = require('../../data/db-config');

module.exports ={
    getTask,
    getById,
    insert
}

//RETURN!!!!!!

function getTask() {
    return db('task as t')
    .select('p.project_name as Project Name', 'p.description as Project Description', 't.id', 't.description', 't.notes', 't.completed' )
    .join('project as p','t.project_id','p.id')
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