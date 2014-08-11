Ext.define('MyApp.view.ContainerExtender', {
    extend: 'Ext.container.Container',
    alias: 'widget.containerExtender',
    requires: [ 'MyApp.view.SellForm', 'MyApp.view.BuyForm', 'MyApp.view.Grid' ],

    layout: {
        type: 'border',
    },

	items: [{
        title: 'Main panel',
        region: 'north',
        xtype: 'panel',
        collapsed: false,
        collapsible: true,
        height: 130,
        margin: '30 30 0 30',
        items: [{
            xtype: 'fieldcontainer',
            fieldLabel: 'Check state',
            defaultType: 'checkboxfield',
            items: [{
                boxLabel: 'Sell',
                inputValue: '1',
                itemId: 'checkbox1'
            }, {
                boxLabel: 'Buy',
                inputValue: '2',
                itemId: 'checkbox2'
            }, {
                xtype: 'button',
                text: 'View operations',
                itemId: 'viewButton'
            }]
        }]
    },  {
        title: 'Operation',
        region: 'center',
        xtype: 'panel',
        collapsible: false,
        margin: '30 30 30 30',
        items: [{
            xtype: 'image',
            src: 'resources/images/welcome_hey.jpg',
        },  {
            xtype: 'sellForm',
            title: 'Sell',
            hidden: true
        }, {
            xtype: 'buyForm',
            title: 'Buy',
            hidden: true
        }],
    },  {
        title: 'Log',
        region: 'south',
        xtype: 'grid',
        margin: '0 30 30 30',
        hidden: true
    }]
});