Ext.define('MyApp.store.Log', {
	extend: 'Ext.data.Store',
	model: 'MyApp.model.Log',
    autoLoad: true,
	proxy : {
        type : 'ajax',
        api: {
            read: 'data/log.json'
        },        
        reader : {
            root : 'data'
        }
    }
});