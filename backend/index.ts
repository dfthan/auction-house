import express from 'express'
const { PORT } = require('./util/config')
const app = express()
const knexfile = require('./knexfile')
const { Model } = require('objection')
const knex = require('knex')

Model.knex(knex(knexfile.development))

const Product = require('./models/Product')

app.get("/", async (req, res) => {
    const item = await Product.query()
    res.json(item)

})

app.listen(PORT, () => {
    console.log(`Server is running on port localhost:${PORT}`)
})