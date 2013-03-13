Ext.define('EZMoney.view.Toolbar', {
    extend: 'Ext.Container',
    xtype: 'toolbarcard',
    requires: [
        'Ext.Img'

    ],
    config: {
       items: !Ext.os.is.Phone ? [
            {
                xtype: 'toolbar',
                docked: 'top',
                ui: 'neutral',

                items:[
                {
                    xtype: 'image',
                    align: 'center',
                    src: 'resources/images/logo.png',
                    height: 24,
                    width: 139,
                    margin: '0 auto'
                }
                ]
            },
            {
                xtype: 'toolbar',
                ui: 'light',
                docked: 'top',
                scrollable: {
                    direction: 'horizontal',
                    indicators: false
                },
                initialize: function() {
                //console.log(this);
                },
                items: [
                 {
                         xtype: 'button',
                        iconMask: true,
                        iconCls: 'more',
                        handler: function() {
                            var me =  Ext.ComponentQuery.query('slidenavigationview');
                            console.log(me[0].container.getCls().indexOf('open'));
                            if(me[0].container.getCls().indexOf('open')<0){
                                me[0].fireAction('open', [me[0], 300, 300], 'moveContainer', me[0]);
                                me[0].container.addCls('open');

                            }
                            else {
                                 me[0].fireAction('close', [me[0], 0, 300], 'moveContainer', me[0]);

                                me[0].container.removeCls('open');
                            }



                        }
                    },
                     {
                        xtype: 'spacer'
                    },


                    {
                        xtype: 'button',
                        iconMask: true,
                        iconCls: 'user',
                        text: 'My Account'

                    }



                ]
            }
        ] : [
            {
            }
        ]
    }

    // @private
    // ,constructor: function() {
    //     this.on({
    //         scope: this,
    //         delegate: 'button',

    //         tap: 'tapHandler'
    //     });

    //     this.callParent(arguments);
    // },



    // tapHandler: function(button) {
    //     text = button.getText();


    //     return this;
    // }
});
