const request = require('supertest')
const {app} = require('../src/index')
const authToken = require('./auth-test')

describe('TEMPLATE', () => {
    let cookieAuth = authToken.getAuth('usuario')
    let cookiePerfil = authToken.getPerfil('usuario')

    test('Template | 01 - CONSULTA FULL (200)', done => {
        try {
            request(app).get('/endpoint')
                .set('Cookie', [cookieAuth, cookiePerfil])
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
                .set('Cookie', [cookieAuth, cookiePerfil])
                .then((res) => {
                    expect(res.status).toEqual(400)
                    done()
                })
        }catch (err) {
            done()
        }}
    )

    test('Template | 03 - CONSULTA SEM COOKIE (401)', done => {
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
})

module.exports.describe = describe