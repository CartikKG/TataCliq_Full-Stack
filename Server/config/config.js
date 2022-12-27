require('dotenv').config();
const config={
    PORT:process.env.PORT,
    MONGO_URL:process.env.MONGO_URL
}

module.exports= config;