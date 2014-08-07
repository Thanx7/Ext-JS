Ext.define('MyApp.view.ContainerExtender', {
    extend: 'Ext.container.Container',
    alias: 'widget.containerExtender',
    requires: [ 'MyApp.view.SellForm', 'MyApp.view.BuyForm' ],

    layout: {
        type: 'border',
    },

	items: [{
        title: 'Main panel',
        region: 'north',
        xtype: 'panel',
        collapsed: false,
        collapsible: true,
        height: 100,
        margin: '30 30 0 30',
        items: [{
            xtype: 'fieldcontainer',
            fieldLabel: 'Check state',
            defaultType: 'checkboxfield',
            items: [{
                boxLabel: 'Sell',
                inputValue: '1',
                itemId: 'checkbox1',
                handler: function(field, value) {
                    var top = field.up().up().up();
                    if (value) {
                        top.down('sellForm').show();
                        top.down('#checkbox2').setDisabled(true);
                        top.down('image').hide();
                    } else {
                        top.down('sellForm').hide();
                        top.down('#checkbox2').setDisabled(false);
                        top.down('image').show();
                    }
                }
            }, {
                boxLabel: 'Buy',
                inputValue: '2',
                itemId: 'checkbox2',
                handler: function(field, value) {
                    var top = field.up().up().up();
                    if (value) {
                        top.down('buyForm').show();
                        top.down('#checkbox1').setDisabled(true);
                        top.down('image').hide();
                    } else {
                        top.down('buyForm').hide();
                        top.down('#checkbox1').setDisabled(false);
                        top.down('image').show();
                    }
                }
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
    }],

});