Ext.define('HW.view.HelloWorldComponent', {
	extend: 'Ext.container.Container',
	alias: 'widget.helloWorldComponent',
	layout: {
		  type: 'vbox',
		  align: 'center'
	},
	constructor: function(params) {
		var me = this;
		me.callParent([params]);
		me.down('button').addListener('click', function(btn) {
			btn.up('viewport').down('helloWorldComponent #aaaa').update('ccc');
		});
	},
	initComponent: function() {
	    var me = this;
		me.callParent(arguments)
	},
	items: [
			{
				xtype: 'container',
				items: [
				{
					xtype: 'box',
					itemId: 'aaaa',
					html: '<b>Hello!</b>',
					flex: 1
				}
				]
			},
			{
				xtype: 'button',
				text: 'Press me!',
				flex: 2,
				listeners: {
				  'click': function(btn) {
				      //btn.up('helloWorldComponent').down('box').update('bbb');
				  }
				  
				}/*,
				handler: function(btn) {
					btn.up('helloWorldComponent').down('box').update('aaa');
				}*/
			}
		]
});