Ext.define('C.Application', {
    extend: 'Ext.app.Application',
    name: 'C',
    launch: function() {

    },
    onAppUpdate: function() {
        Ext.Msg.confirm('Actualizado', 'Se actualizaron los datos ¿deseas recargar?',
            function(choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
