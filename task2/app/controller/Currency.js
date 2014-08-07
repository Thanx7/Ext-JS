Ext.define('MyApp.controller.Currency', {
	extend: 'Ext.app.Controller',
	init: function() {
		var me = this;
		me.control({
			'viewport image': {
				focus: me.onCBExpand
			}
		});
	},
	
	onCBExpand: function(cb, e) {
		Ext.Msg.alert('Hi!', 'Image has been hidden.');
	}
});