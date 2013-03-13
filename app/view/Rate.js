Ext.define('EZMoney.view.Rate', {
    extend: 'Ext.Panel',
    xtype: 'ratecard',
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

                            url: 'content/rates.html'
                        });
                            this.add(HTMLPanel);
                    }

                },
                {
                      items: [
                           {

                                xtype: 'selectfield',

                                options: [
                                    {text:'Select a State',value:''},
                                    {text: 'Texas',  value: 'Texas'},
                                    {text: 'Louisiana', value: 'Louisiana'},
                                    {text: 'Missouri',  value: 'Missouri'},
                                    {text: 'Ohio',  value: 'Ohio'}
                                ]

                    }
                    ]
                },
                {
                        xtype: 'panel',
                        layout: {
                            type: 'vbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                         {
                        xtype: 'button',
                        text:'Apply Now'
                        },
                        {
                            xtype: 'segmentedbutton',
                            allowDepress: false,
                            items: [
                                { text: 'Button 1',  handler: function() {  } },
                                { text: 'Button 2', handler: function() {  } },
                                { text: 'Button 3',    handler: function() {  } }
                            ]
                        }
                        ]
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
