const mongoose = require('mongoose')

const connectDB = async () => {
  const MONGO_URL = process.env.MONGO_URI
  const connection = await mongoose.connect(MONGO_URL)
  console.log(`MongoDB connected : ${connection.connection.host}`.cyan.underline.bold)
}

module.exports = connectDB
