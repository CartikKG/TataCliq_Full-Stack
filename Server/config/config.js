require('dotenv').config();
const config={
    PORT:process.env.PORT,
    MONGO_URL:process.env.MONGO_URL,
    JWT_SECRET_KEY:process.env.JWT_SECRET_KEY
}

module.exports= config;