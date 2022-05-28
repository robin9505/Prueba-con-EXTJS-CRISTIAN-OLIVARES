Ext.define('C.view.main.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'maingrid',
    publishes:['currentEntry'],
    bind: {
        store: '{entries}',
        title: '{gridTitle}'
    },
    dockedItems: [{
        xtype: 'toolbar',
        items: ['->', {
            xtype: 'button',
            action: 'add',
            bind: '{addBtnText}',
            iconCls: 'fa-plus-circle',
            handler:  'onGridAddBtnClick'
        }]
    }],
    columns: [{
        xtype: 'actioncolumn',
        width: 40,
        align: 'center',
        items: [{
            action: 'del',
            iconCls: 'fa-minus-circle',
            handler: 'onGridDelBtnClick'
        }]
    }, {
        text: 'Id',
        dataIndex: 'id',
        width: 60
    }, {
        text: 'Nombre',
        dataIndex: 'nombre',
        width: 120,
        editor: 'textfield'
    }, {
        text: 'Puesto',
        dataIndex: 'puesto',
        width: 120,
        editor: 'textfield'
    }, {
        text: 'Descripcion',
        dataIndex: 'descripcion',
        flex: 1,
        editor: 'textfield'
    }, {
        text: 'Fecha',
        dataIndex: 'fecha',
        width: 100,
        xtype: 'datecolumn',
        format: 'Y-m-d',
        editor: 'datefield'
    }],

    listeners: {
        select: 'onGridRowSelect'
    }
});
