const http = require('http')
const express = require('express')
const { connection } = require('mdl-oracle')
const cors = require('cors')
const cookie = require('cookie-parser')

const PORT = process.env.PORT_SERVER || 8000
const app = express()

let domains = process.env.APPLICATION_DOMAIN || ['http://localhost:8080']
const corsOptions = {
    origin: function (origin, callback) {
        if (domains.indexOf(origin) !== -1 || !origin) callback(null, true)
        else callback(new Error(`Not allowed by CORS? ${origin} // ${domains}`))
    }, 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', 
    credentials: true
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookie())

// Carrega todas rotas
require('./routes')(app)
app.get('/', (req, res) => res.status(200).send('API-TEMPLATE (x) UP!'))

if (process.env.NODE_ENV == 'dev') {
    // Rota para documentação
    require('./services/swagger')
    app.use('/v1/docs', express.static('src/views/swagger'))
    app.use('/docs/swagger.yaml', express.static('src/docs/swagger.yaml'))
}

const httpServer = http.createServer(app)

if (process.env.NODE_ENV != 'test') {
    httpServer.listen(PORT, async () => {
        try {
            connection.initialize()
            const { address, port, family } = httpServer.address()
            console.log(`App is running: ${family} http://${family === 'IPv6' ? `[${address}]` : address}:${port}`)
        } catch (err) {
            console.error(err)
        }
    })
}

process.on('SIGINT', () => {
    console.log('\nShutting down from SIGINT (Ctrl-C)')
    connection.close().catch((error) => {
        if (error) console.error(error)
    })
    httpServer.close((error) => {
        if (error) console.error(error.message)
    })
    process.exit(1)
})

module.exports = { httpServer, app, connection }