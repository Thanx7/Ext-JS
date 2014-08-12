Ext.define('MyApp.controls.Picker', {
	extend: 'Ext.form.field.Picker',
	alias: 'widget.picker',

    width: 320,
    fieldLabel: 'Currency',

    createPicker: function() {
        picker = new Ext.create('Ext.grid.Panel', {
            floating: true,
		    store: Ext.create('MyApp.store.Currency').load(),
		    columns: [
		        {text: 'Currency',  dataIndex: 'currency'},
		        {text: 'Rate',  dataIndex: 'rate', flex: 1}
		    ],
    		listeners: {
            	cellclick: function(view, element, index, record){
                	    Ext.Msg.alert('Selected Record', record.get('currency') + " " + record.get('rate'));
                	    this.hide();
	        	}
	        }
        });
        return picker;
    }

});