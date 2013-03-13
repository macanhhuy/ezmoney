Ext.define('HTMLPanel', {
    extend: 'Ext.Panel',

    // We are using Ext.Ajax, so we should require it
    requires: ['Ext.Ajax'],

    config: {
        listeners: {
            activate: 'onActivate'
        },
        style:'padding:10px;',
        // Create a new configuration called `url` so we can specify the URL
        url: null
    },

    onActivate: function(me, container) {
        Ext.Ajax.request({
            // we should use the getter for our new `url` config
            url: this.getUrl(),
            method: "GET",
            success: function(response, request) {
                // We should use the setter for the HTML config for this
                me.setHtml(response.responseText);
            },
            failure: function(response, request) {
                me.setHtml("failed -- response: " + response.responseText);
            }
        });
    }
});