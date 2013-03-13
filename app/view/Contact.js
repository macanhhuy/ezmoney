Ext.define('EZMoney.view.Contact', {
    extend: 'Ext.TabPanel',
    xtype: 'contactcard',

    config: {
        items: [{

            xtype: 'toolbarcard',
            docked: 'top',
            initialize: function() {

              }

            },

            {
                xtype: 'container',
                height: '100%',
                scrollable: true,
                items:[{
                    initialize: function() {
                            var HTMLPanel = Ext.create('HTMLPanel', {

                            url: 'content/contact.html'
                        });
                            this.add(HTMLPanel);
                    }

                }
                ]



            },
            {
                xtype: 'menucard',
                docked: 'bottom'
            }



        ]
    }
});
