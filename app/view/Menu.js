Ext.define('EZMoney.view.Menu', {
    extend: 'Ext.Container',
    xtype: 'menucard',
    requires: [
        'Ext.Img'

    ],
    config: {
       items: !Ext.os.is.Phone ? [
 {
                xtype: 'toolbar',
                docked: 'bottom',

                items:[
                {
                    xtype: 'image',
                    src: 'resources/icons/phone2.png',
                    height: 32,
                    width: 32,
                    listeners: {
                        tap: function(){

                        Ext.Msg.alert('Alert', 'Call!');

                        }
                    }
                },
                {
                        xtype: 'spacer'
                },
                {
                    xtype: 'button',
                    text: 'Get Cash',
                    iconMask: true,
                    iconCls: 'coin',
                    cls: 'cashbtn',
                    listeners: {
                    tap: function(){

                    Ext.Msg.alert('Alert', 'Get Cash!');

                    // var panel = Ext.create(Ext.Panel, {
                    //     title: 'Get Cash',
                    //     html: 'Hello, my name is Panel 2....',
                    // });
                    // console.log(this.parent.parent.parent);
                    // this.parent.parent.parent.setActiveItem('getcashcard');
                    //this.parent.parent.parent.parent.parent.push(panel);
                    //Ext.Viewport.add(Ext.create('EZMoney.view.Faqs'));
                    //this.parent.parent.parent.setHtml(panel);
                }
            }
                },
                {
                        xtype: 'spacer'
                },
                {
                     xtype: 'image',
                    src: 'resources/icons/security.png',
                    height: 32,
                    width: 32,
                },
                {
                     xtype: 'image',
                    src: 'resources/icons/lock.png',
                    height: 32,
                    width: 32,
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
