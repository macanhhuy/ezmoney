Ext.define('EZMoney.view.Main', {
    extend: 'Ext.ux.slidenavigation.View',
    requires: [
        'EZMoney.view.Home',
        'EZMoney.view.About',
        'EZMoney.view.Account',
        'EZMoney.view.Contact',
        'EZMoney.view.Faqs',
        'EZMoney.view.Privacy',
        'EZMoney.view.Rate',
        'EZMoney.view.Terms',
        'EZMoney.view.Getcash',
        'EZMoney.view.Apply',
        'Ext.ux.slidenavigation.View',
        'Ext.TabPanel',
        'Ext.TitleBar',
        'Ext.field.*',
        'Ext.carousel.Carousel',
        'Ext.MessageBox',
        'Ext.Panel',
        'Ext.Toolbar',
        'Ext.event.publisher.Dom',
        'Ext.Img',
        'Ext.form.*'

    ],

    config: {
        fullscreen: true,
        slideSelector: 'x-toolbar',
        containerSlideDelay: 10,
        selectSlideDuration: 300,
        itemMask: true,
        dragAllowed: false,
        slideButtonDefaults: {
            selector: 'toolbar'
        },
        list: {
            maxDrag: 400,
            width: 300,
            grouped: false



        },
        listPosition: 'left',
         groups: {
            'Group 1': 1,
            'Group 2': 3,
            'Group 3': 2
        },
        defaults: {
            style: 'background: #fff',
            xtype: 'container'
        },
        // tabBar: {
        //     docked: 'bottom',
        //     layout: {
        //         pack: 'center'
        //     }
        // },

        items: [
     

        {
            title: 'Apply Now',
            group: 'Group 2',

            items: [
            { xtype: 'applycard' }
            ]
        },

        {
            title: 'Home',
            group: 'Group 2',

            items: [
            { xtype: 'homecard' }
            ]
        },
           {
            title: 'My Account',
            group: 'Group 2',
            handler: function() {
                Ext.Msg.alert('Alert', 'My Account');
                console.log(this);
                //this.hide();
            },
            items: [
            { xtype: 'accountcard' }
            ]
        },
        {
            title: 'Rates & Terms',
            group: 'Group 2',
            items: [
            { xtype: 'ratecard' }
            ]
        },
        {
            title: 'FAQs',
            group: 'Group 2',
            items: [
            { xtype: 'faqscard' }
            ]
        },
        {
            title: 'Contact Us',
            group: 'Group 2',
             handler: function() {
                Ext.Msg.alert('Alert', 'Contact Us');
                console.log(this);
                //this.hide();
            },
            items: [
            { xtype: 'contactcard' }
            ]
        },
         {
            title: 'Logout',
            group: 'Group 2',
             handler: function() {
                Ext.Msg.alert('Alert', 'You have logged out!');
                console.log(this);
                //this.hide();
            }
        },
         {
            title: 'Go to EZMoney full site',
            group: 'Group 2',
             handler: function() {
                window.open('https://www.ezmoney.com/');
            }
        }

            // { xtype: 'homecard' },
            // { xtype: 'accountcard' },
            // { xtype: 'ratecard' },
            // { xtype: 'faqscard' },
            // { xtype: 'aboutcard' }
        ]
    }
});
