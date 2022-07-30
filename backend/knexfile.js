require('dotenv').config()

module.exports = {
    development: {
        client: 'pg',
        connection: process.env.PG_CONNECTION_STRING,
        debug: true,
        migrations: {
            directory: __dirname + '/migrations/',
        }
    }
}