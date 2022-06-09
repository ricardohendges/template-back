require('./arquivo_test')

const { httpServer, connection } = require('../src/index')

beforeAll(done => {
    console.log('Iniciando testes de integração com jest!')
    connection.initialize().then(() => done())
})

afterAll(() => {
    console.log('Fechando testes de integração com jest!')
    httpServer.close()
})
