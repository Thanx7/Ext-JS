Ext.define('HW.store.CBStore', {
	extend: 'Ext.data.Store',
	//alias: 'store.cbStore',
	//storeId: 'cbStore',
	//singleton: true,
	model: 'HW.model.CBModel',
	proxy : {
        type : 'ajax',
        url: 'data/test.json',
        reader : {
            root : 'data'
        }
    }
});