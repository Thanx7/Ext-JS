Ext.define('MyApp.view.SellForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.sellForm',
    requires: [ 'MyApp.store.Currency' ],
      
      items: [{
            xtype: 'numberfield',
            fieldLabel: 'amount',
            name: 'amount',
            itemId: 'sellAmount',
            value: '0',
            minValue: 0
        },{
            xtype: 'combo',
            itemId: 'sellCombo',            
            fieldLabel: 'Currency',
            store: Ext.create('MyApp.store.Currency'),
            displayField: 'currency',
            valueField: 'id',
            autoSelect: true,
            forceSelection: true
        }, , {
            xtype: 'splitter'
        }, {
            xtype: 'displayfield',
            fieldLabel: 'rate',
            itemId: 'sellRate',
            value: '0'
        }, {
            xtype: 'displayfield',
            fieldLabel: 'result sum',
            itemId: 'sellResult',
            value: '0'
        }, {
            xtype: 'button',
            text: 'Submit'
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
                    type: "Sell",
                    amount: amount,
                    rate: rate,
                    result: result
                }, 'MyApp.model.Log');

                if (result !== 0) {
                    st.add(newModel);
                }

                btn.up().hide();
                top.down('#checkbox1').setValue(false);
                top.down('#checkbox2').setDisabled(false);
                top.down('image').show();

                top.down('#sellAmount').setValue('0');
                top.down('#sellRate').setValue('0');
                top.down('#sellResult').setValue('0');
                top.down('#sellCombo').setValue('');
            });

            me.down('#sellAmount').addListener('change', function(){
                amount = me.down('#sellAmount').getValue()
                result = amount * me.down('#sellRate').getValue();
                me.down('#sellResult').setValue(result);
            });

            me.down('combo').addListener('change', function(combo, newvalue, oldvalue) {
                if (newvalue === 0) {
                    operation = "USD";
                    rate = 10350;
                    me.down('#sellRate').setValue(rate);
                }
                if (newvalue === 1) {
                    operation = "EUR";
                    rate = 13860;
                    me.down('#sellRate').setValue(rate);
                }
                if (newvalue === 2) {
                    operation = "RUR";
                    rate = 284.50;
                    me.down('#sellRate').setValue(rate);
                }
                result = me.down('#sellAmount').getValue() * me.down('#sellRate').getValue();
                me.down('#sellResult').setValue(result);
            });
        }
});