require('./arquivo_test')

const { httpServer } = require('../src/index')

beforeAll(done => {
    console.log('Iniciando testes de integração com jest!')
})

afterAll(() => {
    console.log('Fechando testes de integração com jest!')
    httpServer.close()
})
