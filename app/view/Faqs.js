Ext.define('EZMoney.view.Faqs', {
    extend: 'Ext.Container',
    requires: [
        'Ext.SegmentedButton',
        'EZMoney.view.Toolbar'
    ],
    xtype: 'faqscard',

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

                        url: 'content/faqs.html'
                    });
                        this.add(HTMLPanel);
                },


            },
                {
                xtype: 'menucard',
                docked: 'bottom'
            }
        ]
    }
});
