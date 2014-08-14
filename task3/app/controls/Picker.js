Ext.define('MyApp.controls.Picker', {
	extend: 'Ext.form.field.Picker',
	alias: 'widget.picker',
    requires: [ 'MyApp.store.Currency' ],

    createPicker: function() {
        picker = new Ext.create('Ext.container.Container', {
            extend: 'Ext.Component',
            store: Ext.create('MyApp.store.Currency'),
            tpl: Ext.create('Ext.XTemplate',
                '<tpl for=".">',
                    '<div class="x-boundlist-item">',
                        '{currency} - {rate}',
                    '</div>',
                '</tpl>'
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
            }/*,
    		listeners: {
	        }*/
        });
        return picker;
    }

});