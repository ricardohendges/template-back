const template = require('../controllers/template')

module.exports = (app) => {
    app.get('/template', template.get
        //#region Documentação
        /* #swagger.tags = ['TEMPLATE']
            #swagger.summary = 'Listagem'
            #swagger.responses[200] = { description: 'Sucesso!',
                schema: { 
                    "total": 1,
                    "template": [{
                        "CAMPO1": 1,
                        "CAMPO2": "TESTE"
                    }]
                }
            }
            #swagger.responses[404] = { description: 'Template não encontrada!' }
            #swagger.responses[500] = { description: 'Problema no servidor.' }
        */
        //#endregion
    )
}