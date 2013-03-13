Ext.define('EZMoney.view.Home', {
    extend: 'Ext.Container',

    requires: [
        'Ext.SegmentedButton',
        'EZMoney.view.Toolbar',
        'EZMoney.view.Menu',
        'Ext.Ajax',
        'HTMLPanel'
    ],
    xtype: 'homecard',
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

                            url: 'content/home.html'
                        });
                            this.add(HTMLPanel);
                    }

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
