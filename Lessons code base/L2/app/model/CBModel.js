Ext.define('HW.model.CBModel', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'uri', type: 'int'},
		{ name: 'value', type: 'string'}
	],
	idProperty: 'uri'
});