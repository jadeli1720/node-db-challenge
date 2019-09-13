
exports.up = function (knex) {
    return knex.schema
        .createTable('project', tbl => {
            //PK
            tbl.increments()

            //name ---> required
            tbl
                .string('project_name', 255)
                .notNullable()

            //description
            tbl
                .string('project_name', 516)
                .notNullable()

            //boolean indicates it project is complete or not, default to false ---> required
            tbl
                .boolean('completed')
                .default(false)

        })

        .createTable('resource', tbl => {
            //PK
            tbl.increments()

            //name ---> required
            //description
        })

        .createTable('task', tbl => {
            //FK
            tbl
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            //description what needs to be done ---> required
            //notes for additional info
            //boolean indicates it project is complete or not, default to false ---> required

        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('task')
        .dropTableIfExists('resources')
        .dropTableIfExists('project')
};
