Ext.define('EZMoney.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            'homepanel' : 'homepanel',
            'cashbtn' : 'bashbtn'
        },
        control: {
            'cashbtn' : {
                itemtap: 'getCash'
            }
        }
    },
    getCash: function(list, index, element, record) {
        this.getHomepanel().push({
            xtype: 'panel',
            title: 'record',
            html: 'record',
            scrollable: true,
            styleHtmlContent: true
        })
    },
    //called when the Application is launched, remove if not needed
    launch: function(app) {

    }
});