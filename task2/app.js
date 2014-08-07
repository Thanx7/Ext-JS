Ext.application({
    name: 'MyApp',
    requires: [ 'MyApp.view.ContainerExtender' ],

    launch: function() {

        var myPanel = Ext.create('Ext.Viewport', {
            layout: {
                type: 'fit'
            },
            items: [{
                xtype: 'containerExtender',
            }]
        });
    }

});