Ext.application({
    name: 'MyApp',
    requires: [ 'MyApp.view.SellForm', 'MyApp.view.BuyForm' ],
    launch: function() {

        var myPanel = Ext.create('Ext.Viewport', {
            title: 'Welcome!',
            layout:'border',
            cls: 'panelBackground',
            defaults: {
                collapsible: true,
                split: true,
                bodyStyle: 'padding: 15px'
            },
            items: [{
                title: 'Main panel',
                region: 'north',
                xtype: 'panel',
                collapsible: true,
                height: 150,
                margin: '30 30 0 30',
                items: [{
                    xtype: 'fieldcontainer',
                    fieldLabel: 'Check state',
                    defaultType: 'checkboxfield',
                    items: [{
                        boxLabel: 'Sell',
                        inputValue: '1',
                        id: 'checkbox1',
                        handler: function(field, value) {
                            if (value) {
                                Ext.getCmp('cb1').show();
                                Ext.getCmp('checkbox2').setDisabled(true);
                                Ext.getCmp('image1').hide();
                            } else {
                                Ext.getCmp('cb1').hide();
                                Ext.getCmp('checkbox2').setDisabled(false);
                                Ext.getCmp('image1').show();
                            }
                        }
                    }, {
                        boxLabel: 'Buy',
                        inputValue: '2',
                        id: 'checkbox2',
                        handler: function(field, value) {
                            if (value) {
                                Ext.getCmp('cb2').show();
                                Ext.getCmp('checkbox1').setDisabled(true);
                                Ext.getCmp('image1').hide();
                            } else {
                                Ext.getCmp('cb2').hide();
                                Ext.getCmp('checkbox1').setDisabled(false);
                                Ext.getCmp('image1').show();
                            }
                        }
                    }]
                }]
            },  {
                title: 'Operation',
                region: 'center',
                xtype: 'panel',
                id: 'hideablePanel',
                collapsible: false,
                margin: '4 30 30 30',
                items: [{
                    xtype: 'image',
                    id: 'image1',
                    src: 'welcome_hey.jpg',
                },  {
                    xtype: 'sellForm',
                    id: 'cb1',
                    title: 'Sell',
                    hidden: true
                }, {
                    xtype: 'buyForm',
                    id: 'cb2',
                    title: 'Buy',
                    hidden: true
                }],
            }],

        });
    },
});