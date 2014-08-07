Ext.define('MyApp.store.Currency', {
	extend: 'Ext.data.Store',
	model: 'MyApp.model.Currency',
	proxy : {
        type : 'ajax',
        url: 'data/currencies.json',
        reader : {
            root : 'data'
        }
    }
});