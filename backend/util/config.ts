require('dotenv').config()
const PORT = process.env.PORT || 3001
const DBCONNECTIONSTRING = process.env.DBCONNECTIONSTRING

module.exports = {
    PORT,
    DBCONNECTIONSTRING
}
