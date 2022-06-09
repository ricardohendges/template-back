const fs = require('fs')
const jwt = require('jsonwebtoken')

function getAuth (login) {
    return 'auth=' + jwt.sign({login},
        fs.readFileSync('src/private/private.pem', 'utf8'),
        {algorithm: 'RS256', expiresIn: '1h' })
}

function getPerfil (login) {
    let perfil = {usu_login: login}
    perfil.modulos = [41]
    perfil.perfis = [191]

    return 'perfilMasterplan=' + jwt.sign({perfil}, 
        fs.readFileSync('src/private/private.pem', 'utf8'),
        {algorithm: 'RS256', expiresIn: '1h' })
}

module.exports.getAuth = getAuth
module.exports.getPerfil = getPerfil