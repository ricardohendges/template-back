const template = require('./template')
const validateJWT = require('../controllers/validateJWT')

module.exports = (app) => {
    template(app, validateJWT.verifyJWTAuth)
}