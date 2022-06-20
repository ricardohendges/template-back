const request = require('supertest')
const {app} = require('../src/index')

describe('TEMPLATE', () => {
    test('Template | 01 - CONSULTA FULL (200)', done => {
        try {
            request(app).get('/endpoint')
                .send({ 'parametro1': 1, 'parametro2': 2})
                .then((res) => {
                    expect(res.status).toEqual(200)
                    done()
                })
        }catch (err) {
            done()
        }}
    )

    test('Template | 02 - CONSULTA SEM PARAMETRO (400)', done => {
        try {
            request(app).get('/endpoint')
                .then((res) => {
                    expect(res.status).toEqual(400)
                    done()
                })
        }catch (err) {
            done()
        }}
    )
})

module.exports.describe = describe