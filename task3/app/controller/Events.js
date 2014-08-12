Ext.define('MyApp.controller.Events', {
	extend: 'Ext.app.Controller',
	init: function() {
		var me = this;
		me.control({
			'#viewButton': {
				click: me.onClickBtn
			},
			'#checkbox1': {
				change: me.onClickCB1
			},
			'#checkbox2': {
				change: me.onClickCB2
			}
		});
	},
	
	onClickBtn: function(e) {
	    var top = e.up().up().up();
	    if (e.getText() == 'View operations') {
	        top.down('grid').show();
	        e.setText('Hide operations');
	    } else {
	        top.down('grid').hide();
	        e.setText('View operations');
	    }
	},

	onClickCB1: function(e, value) {
        var top = e.up().up().up();
        if (value) {
            top.down('sellForm').show();
            top.down('#checkbox2').setDisabled(true);
            top.down('image').hide();
        } else {
            top.down('sellForm').hide();
            top.down('#checkbox2').setDisabled(false);
            top.down('image').show();
        }
	},

	onClickCB2: function(e, value) {
        var top = e.up().up().up();
        if (value) {
            top.down('buyForm').show();
            top.down('#checkbox1').setDisabled(true);
            top.down('image').hide();
        } else {
            top.down('buyForm').hide();
            top.down('#checkbox1').setDisabled(false);
            top.down('image').show();
        }
	}
});