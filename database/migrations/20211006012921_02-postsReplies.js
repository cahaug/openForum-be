
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('posts', post => {
        post.increments('postId');
        post.integer('username', 128)
            .unsigned()
            .notNullable()
            .references('userId')
            .inTable('users')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT');
        post.string('creationDate', 128).notNullable();
        post.string('content', 2000).notNullable();
        post.string('imgLink', 500);
    })
    .createTable('replies', reply => {
        reply.increments('replyId')
        reply.integer('username', 128)
            .unsigned()
            .notNullable()
            .references('userId')
            .inTable('users')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT');
        reply.string('creationDate', 128).notNullable();
        reply.string('content', 2000).notNullable();
        reply.string('imgLink', 500);
    })
};

exports.down = function(knex, Promise) {

};
