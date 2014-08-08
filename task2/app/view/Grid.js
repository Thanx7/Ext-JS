Ext.define('MyApp.view.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.grid',
    requires: [ 'MyApp.store.Log' ],
    store: Ext.create('MyApp.store.Log'),
    columns: [
        { text: 'Operation',  dataIndex: 'operation' },
        { text: 'Date', dataIndex: 'date', width: 400 },
        { text: 'Type', dataIndex: 'type' },
        { text: 'Amount', dataIndex: 'amount' },
        { text: 'Rate', dataIndex: 'rate' },
        { text: 'Result sum', dataIndex: 'result' },
    ],
});