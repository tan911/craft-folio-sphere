import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const urlEncoded = bodyParser.urlencoded({ extended: false })
const json = bodyParser.json()

// MIDDLEWARE
app.use(urlEncoded)
app.use(json)

// ROUTES
app.use('/api/test', (req, res, next) => {
    res.status(200).json({
        status: '0k',
        name: 'test',
    })
})

export default app
