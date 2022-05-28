Ext.define('C.model.Entry', {
    extend: 'Ext.data.Model',
    idProperty: "id",
    schema: {
        namespace: "C.model"
    },
    identifier: {
        type: 'sequential',
        seed: 2
    },
    fields: [{
            name: 'id',
            type: 'int'
        }, {
            name: 'nombre',
            type: 'auto'
        }, {
            name: 'puesto',
            type: 'auto'
        }, {
            name: 'descripcion',
            type: 'auto'
        }, {
            name: 'fecha',
            type: 'date'
        }

    ]
});
