Ext.define('MyApp.model.Log', {
	extend: 'Ext.data.Model',
	fields : [
	    {name : 'operation', type : 'string'},
	    {name : 'date', type : 'date'},
	    {name : 'type', type : 'string'},
	    {name : 'amount', type : 'number'},
	    {name : 'rate', type : 'number'},
	    {name : 'result', type : 'number'}
	]
});