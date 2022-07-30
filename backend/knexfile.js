module.exports = {
    development: {
        client: 'pg',
        connection: process.env.PG_CONNECTION_STRING,
        debug: true,
        migrations: {
            directory: __dirname + 'migrations/',
        }
    },
    production: {
        client: 'pg',
        connection: process.env.PG_CONNECTION_STRING
    }
}