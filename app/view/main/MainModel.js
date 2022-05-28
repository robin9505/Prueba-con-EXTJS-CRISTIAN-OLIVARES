Ext.define('C.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    requires: [
        'C.model.Entry'
    ],

    data: {
        name: 'CRUD CON EXTJ',
        gridTitle: 'Entradas',
        formTitle: 'Formulario',
        
        addBtnText: 'Agrega un registro',
        delBtnText: 'Eliminar',
       
        currentEntry: null
    },

    stores: {
        entries: {
            model: 'Entry',
            data: [ {
                id: 1,
                nombre: 'Cristian Olivares',
                puesto: 'Programador',
                descripcion: 'Desarrollador Fullstack',
                fecha: '2022-05-27'
            }]
        }
    }

});
