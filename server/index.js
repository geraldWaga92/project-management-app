const express = require('express');
// eslint-disable-next-line no-unused-vars
const colors = require('colors');
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const connectDB = require('./config/db')

const PORT = process.env.PORT || 4000
const app = express()

// connect to database
connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(PORT, console.log(`Server is running on port: ${PORT}`))









