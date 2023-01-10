import mongoose from "mongoose"

mongoose
    .connect('mongodb://root:example@127.0.0.1:27017/users?authSource=admin')
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db