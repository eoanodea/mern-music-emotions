import config from '../config/config'
import app from './express'
import mongoose from 'mongoose'

const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, options)

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

app.listen(config.port, () => {
  console.info('Server started on port %s.', config.port)
})
.on("error", (err) => {
  console.error("Server Error: ", err)
})
