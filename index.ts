import express from "express"
import BodyParser from "body-parser"
import cors from "cors"
import {expressjwt} from "express-jwt"

const jwt = expressjwt

const mongo = require('./storage/mongo')
const router = require('./routes')

const app = express()
const PORT = process.env.PORT || 8000
const SECRET = process.env.SECRET || 'noone-should-know'

app.use(BodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(BodyParser.json())

mongo.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(
    '/api',
    jwt(
        {
            secret: SECRET,
            algorithms: ["HS256"]
        }
    ).unless(
        {
            path: [
                "/api/users",
                "/api/login"
            ]
        }
    )
)
app.use('/api', router)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

export {PORT, SECRET}