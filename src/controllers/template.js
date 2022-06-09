const template = require('../services/template')

async function get(req, res) {
    try {
        const rows = await template.get()
        res.status(200).json(rows)
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports.get = get
