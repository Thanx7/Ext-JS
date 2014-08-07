Ext.define('MyApp.store.Currency', {
	extend: 'Ext.data.Store',
	fields : [
	    {name : 'id', type : 'int'},
	    {name : 'currency', type : 'string'}
	],
	data : [
	    {"id" : 0, "currency" : "USD"},
	    {"id" : 1, "currency" : "EUR"},
	    {"id" : 2, "currency" : "RUR"}
	],
	autoLoad: true
});