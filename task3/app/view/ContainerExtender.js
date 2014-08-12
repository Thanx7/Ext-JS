Ext.define('MyApp.view.ContainerExtender', {
    extend: 'Ext.container.Container',
    alias: 'widget.containerExtender',
    requires: [ 'MyApp.view.SellForm', 'MyApp.view.BuyForm', 'MyApp.view.Grid' ],
    layout: {
        type: 'border'
    },

	items: [{
        title: 'Main panel',
        region: 'north',
        xtype: 'panel',
        collapsed: false,
        collapsible: true,
        margin: '10 30 10 30',
        bodyPadding: 10,
        flex: 2,
        items: [{
            xtype: 'fieldcontainer',
            fieldLabel: 'Check state',
            defaultType: 'checkboxfield',
            items: [{
                boxLabel: 'Sell',
                itemId: 'checkbox1'
            }, {
                boxLabel: 'Buy',
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
        margin: '0 30 10 30',
        bodyPadding: 3,
        flex: 4,
        items: [{
            xtype: 'image',
            src: 'resources/images/welcome_hey.jpg'
        },  {
            xtype: 'sellForm',
            title: 'Sell',
            border: 0,
            hidden: true
        }, {
            xtype: 'buyForm',
            title: 'Buy',
            border: 0,
            hidden: true
        }]
    },  {
        title: 'View operations',
        region: 'south',
        xtype: 'grid',
        margin: '0 30 10 30',
        hidden: true,
        flex: 5
    }]
});