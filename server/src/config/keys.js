require('dotenv').config();

const privateKey = process.env.PRIVATE_KEY

const publicKey = process.env.PUBLIC_KEY

module.exports = {
    privateKey,
    publicKey
}