Ext.define('MyApp.controls.Picker', {
	extend: 'Ext.form.field.Picker',
	alias: 'widget.picker',

    width: 320,

    createPicker: function() {
        picker = new Ext.create('Ext.container.Container', {
            extend: 'Ext.Component',
            store: Ext.create('MyApp.store.Currency'),

            itemTpl: Ext.create('Ext.XTemplate',
                '<div>qwerty</div>'
            ),

            constructor: function(params) {
                var me = this;
                me.callParent(arguments);
                me.initConfig(params);
            },
            
            applyLink: function(link) {
                var me = this;
                me.update(link);
                return link;
            },
    		listeners: {
	        }
        });
        return picker;
    }

});