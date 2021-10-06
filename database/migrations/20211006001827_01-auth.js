
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('admins', admin => {
        admin.increments('adminId');
        admin.string('email',128).notNullable();
        admin.string('username',128)
            .notNullable()
            .unique();
        admin.string('password', 128).notNullable();
        admin.string('firstName', 128).notNullable();
        admin.string('lastName', 128).notNullable();
        admin.string('creationDate', 128).notNullable();
        admin.string('profilePictureURL', 500);
    })
    .createTable('users', user => {
        user.increments('userId');
        user.string('email',128).notNullable();
        user.string('username',128)
            .notNullable()
            .unique();
        user.string('password',128).notNullable();
        user.string('firstName',128).notNullable();
        user.string('lastName',128).notNullable();
        user.string('creationDate', 128).notNullable();
        user.string('profilePictureURL', 500);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('admins');
};
