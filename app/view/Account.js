Ext.define('EZMoney.view.Account', {
    extend: 'Ext.TabPanel',
    xtype: 'accountcard',

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
                height: '100%',

                initialize: function(){
                    var HTMLPanel = Ext.create('HTMLPanel', {
                        url: 'content/account.html'
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
