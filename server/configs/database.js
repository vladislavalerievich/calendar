const mongoose = require('mongoose')

const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://dbUser:dbUserPassword@vladislavalerievich-pijcs.mongodb.net/calendar?retryWrites=true&w=majority";


mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  })
