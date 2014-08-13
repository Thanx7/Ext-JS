Ext.define('MyApp.view.SellForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.sellForm',
    requires: [ 'MyApp.store.Currency'/*, 'MyApp.controls.Picker' */],

    items: [{
        xtype: 'numberfield',
        fieldLabel: 'amount',
        itemId: 'sellAmount',
        value: 0,
        minValue: 0,
        margin: '3 0 0 10'
    },{
        //xtype: 'picker',
        xtype: 'combo',
        tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
                '<div class="x-boundlist-item">',
                    '{currency} - {rate}',
                '</div>',
            '</tpl>'
        ),
        fieldLabel: 'Currency',
        displayField: 'currency',
        multiSelect: false,
        store: Ext.create('MyApp.store.Currency'),
        valueField: 'id',
        itemId: 'sellCombo',
        margin: '3 0 0 10'
    }, {
        xtype: 'displayfield',
        fieldLabel: 'rate',
        itemId: 'sellRate',
        value: '0',
        renderer: Ext.util.Format.numberRenderer('0,0.00'),
        margin: '3 0 0 10'
    }, {
        xtype: 'displayfield',
        fieldLabel: 'result sum',
        itemId: 'sellResult',
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
                    type: "Sell",
                    amount: amount,
                    rate: rate,
                    result: result
                });
            }

            form.hide();
            top.down('#checkbox1').setValue(false);
            top.down('#checkbox2').setDisabled(false);
            top.down('image').show();

            top.down('#sellCombo').setValue('');
            top.down('#sellAmount').setValue(0);
            top.down('#sellRate').setValue(0);
        });

        me.down('#sellAmount').addListener('change', function(){
            amount = me.down('#sellAmount').getValue();
            result = amount * me.down('#sellRate').getValue();
            me.down('#sellResult').setValue(result);
        });

        me.down('combo').addListener('change', function(combo, newvalue, oldvalue) {
            if (newvalue !== '') {
                var st = combo.getStore();
                var currencyRawData = st.getProxy().getReader().rawData;
                operation = currencyRawData['data'][newvalue]['currency'];
                rate = currencyRawData['data'][newvalue]['rate'];
                result = me.down('#sellAmount').getValue() * rate;
                me.down('#sellRate').setValue(rate);
                me.down('#sellResult').setValue(result);
            }
        });
    }
});