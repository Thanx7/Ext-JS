Ext.define('HW.controller.HWController', {
	extend: 'Ext.app.Controller',
	init: function() {
		var me = this;
		me.control({
			'viewport helloWorldComponent>#cb': {
				expand: me.onCBExpand
			}
		});
	},
	
	onCBExpand: function(cb, e) {
		debugger;
		Ext.Msg.alert('Hi!', 'Combo box have been expanded.');
	}
});