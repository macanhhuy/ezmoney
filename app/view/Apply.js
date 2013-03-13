Ext.define('EZMoney.view.Apply', {
    extend: 'Ext.Container',

    requires: [
        'Ext.SegmentedButton',
        'EZMoney.view.Toolbar',
        'Ext.Ajax',
        'HTMLPanel'
    ],
    xtype: 'applycard',
    config: {

        items: [{

            xtype: 'toolbarcard',
            initialize: function() {
                //Ext.ComponentQuery.query('toolbar')[1].setTitle('Homepage');

                 }

        },

             {
                xtype: 'container',

                height: '100%',
                scrollable: 'vertical',
                items:[
                {
                    xtype: 'titlebar',
                    title: 'Apply',
                    margin: '0 0 20px 0'
                },
                {
                    style: 'padding: 0 10px',
                    html: 'THIS IS AN EXPENSIVE FORM OF CREDIT. A SHORT TERM LOAN SHOULD BE USED FOR SHORT-TERM FINANCIAL NEEDS ONLY, NOT AS A LONG-TERM FINANCIAL SOLUTION. CUSTOMERS WITH CREDIT DIFFICULTIES SHOULD SEEK CREDIT COUNSELING OR MEET WITH A NONPROFIT FINANCIAL COUNSELING SERVICE IN THEIR COMMUNITY.'
                },
                {
                xtype: 'panel',
                id: 'applyform',
                height: '100%',
                layout: 'fit',
                items:[

                    {
                    xtype: 'carousel',
                    id: 'carousel-form',

                    items:[
                        {
                          xtype: 'formpanel',
                           items: [
                            {
                                xtype: 'fieldset',
                                title: 'Step 1 - Contact Information',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        name: 'fname',
                                        label: 'First Name'
                                    },
                                     {
                                        xtype: 'textfield',
                                        name: 'lname',
                                        label: 'Last Name'
                                    },
                                    {
                                        xtype: 'emailfield',
                                        name: 'email',
                                        label: 'Email'
                                    },
                                     {
                                        xtype: 'emailfield',
                                        name: 'cemail',
                                        label: 'Confirm Email'
                                    },
                                    {
                                        xtype: 'numberfield',
                                        label: 'Mobile Phone #',
                                        name: 'mobile'
                                    },
                                     {
                                        xtype: 'segmentedbutton',
                                        layout: {
                                        type: 'hbox',
                                        align: 'center',
                                        pack: 'center'
                                            },
                                         items: [

                                        {
                                            text: 'Next',
                                             handler: function() {
                                                console.log(this.parent.parent.parent.parent);
                                                this.parent.parent.parent.parent.next(); }

                                        }
                                        ]
                                    }
                                    ]
                            }]
                        },
                        {
                                xtype: 'fieldset',
                                title: 'Step 2 - Military Service',
                                items: [
                                    {
                                        xtype: 'radiofield',
                                        name : 'step2',
                                        value: 'a',
                                        label: 'I AM A',
                                        checked: true
                                    },
                                    {
                                        xtype: 'radiofield',
                                        name : 'step2',
                                        value: 'b',
                                        label: 'I AM B'
                                    },
                                    {
                                        xtype: 'radiofield',
                                        name : 'step2',
                                        value: 'b',
                                        label: 'I AM C'
                                    },
                                    {
                                        xtype: 'segmentedbutton',
                                        layout: {
                                        type: 'hbox',
                                        align: 'center',
                                        pack: 'center'
                                    },
                                         items: [
                                        {
                                            text: 'Back',
                                             handler: function() {
                                                console.log(this.parent.parent.parent);
                                                this.parent.parent.parent.previous(); }
                                        },
                                        {
                                            text: 'Next',
                                             handler: function() {
                                                console.log(this.parent.parent.parent);
                                                this.parent.parent.parent.next(); }

                                        }
                                        ]
                                    }

                                    ]

                        },
                        {
                                xtype: 'fieldset',
                                title: 'Step 3 - Personal Information',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        name: 'address1',
                                        label: 'Address 1'
                                    },
                                     {
                                        xtype: 'textfield',
                                        name: 'address2',
                                        label: 'Address 2'
                                    },
                                     {
                                        xtype: 'textfield',
                                        name: 'city',
                                        label: 'City'
                                    },
                                    {
                                        xtype: 'numberfield',
                                        label: 'Zip',
                                        name: 'zip'
                                    },
                                     {
                                        xtype: 'numberfield',
                                        label: 'Secondary Phone',
                                        name: 'phone'
                                    },
                                    {
                                        xtype: 'datepickerfield',
                                        name: 'dob',
                                        label: 'Date of Birth'
                                    },
                                     {
                                        xtype: 'textfield',
                                        name: 'ssn',
                                        label: 'Social Security Number'
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: 'ssn2',
                                        label: 'Comfirm Social Security Number'
                                    },
                                     {
                                        xtype: 'textfield',
                                        name: 'dln',
                                        label: 'Driver License Number'
                                    },
                                     {
                                        xtype: 'segmentedbutton',
                                        layout: {
                                        type: 'hbox',
                                        align: 'center',
                                        pack: 'center'
                                            },
                                         items: [

                                            {
                                                text: 'Back',
                                                 handler: function() {
                                                    console.log(this.parent.parent.parent);
                                                    this.parent.parent.parent.previous(); }
                                            },
                                            {
                                                text: 'Next',
                                                 handler: function() {
                                                    console.log(this.parent.parent.parent);
                                                    this.parent.parent.parent.next(); }

                                            }
                                        ]
                                    }
                                    ]
                            }
                        ,
                        {
                            style: 'background: green',
                            html: 'Step4'
                        },
                        {
                            style: 'background: pink',
                            html: 'Step5'
                        }
                    ]
                    }
                ]
                }]

            },
             {
                xtype: 'menucard',
                docked: 'bottom'
            }

        ]
    }
});
