Ext.define('MyApp.view.BuyForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.buyForm',
    requires: [ 'MyApp.store.Currency' ],
      
      items: [{
            xtype: 'textfield',
            fieldLabel: 'First name',
            itemId: 'fName'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Last name',
            itemId: 'lName',
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Age',
            itemId: 'age',
            minValue: 0
        }, {
            xtype: 'numberfield',
            fieldLabel: 'amount',
            itemId: 'buyAmount',
            value: '0',
            minValue: 0
        },  {
            xtype: 'combo',
            itemId: 'buyCombo',
            fieldLabel: 'Currency',
            store: Ext.create('MyApp.store.Currency'),
            displayField: 'currency',
            valueField: 'id',
            autoSelect: true,
            forceSelection: true,
        }, {
            xtype: 'splitter',
        },  {
            xtype: 'displayfield',
            fieldLabel: 'rate',
            itemId: 'buyRate',
            value: '0'
        },  {
            xtype: 'displayfield',
            fieldLabel: 'result sum',
            itemId: 'buyResult',
            value: '0'
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

                top.down('#fName').setValue('');
                top.down('#lName').setValue('');
                top.down('#age').setValue('');
                top.down('#buyAmount').setValue('0');
                top.down('#buyRate').setValue('0');
                top.down('#buyResult').setValue('0');
                top.down('#buyCombo').setValue('');                
            });

            me.down('#buyAmount').addListener('change', function(){
                me.down('#buyResult').setValue(me.down('#buyAmount').getValue() * me.down('#buyRate').getValue());
            });

            me.down('combo').addListener('change', function(combo, newvalue, oldvalue) {
                if (newvalue === 0) {
                    me.down('#buyRate').setValue(10340);
                }
                if (newvalue === 1) {
                    me.down('#buyRate').setValue(13880);
                }
                if (newvalue === 2) {
                    me.down('#buyRate').setValue(289.50);
                }
                me.down('#buyResult').setValue(me.down('#buyAmount').getValue() * me.down('#buyRate').getValue());
            });
        }
});