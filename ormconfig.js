require('dotenv').config();

module.exports = {
    type: process.env.DATABASE_TYPE,
    url: process.env.DATABASE_URL,
    logging: false,
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    },
    migrations: [
        //'src/database/migrations/**/*'
        'dist/database/migrations/**/*.js'
    ],
    entities: [
        //'src/database/models/**/*'
        'dist/database/models/**/*.js'
    ],
    cli: {
        entitiesDir: 'src/database/models',
        migrationsDir: 'src/database/migrations'
    }
};