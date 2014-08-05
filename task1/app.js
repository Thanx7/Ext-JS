Ext.application({
    name: 'WP',

    launch: function() {
        var myPanel = Ext.create('Ext.Viewport', {
            title: 'Welcome!',
            layout:'border',
            defaults: {
                collapsible: true,
                split: true,
                bodyStyle: 'padding:15px'
            },
            items: [{
                region: 'north',
                collapsible: true,
                height: 150,
                minSize: 75,
                maxSize: 250,
                cmargins: '5 0 0 0',
                title: 'Main panel',
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
                                Ext.getCmp('hideablePanel').show();
                                Ext.getCmp('checkbox2').setDisabled(true);
                            } else {
                                Ext.getCmp('cb1').hide();
                                Ext.getCmp('hideablePanel').hide();
                                Ext.getCmp('checkbox2').setDisabled(false);
                            }
                        }
                    }, {
                        boxLabel: 'Buy',
                        inputValue: '2',
                        id: 'checkbox2',
                        handler: function(field, value) {
                            if (value) {
                                Ext.getCmp('cb2').show();
                                Ext.getCmp('hideablePanel').show();
                                Ext.getCmp('checkbox1').setDisabled(true);
                            } else {
                                Ext.getCmp('cb2').hide();
                                Ext.getCmp('hideablePanel').hide();
                                Ext.getCmp('checkbox1').setDisabled(false);
                            }
                        }
                    }]
                }]
            },  {
                title: 'Operation',
                region: 'center',
                id: 'hideablePanel',
                height: 150,
                minSize: 75,
                maxSize: 250,
                cmargins: '5 0 0 0',
                hidden: true,
                items: [{
                    id: 'cb1',
                    title: 'Sell',
                    xtype: 'panel',
                    hidden: true,
                    items: [{
                        xtype: 'label',
                        text: 'amount'
                    }, {
                        xtype: 'textfield',
                        name: 'amount field',
                        id: 'amount',
                        style: {
                            width: '50%',
                            margin: 'auto',
                        },
                        listeners: {
                            'change': function(){
                             Ext.getCmp('result').setValue(Ext.getCmp('amount').getValue() * Ext.getCmp('rate').getValue());
                            }
                        }
                    }, {
                        xtype: 'label',
                        text: 'rate label'
                    }, {
                        xtype: 'textfield',
                        id: 'rate',
                        name: 'rate label',
                        value: 0.8,
                        style: {
                            width: '50%',
                            margin: 'auto'
                        },
                        listeners: {
                            'change': function(){
                             Ext.getCmp('result').setValue(Ext.getCmp('amount').getValue() * Ext.getCmp('rate').getValue());
                            }
                        }
                    }, {
                        xtype: 'label',
                        text: 'result sum label'
                    }, {
                        xtype: 'textfield',
                        id: 'result',
                        name: 'result sum label',
                        style: {
                            width: '50%',
                            margin: 'auto'
                        }
                    }]
                }, {
                    id: 'cb2',
                    xtype: 'panel',
                    title: 'Buy',
                    hidden: true,
                    items: [{
                        xtype: 'label',
                        text: 'First name'
                    }, {
                        xtype: 'textfield',
                        name: 'first name field',
                        id: 'first',
                        style: {
                            width: '50%',
                            margin: 'auto'
                        }
                    }, {
                        xtype: 'label',
                        text: 'Last name'
                    }, {
                        xtype: 'textfield',
                        name: 'last name field',
                        id: 'last',
                        style: {
                            width: '50%',
                            margin: 'auto'
                        }
                    }, {
                        xtype: 'label',
                        text: 'Age'
                    }, {
                        xtype: 'textfield',
                        name: 'age field',
                        id: 'age',
                        style: {
                            width: '50%',
                            margin: 'auto'
                        }
                    }, {
                        xtype: 'label',
                        text: 'amount'
                    }, {
                        xtype: 'textfield',
                        name: 'amount field',
                        id: 'amount2',
                        style: {
                            width: '50%',
                            margin: 'auto'
                        },
                        listeners: {
                            'change': function(){
                             Ext.getCmp('result2').setValue(Ext.getCmp('amount2').getValue() * Ext.getCmp('rate2').getValue());
                            }
                        }
                    }, {
                        xtype: 'label',
                        text: 'rate label'
                    }, {
                        xtype: 'textfield',
                        id: 'rate2',
                        name: 'rate label',
                        value: 1.2,
                        style: {
                            width: '50%',
                            margin: 'auto'
                        },
                        listeners: {
                            'change': function(){
                             Ext.getCmp('result2').setValue(Ext.getCmp('amount2').getValue() * Ext.getCmp('rate2').getValue());
                            }
                        }
                    }, {
                        xtype: 'label',
                        text: 'result sum label'
                    }, {
                        xtype: 'textfield',
                        id: 'result2',
                        name: 'result sum label',
                        style: {
                            width: '50%',
                            margin: 'auto'
                        }
                    }]
                }],
            }],

            renderTo: Ext.getBody()
        });
    },

});