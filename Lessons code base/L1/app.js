Ext.application({
  name: 'HW',
  requires: [
    'HW.view.HelloWorldView'
  ],
  launch: function() {
    Ext.create('Ext.container.Viewport', {
	  layout: {
	    type: 'fit'
	  },
	  items: [
	    {
		  xtype: 'helloWorldView'
		}
	  ]
	});
  }
});