Ext.define('MyApp.view.SellForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.sellForm',
    requires: [ 'MyApp.store.Currency' ],
      
      items: [{
            xtype: 'numberfield',
            fieldLabel: 'amount',
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
            me.callParent(arguments);
            me.down('button').addListener('click', function(btn){
                var top = btn.up().up().up();
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
                me.down('#sellResult').setValue(me.down('#sellAmount').getValue() * me.down('#sellRate').getValue());
            });

            me.down('combo').addListener('change', function(combo, newvalue, oldvalue) {
                if (newvalue === 0) {
                    me.down('#sellRate').setValue(10340);
                }
                if (newvalue === 1) {
                    me.down('#sellRate').setValue(13880);
                }
                if (newvalue === 2) {
                    me.down('#sellRate').setValue(289.50);
                }
                me.down('#sellResult').setValue(me.down('#sellAmount').getValue() * me.down('#sellRate').getValue());
            });
        }
});