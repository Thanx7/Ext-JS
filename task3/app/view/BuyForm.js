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
        value: 0,
        minValue: 0,
        margin: '3 0 0 10'
    }, {
        xtype: 'combo',
        store: Ext.create('MyApp.store.Currency'),
        itemId: 'buyCombo',
        fieldLabel: 'Currency',
        displayField: 'currency',
        valueField: 'id',
        margin: '3 0 0 10'
    }, {
        xtype: 'displayfield',
        fieldLabel: 'rate',
        itemId: 'buyRate',
        value: '0',
        renderer: Ext.util.Format.numberRenderer('0,0.00'),
        margin: '3 0 0 10'
    }, {
        xtype: 'displayfield',
        fieldLabel: 'result sum',
        itemId: 'buyResult',
        value: '0',
        renderer: Ext.util.Format.numberRenderer('0,0.00'), 
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

            if (result !== 0) {
                st.add({
                    operation: operation,
                    date: new Date(),
                    type: "Buy",
                    amount: amount,
                    rate: rate,
                    result: result
                });
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
            if (newvalue !== '') {
                var st = combo.getStore();
                var currencyRawData = st.getProxy().getReader().rawData;
                operation = currencyRawData['data'][newvalue]['currency'];
                rate = currencyRawData['data'][newvalue]['rate'];
                result = me.down('#buyAmount').getValue() * rate;
                me.down('#buyRate').setValue(rate);
                me.down('#buyResult').setValue(result);
            }
        });
    }
});