const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
}

module.exports = connectDB

// * One of the methods to connect to MongoDB
// mongoose
//   .connect(connectionString, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.log('Error: ', err))
