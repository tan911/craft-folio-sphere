import http from 'http'

import app from './app'

async function start() {
    const server = http.createServer(app)
    const port = 5000

    server.listen(port, () => {
        console.log(`Server running on: \t\thttps://localhost/${port}`)
    })
}

start()
