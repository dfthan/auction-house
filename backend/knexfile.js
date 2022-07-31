require('dotenv').config()
// db url cant be loaded from config file because db migrations wont work

module.exports = {
    development: {
        client: 'pg',
        connection: process.env.PG_CONNECTION_STRING,
        migrations: {
            directory: __dirname + '/migrations/',
        }
    }
}