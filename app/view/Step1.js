Ext.define('EZMoney.view.Step1', {
    extend: 'Ext.Panel',
    xtype: 'step1',

    config: {

        items: [{

            xtype: 'toolbarcard',
            initialize: function() {
                //Ext.ComponentQuery.query('toolbar')[1].setTitle('Homepage');

                 }

        },

             {
                styleHtmlContent: true,
                xtype: 'container',

                layout: 'card',
                height: '100%',

                initialize: function(){
                    var HTMLPanel = Ext.create('HTMLPanel', {
                        // this is now `scrollable`, not `scroll`
                        //scroll: 'vertical',
                        scrollable: 'vertical',

                        url: 'app/sample.html'
                    });
                        this.add(HTMLPanel);
                },


            },
                {
                xtype: 'toolbar',
                docked: 'bottom',
                items:[
                {
                    xtype: 'button',
                    text:'Call'
                },
                {
                        xtype: 'spacer'
                },
                {
                    xtype: 'button',
                    text: 'Get Cash',
                    cls: 'cashbtn',
                    listeners: {
                    tap: function(){
                    var panel = Ext.create(Ext.Panel, {
                        title: 'Get Cash',
                        html: 'Hello, my name is Panel 2....',
                    });
                    console.log(this.parent.parent.parent);
                    this.parent.parent.parent.setActiveItem('getcashcard');
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
                    xtype: 'button',
                    text: 'Icon'
                }
                ]
            }
        ]
    }
});
