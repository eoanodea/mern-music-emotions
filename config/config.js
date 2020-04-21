
const dotenv = require('dotenv')
dotenv.config()

const config = {
    env: process.env.ENV_MODE,
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET, 
    mongoUri: process.env.MONGO_URI,
    CLIENT_ORIGIN: process.env.CLIENT_ORIGIN
}

export default config
  