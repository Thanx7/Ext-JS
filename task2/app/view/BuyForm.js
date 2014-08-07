Ext.define('MyApp.view.BuyForm', {
    extend: 'Ext.container.Container',
    alias: 'widget.buyForm',
    requires: [ 'MyApp.store.Currency' ],
      
      items: [{
            xtype: 'textfield',
            fieldLabel: 'First name',
        }, {
            xtype: 'textfield',
            fieldLabel: 'Last name',
        }, {
            xtype: 'textfield',
            fieldLabel: 'Age',
        }, {
            xtype: 'textfield',
            fieldLabel: 'amount',
            itemId: 'amount',
        },  {
            xtype: 'combo',
            fieldLabel: 'Currency',
            store: Ext.create('MyApp.store.Currency'),
            displayField: 'currency',
            valueField: 'id',
            autoSelect: true,
            forceSelection: true,
        }, {
            xtype: 'splitter',
        },  {
            xtype: 'textfield',
            fieldLabel: 'rate',
            itemId: 'rate',
            readOnly: true,
            name: 'rate label',
        },  {
            xtype: 'textfield',
            fieldLabel: 'result sum',
            itemId: 'result',
            readOnly: true,
        }, {
            xtype: 'button',
            text: 'Submit',
        }],

        initComponent: function() {
            var me = this;
            me.callParent(arguments);
            me.down('button').addListener('click', function(btn){
                var top = btn.up().up().up();
                btn.up().hide();
                top.down('#checkbox2').setValue(false);
                top.down('#checkbox1').setDisabled(false);
                top.down('image').show();
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