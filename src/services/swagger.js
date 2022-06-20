const swaggerAutogen = require('swagger-autogen')('pt-BR')
let fs = require('fs')

const HOST = process.env.HOST_SERVER || 'localhost'
const GATEWAY = process.env.PORT_GATEWAY || 8000

const doc = {
    info: {
        version: '1.0.0',
        title: 'API TEMPLATE',
        description: 'Documentação da API TEMPLATE'
    },
    host: `${HOST}${GATEWAY ? ':' : ''}${GATEWAY}`,
    basePath: process.env.URL_DOCUMENTACAO||'',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
}

const outputFile = './src/docs/swagger.yaml'
const endpointsFiles = ['./src/routes/template.js']

swaggerAutogen(outputFile, endpointsFiles, doc)

fs.readFile('src/views/index.html', 'utf8', function (err,data) {
    if (err) return console.log(err)
    let linhas = data.split('\n').filter(a => a.includes('url:'))
    let result = data.replace(linhas, `          url: "${process.env.URL_DOCUMENTACAO||''}/docs/swagger.yaml", `)
    fs.writeFile('src/views/index.html', result, 'utf8', function (err) {
        if (err) return console.log(err)
    })
})
