const { query } = require('../configs/db')

const sql_template = ''

async function get() {
    const result = await query(sql_template)
    return {
        total: result.rows.length,
        template: result.rows
    }
}

module.exports.get = get