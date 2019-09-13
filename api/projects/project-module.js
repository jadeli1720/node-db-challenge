const db = require('../../data/db-config');

module.exports = {
    getProject,
    getById,
    insert
}

//RETURN!!!!!!

function getProject() {
    return db('project')
        .then(project => {
            const newProj = []// will hold new modified array of objs
            project.forEach(proj => {
                //if completed === 1 return true else return false
                if (proj.completed === 1) {
                    return proj.completed = true
                } else {
                    return proj.completed = false
                }
            })
            newProj.push(project)//push modified array of objects
            return newProj
        })
};

function getById(id) {
    return db('project')
        .where({ "project.id": id })
        .first()
        .then(proj => {
                if (proj.completed === 1) {
                    return proj.completed = true, proj
                } else {
                    return proj.completed = false , proj
                }
            })
};

function insert(project) {
    return db('project')
        .insert(project, 'id')
        .then(([id]) => getById(id))
};