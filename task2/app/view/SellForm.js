Ext.define('MyApp.view.SellForm', {
    extend: 'Ext.container.Container',
    alias: 'widget.sellForm',
    requires: [ 'MyApp.store.Currency' ],
      
      items: [{
            xtype: 'textfield',
            fieldLabel: 'amount',
            itemId: 'amount'
        },{
            xtype: 'combo',
            fieldLabel: 'Currency',
            store: Ext.create('MyApp.store.Currency'),
            displayField: 'currency',
            valueField: 'id',
            autoSelect: true,
            forceSelection: true
        }, , {
            xtype: 'splitter'
        }, {
            xtype: 'textfield',
            fieldLabel: 'rate',
            itemId: 'rate',
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: 'result sum',
            itemId: 'result',
            readOnly: true,
        }, {
            xtype: 'button',
            itemId: 'sellBtn',
            text: 'Submit',
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