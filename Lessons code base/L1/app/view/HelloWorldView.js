Ext.define('HW.view.HelloWorldView', {
  extend: 'Ext.container.Container',
  alias: 'widget.helloWorldView',
  layout: {
	    type: 'vbox',
		align: 'stretch'
	  },
	  items: [
	    {
		  xtype: 'box',
		  itemId: 'boxx',
		  id: 'id',
		  flex: 1,
		  html: '<b>Hello!</b>'
		},
		{
		  xtype: 'button',
		  flex: 2,
		  
		  text: '<b>World!</b>',
		  handler: function(btn) {
		    //btn.up('helloWorldView').down('#boxx').update('xxx');
		  },
		  listeners: {
		    'click': function(btn) {
			  //btn.up('helloWorldView').down('#boxx').update('yyy');
			}
		  }
		}
	  ],
   constructor: function(params) {
     var me = this;
	 
	 me.callParent([params]);
	 
   },
   initComponent: function() {
	 var me = this;
	 
	 me.callParent(arguments);
	 me.down('button').addListener('click', function(btn) {
	    btn.up('helloWorldView').down('#boxx').update('zzz');
	 });
   }
});