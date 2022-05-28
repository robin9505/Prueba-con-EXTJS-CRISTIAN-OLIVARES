Ext.define('C.view.main.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'mainform',
    autoScroll: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    bodyPadding: 5,
    config: {
        currentEntry: null
    },
    bind:{
        title:'{formTitle}',
        currentEntry:'{currentEntry}'
    },
    defaults: {
        anchor: '100%',
        allowBlank: true,
        msgTarget: 'under'
    },
    items: [{
        fieldLabel: 'Id',
        name: 'id',
        xtype: 'displayfield',
        bind: {
            value: '{currentEntry.id}'
        }
    }, {
        fieldLabel: 'Nombre',
        name: 'name',
        xtype: 'textfield',
        bind: {
            value: '{currentEntry.nombre}'
        }
    }, {
        fieldLabel: 'Puesto',
        name: 'title',
        xtype: 'textfield',
        bind: {
            value: '{currentEntry.puesto}'
        }
    }, {
        fieldLabel: 'Descripcion',
        name: 'description',
        xtype: 'textareafield',
        bind: {
            value: '{currentEntry.descripcion}'
        },
        flex: 1
    }, {
        fieldLabel: 'Fecha',
        name: 'date',
        xtype: 'datefield',
        format: 'Y-m-d',
        bind: {
            value: '{currentEntry.fecha}'
        }
    }],
    buttons: [{
        text: 'Guardar',
        action: 'save',
        handler:'onFormBtnClick'
    }, {
        text: 'Cancelar',
        action: 'cancel',
        handler:'onFormBtnClick'
    }]
});
