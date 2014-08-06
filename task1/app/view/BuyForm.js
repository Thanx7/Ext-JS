Ext.define('MyApp.view.BuyForm', {
    extend: 'Ext.container.Container',
    alias: 'widget.buyForm',
    requires: [ 'MyApp.store.Currency' ],

    layout: {
        type: 'fit'
      },
      
      items: [{
            xtype: 'label',
            text: 'First name',
            style: {
                margin: '10px 0 0 50px',
            }
        }, {
            xtype: 'textfield',
            id: 'first',
            style: {
                width: '50%',
                margin: 'auto'
            }
        }, {
            xtype: 'label',
            text: 'Last name',
            style: {
                margin: '10px 0 0 50px',
            }
        }, {
            xtype: 'textfield',
            id: 'last',
            style: {
                width: '50%',
                margin: 'auto'
            }
        }, {
            xtype: 'label',
            text: 'Age',
            style: {
                margin: '10px 0 0 50px',
            }
        }, {
            xtype: 'textfield',
            id: 'age',
            style: {
                width: '50%',
                margin: 'auto'
            }
        }, {
            xtype: 'label',
            text: 'amount',
            style: {
                margin: '10px 0 0 50px',
            }
        }, {
            xtype: 'textfield',
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
        },  {
            xtype: 'combo',
            fieldLabel: 'Currency',
            queryMode: 'local',
            store: Ext.create('MyApp.store.Currency'),
            displayField: 'currency',
            valueField: 'id',
            autoSelect: true,
            forceSelection: true,
            style: {
                margin: '10px 0 0 50px',
            },
            listeners: {
                'change' : function(combo, newvalue, oldvalue) {
                if (newvalue === 0) {
                    Ext.getCmp('rate2').setValue(10340);
                }
                if (newvalue === 1) {
                    Ext.getCmp('rate2').setValue(13880);
                }
                if (newvalue === 2) {
                    Ext.getCmp('rate2').setValue(289.50);
                }                                                        
            }}
        }, {
            xtype: 'splitter',
            style: {
                margin: '20px',
            }
        },  {
            xtype: 'label',
            text: 'rate',
            style: {
                margin: '10px 0 0 50px',
            }
        }, {
            xtype: 'textfield',
            id: 'rate2',
            readOnly: true,
            name: 'rate label',
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
            text: 'result sum',
            style: {
                margin: '10px 0 0 50px',
            }
        }, {
            xtype: 'textfield',
            id: 'result2',
            readOnly: true,
            style: {
                width: '50%',
                margin: 'auto'
            }
        }, {
            xtype: 'button',
            id: 'button2',
            text: 'Submit',
            style: {
                width: '20%',
                margin: '50px'
            },
            listeners: {
                'click': function(){
                Ext.getCmp('cb2').hide();
                Ext.getCmp('checkbox2').setValue(false);
                Ext.getCmp('checkbox1').setDisabled(false);
                Ext.getCmp('image1').show();
                }
            }
        }],

});