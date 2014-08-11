Ext.define('MyApp.view.BuyForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.buyForm',
    requires: [ 'MyApp.store.Currency' ],
      
      items: [{
            xtype: 'textfield',
            fieldLabel: 'First name',
            itemId: 'fName',
            margin: '3 0 0 10'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Last name',
            itemId: 'lName',
            margin: '3 0 0 10'
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Age',
            itemId: 'age',
            minValue: 0,
            margin: '3 0 0 10'
        }, {
            xtype: 'numberfield',
            fieldLabel: 'amount',
            itemId: 'buyAmount',
            value: '0',
            minValue: 0,
            margin: '3 0 0 10'
        }, {
            xtype: 'combo',
            itemId: 'buyCombo',
            fieldLabel: 'Currency',
            store: Ext.create('MyApp.store.Currency'),
            displayField: 'currency',
            valueField: 'id',
            autoSelect: true,
            forceSelection: true,
            margin: '3 0 0 10'
        }, {
            xtype: 'displayfield',
            fieldLabel: 'rate',
            itemId: 'buyRate',
            value: '0',
            margin: '3 0 0 10'
        }, {
            xtype: 'displayfield',
            fieldLabel: 'result sum',
            itemId: 'buyResult',
            value: '0',
            margin: '3 0 0 10'
        }, {
            xtype: 'button',
            text: 'Submit',
            margin: '3 0 0 10'
        }],

        initComponent: function() {
            var me = this;
            var amount, operation, rate, result = 0;

            me.callParent(arguments);
            me.down('button').addListener('click', function(btn){
                var form = btn.up(); 
                var top = form.up().up();
                var st = top.down('grid').getStore();
                var newModel = Ext.ModelManager.create({
                    operation: operation,
                    date: new Date(),
                    type: "Buy",
                    amount: amount,
                    rate: rate,
                    result: result
                }, 'MyApp.model.Log');

                if (result !== 0) {
                    st.add(newModel);
                }

                form.hide();
                top.down('#checkbox2').setValue(false);
                top.down('#checkbox1').setDisabled(false);
                top.down('image').show();

                top.down('#fName').setValue('');
                top.down('#lName').setValue('');
                top.down('#age').setValue('');
                top.down('#buyCombo').setValue('');
                top.down('#buyAmount').setValue(0);
                top.down('#buyRate').setValue(0);
            });

            me.down('#buyAmount').addListener('change', function(){
                amount = me.down('#buyAmount').getValue();
                result = amount * me.down('#buyRate').getValue();
                me.down('#buyResult').setValue(result);
            });

            me.down('combo').addListener('change', function(combo, newvalue, oldvalue) {
                if (newvalue === 0) {
                    operation = "USD";
                    rate = 10350;
                }
                if (newvalue === 1) {
                    operation = "EUR";
                    rate = 13860;
                }
                if (newvalue === 2) {
                    operation = "RUR";
                    rate = 284.50;
                }
                result = me.down('#buyAmount').getValue() * rate;
                me.down('#buyRate').setValue(rate);
                me.down('#buyResult').setValue(result);
            });
        }
});