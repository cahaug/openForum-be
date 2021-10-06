require('dotenv').config();

module.exports = {
    development: {
      client: 'sqlite3',
      useNullAsDefault: true,
      connection: {filename:'./database/db.sqlite3'},
      migrations: {
        directory: './database/migrations',
      },
      seeds: {
        directory: './database/seeds',
      },
    },
    testing: {
      client: 'pg',
      useNullAsDefault: true,
      connection: 'postgres://localhost/yourLinksTest',
      migrations: {
        directory: './database/migrations',
      },
      seeds: {
        directory: './database/seeds',
      },
    },
    production: {
      client: 'pg',
      useNullAsDefault: true,
      connection: {
        connectionString:process.env.DO_POSTGRESQL_URL_SSL,
        ssl:{ 
          rejectUnauthorized:false,
          ca:process.env.DO_POSTGRES_CA,
        }
      },
      migrations: {
        directory: './database/migrations',
      },
      seeds: { 
        directory: './database/seeds' 
      },
      
    },
  };
  
