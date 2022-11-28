const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db.js')
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schemas/Schema.js')
const cors = require('cors')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())

// MONGO CONNECTION
connectDB()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(PORT, () => console.log('Server is Connected!', PORT))
