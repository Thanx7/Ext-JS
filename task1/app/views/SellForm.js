var store = Ext.create('Ext.data.Store', {
autoLoad : true,
fields : [
    {name : 'id', type : 'int'},
    {name : 'currency', type : 'string'}
],
data : [
    {"id" : 0, "currency" : "USD"},
    {"id" : 1, "currency" : "EUR"},
    {"id" : 2, "currency" : "RUR"}
]
});

Ext.define('MyApp.views.SellForm', {
    extend: 'Ext.container.Container',
    alias: 'widget.sellForm',

    layout: {
        type: 'fit'
      },
      
      items: [{
            xtype: 'label',
            text: 'amount',
            style: {
                margin: '10px 0 0 50px',
            }
        }, {
            xtype: 'textfield',
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
        },{
            xtype: 'combo',
            fieldLabel: 'Currency',
            queryMode:'local',
            store : store,
            displayField: 'currency',
            valueField : 'id',
            autoSelect:true,
            forceSelection:true,
            style: {
                margin: '10px 0 0 50px',
            },
            listeners: {
                'change' : function(combo, newvalue, oldvalue) {
                if (newvalue === 0) {
                    Ext.getCmp('rate').setValue(10340);
                }
                if (newvalue === 1) {
                    Ext.getCmp('rate').setValue(13880);
                }
                if (newvalue === 2) {
                    Ext.getCmp('rate').setValue(289.50);
                }                                                        
            }}
        }, , {
            xtype: 'splitter',
            style: {
                margin: '20px',
            }
        }, {
            xtype: 'label',
            text: 'rate',
            style: {
                margin: '10px 0 0 50px',
            }
        }, {
            xtype: 'textfield',
            id: 'rate',
            readOnly: true,
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
            text: 'result sum',
            style: {
                margin: '10px 0 0 50px',
            }
        }, {
            xtype: 'textfield',
            id: 'result',
            readOnly: true,
            style: {
                width: '50%',
                margin: 'auto'
            }
        }, {
            xtype: 'button',
            id: 'button1',
            text: 'Submit',
            style: {
                width: '20%',
                margin: '50px'
            },
            listeners: {
                'click': function(){
                Ext.getCmp('cb1').hide();
                Ext.getCmp('checkbox1').setValue(false);
                Ext.getCmp('checkbox2').setDisabled(false);
                Ext.getCmp('image1').show();
            }}
        }]

});