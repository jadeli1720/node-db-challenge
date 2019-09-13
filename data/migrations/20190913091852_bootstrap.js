
exports.up = function (knex) {
    return knex.schema
        .createTable('project', tbl => {
            //PK
            tbl.increments()

            //name ---> required
            tbl
                .string('project_name', 128)
                .notNullable()

            //description
            tbl
                .string('description', 255)
                .notNullable()

            //boolean indicates it project is complete or not, default to false ---> required
            tbl
                .boolean('completed')
                .default(false)

        })

        .createTable('resource', tbl => {
            //PK
            tbl.increments()

            //FK
            tbl
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            //name ---> required
            tbl
                .string('resource_name', 128)
                .notNullable()
            //description
            tbl
                .string('description', 255)
                .notNullable()
        })

        .createTable('task', tbl => {
            //PK
            tbl.increments()
            //FK
            tbl
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            //description what needs to be done ---> required
            tbl
                .string('description', 255)
                .notNullable()

            //notes for additional info
            tbl
                .string('notes')

            //boolean indicates it project is complete or not, default to false ---> required
            tbl
                .boolean('completed')
                .default(false)
                .notNullable()

        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('task')
        .dropTableIfExists('resources')
        .dropTableIfExists('project')
};
