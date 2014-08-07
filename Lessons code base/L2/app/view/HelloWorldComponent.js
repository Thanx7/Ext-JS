Ext.define('HW.view.HelloWorldComponent', {
	extend: 'Ext.container.Container',
	alias: 'widget.helloWorldComponent',
	requires: [
		'HW.store.CBStore'
	],
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
			},
			{
				xtype: 'combobox',
				fieldLabel: 'combo box',
				valueField: 'uri',
				displayField: 'value',
				store: Ext.create('HW.store.CBStore'),
				itemId: 'cb',
				listeners: {
					change: function(cb, newValue, oldValue, e) {
						console.dir(e);
						alert('Data changed ' + cb.getValue() + ' ' + cb.getRawValue());
					}
				}
			}
		]
});