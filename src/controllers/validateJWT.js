const jwt = require('jsonwebtoken')

const verifyJWTAuth = (req, res, next) => {
    try {
        var token = req.cookies.auth
        if (!token) {
            res.status(401).json({type: 'API', message:'WITHOUT_TOKEN', detail: '' })
            return
        }
        jwt.verify(token, process.env.CERT, {algorithm: ['RS256']}, async (err, decoded) => {
            if (err) {
                res.status(500).json({type: 'API', message:'INVALID_TOKEN', detail: '' })
            } else {
                req.body.usu_login = decoded.login
                next()
            }
        })
    } catch (err) {
        res.status(500).json({type: 'API', message:'INVALID_TOKEN', detail: err.message })
    }
}

module.exports.verifyJWTAuth = verifyJWTAuth