Ext.define('MyApp.view.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.grid',
    requires: [ 'MyApp.store.Log' ],
    store: Ext.create('MyApp.store.Log'),
    columns: [
        { 
            text: 'Operation',
            dataIndex: 'operation',
            flex: 1
        }, { 
            text: 'Date',
            dataIndex: 'date',
            renderer: Ext.util.Format.dateRenderer('j F Y'),
            flex: 1
        }, {
            text: 'Type',
            dataIndex: 'type',
            flex: 1
        }, {
            text: 'Amount',
            dataIndex: 'amount',
            flex: 1
        }, {
            text: 'Rate',
            dataIndex: 'rate',
            flex: 1
        }, {
            text: 'Result sum',
            dataIndex: 'result',
            renderer: Ext.util.Format.numberRenderer('0,0.00'),
            flex: 1
        },
    ]
});