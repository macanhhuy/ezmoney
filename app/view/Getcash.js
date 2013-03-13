Ext.define('EZMoney.view.Getcash', {
    extend: 'Ext.Container',

    requires: [
        'Ext.SegmentedButton',
         'EZMoney.view.Toolbar'
    ],
    xtype: 'getcashcard',
     config: {
        items: [{

            xtype: 'toolbarcard',
            initialize: function() { 
                console.log();
                this.query('toolbar')[1].setTitle('Get Cash');

                 }

        },

             {
                styleHtmlContent: true,
                xtype: 'panel',
                id: 'getcash',
                title: 'Get Cash',
                layout: 'card',
                html: '<h2>Get Cash</h2><p>The toolbar for this item is at the bottom, which has a slideButton and uses a different icon.</p>'
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
