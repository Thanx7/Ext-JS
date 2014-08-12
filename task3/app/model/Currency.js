Ext.define('MyApp.model.Currency', {
	extend: 'Ext.data.Model',
	fields : [
	    {name : 'id', type : 'int'},
	    {name : 'currency', type : 'string'},
	    {name : 'rate', type: 'number'}
	]
});