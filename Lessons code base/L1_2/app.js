Ext.application(
{
  name: 'HW',
  requires: [
	'HW.view.HelloWorldComponent'
  ],
  launch: function() {
	Ext.create('Ext.container.Viewport', {
		layout: 'fit',
 		items: [
			{
				xtype: 'helloWorldComponent'
			}
		]
	});
	}
});