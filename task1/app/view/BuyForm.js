Ext.define('MyApp.view.BuyForm', {
    extend: 'Ext.container.Container',
    alias: 'widget.buyForm',
    requires: [ 'MyApp.store.Currency' ],

    layout: {
        type: 'fit'
      },
      
      items: [{
            xtype: 'textfield',
            fieldLabel: 'First name',
            style: {
                width: '50%',
                margin: 'auto'
            }
        }, {
            xtype: 'textfield',
            fieldLabel: 'Last name',
            style: {
                width: '50%',
                margin: 'auto'
            }
        }, {
            xtype: 'textfield',
            fieldLabel: 'Age',
            style: {
                width: '50%',
                margin: 'auto'
            }
        }, {
            xtype: 'textfield',
            fieldLabel: 'amount',
            itemId: 'amount',
            style: {
                width: '50%',
                margin: 'auto'
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
            }
        }, {
            xtype: 'splitter',
            style: {
                margin: '20px',
            }
        },  {
            xtype: 'textfield',
            fieldLabel: 'rate',
            itemId: 'rate',
            readOnly: true,
            name: 'rate label',
            style: {
                width: '50%',
                margin: 'auto'
            }
        },  {
            xtype: 'textfield',
            fieldLabel: 'result sum',
            itemId: 'result',
            readOnly: true,
            style: {
                width: '50%',
                margin: 'auto'
            }
        }, {
            xtype: 'button',
            text: 'Submit',
            style: {
                width: '20%',
                margin: '50px'
            }
        }],

        initComponent: function() {
            var me = this;
            me.callParent(arguments);
            me.down('button').addListener('click', function(btn){
                btn.up('buyForm').hide();
                Ext.getCmp('checkbox2').setValue(false);
                Ext.getCmp('checkbox1').setDisabled(false);
                Ext.getCmp('image1').show();
            });

            me.down('#amount').addListener('change', function(){
                me.down('#result').setValue(me.down('#amount').getValue() * me.down('#rate').getValue());
            });

            me.down('combo').addListener('change', function(combo, newvalue, oldvalue) {
                if (newvalue === 0) {
                    me.down('#rate').setValue(10340);
                }
                if (newvalue === 1) {
                    me.down('#rate').setValue(13880);
                }
                if (newvalue === 2) {
                    me.down('#rate').setValue(289.50);
                }
                me.down('#result').setValue(me.down('#amount').getValue() * me.down('#rate').getValue());
            });
        }
});