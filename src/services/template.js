const { utilsdb } = require('mdl-oracle')

const sql_template = ''

async function get() {
    const result = await utilsdb.getDataBySQL(sql_template)
    return {
        total: result.rows.length,
        template: result.rows
    }
}

module.exports.get = get