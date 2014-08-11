Ext.define('MyApp.store.Log', {
	extend: 'Ext.data.Store',
	model: 'MyApp.model.Log',
	proxy : {
        type : 'ajax',
        url: 'data/log.json',
        reader : {
            root : 'data'
        }
    },
    autoLoad: true,
});