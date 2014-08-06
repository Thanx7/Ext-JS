Ext.application({
    name: 'MyApp',
    requires: [ 'MyApp.view.ContainerExtender' ],
    launch: function() {

        var myPanel = Ext.create('Ext.Viewport', {
            title: 'Welcome!',
            layout: 'border',
            defaults: {
                collapsible: true,
                split: true,
            },
            items: [{
                xtype: 'containerExtender',
            }]
        });
    }

});