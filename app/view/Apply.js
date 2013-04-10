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
            docked: 'top'


            },

            {
                xtype: 'panel',
                layout: 'vbox',
                height: '100%',
                id: 'applyform',
                items:[
                    {
                        xtype: 'panel',
                        flex: !Ext.os.is.Phone?1:2,
                        items:[
                            {
                                xtype: 'titlebar',
                                cls: 'main-heading',
                                title: 'Apply'
                            },
                            {
                                defaults: { styleHtmlContent: true },
                                style: 'color: red;padding: 10px;',
                               
                                html: ' WARNING: IT IS IMPORTANT TO FILL OUT THIS FORM ACCURATELY. KNOWINGLY MAKING A FALSE STATEMENT ON A CREDIT APPLICATION IS A CRIME'
                            }
                        ]
                    },

                    //Carousel
                     {
                    xtype: 'carousel',
                    flex: 2,
                    items:[
                    {
                        xtype: 'panel',
                        scrollable: 'vertical',
                        items:[

                            {
                                xtype: 'fieldset',
                                height: '100%',
                                title: 'Step 1 - Contact Information',
                                cls: 'sub-headline',
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

                            }]
                        }
                        ]
                    },
                    {
                        xtype: 'panel',
                        scrollable: 'vertical',
                        items:[
                            {
                                xtype: 'fieldset',
                                height: '100%',
                                cls: 'sub-headline',
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
                                        xtype: 'panel',
                                        layout: 'hbox',
                                         items: [
                                        {   xtype: 'button',
                                            text: 'Back',
                                            align: 'left',
                                            width: 100,
                                            ui: 'back',
                                             handler: function() {

                                                this.parent.parent.parent.parent.previous(); }
                                        },
                                        {
                                            xtype: 'spacer'
                                        },
                                        {
                                            xtype: 'button',
                                            text: 'Next',
                                            align: 'right',
                                            width: 100,
                                             handler: function() {
                                               this.parent.parent.parent.parent.next(); }

                                        }
                                        ]
                                    }

                                    ]

                        }
                        ]
                    },
                    {
                        xtype: 'panel',
                        scrollable: 'vertical',
                        items:[
                         {
                                xtype: 'fieldset',
                                height: '100%',
                                cls: 'sub-headline',
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
                                        xtype: 'panel',
                                        layout: {
                                        type: 'hbox'
                                            },
                                         items: [

                                            {
                                                xtype: 'button',
                                                text: 'Back',
                                                ui: 'back',
                                                width: 100,
                                                 handler: function() {
                                                    this.parent.parent.parent.parent.previous(); }
                                            },
                                             {
                                            xtype: 'spacer'
                                            },
                                            {
                                                xtype: 'button',
                                                text: 'Next',
                                                width: 100,
                                                 handler: function() {
                                                    this.parent.parent.parent.parent.next(); }

                                            }
                                        ]
                                    }
                                    ]
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        scrollable: 'vertical',
                        items:[
                         {
                                xtype: 'fieldset',
                                height: '100%',
                                cls: 'sub-headline',
                                title: 'Step 4 - Income Information',
                                items: [
                                    {
                                        xtype: 'radiofield',
                                        name : 'step4',
                                        value: 'ji',
                                        label: 'Job Income',
                                        checked: true
                                    },
                                    {
                                        xtype: 'radiofield',
                                        name : 'step4',
                                        value: 'ss',
                                        label: 'Social Security'
                                    },
                                    {
                                        xtype: 'radiofield',
                                        name : 'step4',
                                        value: 'se',
                                        label: 'Self Employed'
                                    },
                                    {
                                        xtype: 'radiofield',
                                        name : 'step4',
                                        value: 'rp',
                                        label: 'Retirement/Pension'
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: 'eployeename',
                                        label: 'Employee Name*'
                                    },
                                     {
                                        xtype: 'numberfield',
                                        name: 'year',
                                        label: 'Year'
                                    },
                                     {
                                        xtype: 'numberfield',
                                        name: 'month',
                                        label: 'Month'
                                    },
                                    {
                                        xtype: 'numberfield',
                                        label: 'Work Number',
                                        name: 'wnumber'
                                    },
                                     {
                                        xtype: 'numberfield',
                                        label: 'Work Contact Number',
                                        name: 'wcnumber'
                                    },
                                    {
                                        xtype: 'label',
                                        html: 'How often are you paid?'
                                    },
                                    {
                                        xtype: 'radiofield',
                                        name : 'step4',
                                        value: 'se',
                                        label: 'Weekly'
                                    },
                                    {
                                        xtype: 'radiofield',
                                        name : 'step4',
                                        value: 'se',
                                        label: 'Twice a Month'
                                    },
                                    {
                                        xtype: 'radiofield',
                                        name : 'step4',
                                        value: 'se',
                                        label: 'Bi-Weekly'
                                    },
                                    {
                                        xtype: 'radiofield',
                                        name : 'step4',
                                        value: 'se',
                                        label: 'Monthly'
                                    },
                                     {
                                        xtype: 'textfield',
                                        name: 'ssn',
                                        label: 'Take Home Paycheck*'
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: 'ssn2',
                                        label: 'Additional Monthly Income'
                                    },
                                     {
                                        xtype: 'textfield',
                                        name: 'dln',
                                        label: 'Driver License Number'
                                    },
                                    {
                                        xtype: 'selectfield',
                                        label: 'Additional Income Source',
                                        options: [
                                            {text: 'First Option',  value: 'first'},
                                            {text: 'Second Option', value: 'second'},
                                            {text: 'Third Option',  value: 'third'}
                                        ]
                                    },
                                                         {
                                        xtype: 'panel',
                                        layout: {
                                        type: 'hbox'
                                            },
                                         items: [

                                            {
                                                xtype: 'button',
                                                text: 'Back',
                                                ui: 'back',
                                                width: 100,
                                                 handler: function() {
                                                    this.parent.parent.parent.parent.previous(); }
                                            },
                                             {
                                                xtype: 'spacer'
                                            },
                                            {
                                                xtype: 'button',
                                                text: 'Next',
                                                width: 100,
                                                 handler: function() {
                                                    this.parent.parent.parent.parent.next(); }

                                            }
                                        ]
                                    }
                                    ]
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        scrollable: 'vertical',
                        items:[
                         {
                                xtype: 'fieldset',
                                height: '100%',
                                cls: 'sub-headline',
                                title: 'Step 5 - Bank Information',
                                items: [
                                    {
                                        xtype: 'numberfield',
                                        name: 'routingnumber',
                                        label: 'Routing Number'
                                    },
                                     {
                                        xtype: 'numberfield',
                                        name: 'ckcnumber',
                                        label: 'Checking Account Number'
                                    },
                                     {
                                        xtype: 'numberfield',
                                        name: 'ckcnumber2',
                                        label: 'Confirm Checking Account Number'
                                    },
                                    {
                                        xtype: 'textfield',
                                        label: 'Name of Bank',
                                        name: 'nameofbank'
                                    },
                                    {
                                         html: 'How long had you paid this account'
                                    },
                                     {
                                        xtype: 'numberfield',
                                        label: 'Month',
                                        name: 'month'
                                    },
                                    {
                                        xtype: 'numberfield',
                                        name: 'year',
                                        label: 'Year'
                                    },
                                    {
                                        html: 'Does this account has deposit?'
                                    },
                                     {
                                        xtype: 'radiofield',
                                        name: 'deposit',
                                        value: 'yes',
                                        label: 'Yes'
                                    },
                                     {
                                        xtype: 'radiofield',
                                        name: 'deposit',
                                        value: 'no',
                                        label: 'No'
                                    },
                                    {
                                        xtype: 'panel',
                                        layout: {
                                        type: 'hbox'
                                            },
                                         items: [

                                            {
                                                xtype: 'button',
                                                text: 'Back',
                                                ui: 'back',
                                                width: 100,
                                                 handler: function() {
                                                    this.parent.parent.parent.parent.previous(); }
                                            },
                                             {
                                            xtype: 'spacer'
                                            },
                                            {
                                                xtype: 'button',
                                                text: 'Next',
                                                width: 100,
                                                 handler: function() {
                                                    this.parent.parent.parent.parent.next(); }

                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        scrollable: 'vertical',
                                        items:[
                                         {
                                        xtype: 'fieldset',
                                        height: '100%',
                                        cls: 'sub-headline',
                                        title: 'Step 4 - Income Information',
                                        items: [
                                            {
                                            xtype: 'radiofield',
                                            name : 'step4',
                                            value: 'ji',
                                            label: 'Job Income',
                                            checked: true
                                        },
                                        {
                                            xtype: 'radiofield',
                                            name : 'step4',
                                            value: 'ss',
                                            label: 'Social Security'
                                        },
                                        {
                                            xtype: 'radiofield',
                                            name : 'step4',
                                            value: 'se',
                                            label: 'Self Employed'
                                        },
                                        {
                                            xtype: 'radiofield',
                                            name : 'step4',
                                            value: 'rp',
                                            label: 'Retirement/Pension'
                                        },
                                        {
                                            xtype: 'textfield',
                                            name: 'eployeename',
                                            label: 'Employee Name*'
                                        },
                                         {
                                            xtype: 'numberfield',
                                            name: 'year',
                                            label: 'Year'
                                        },
                                         {
                                            xtype: 'numberfield',
                                            name: 'month',
                                            label: 'Month'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            label: 'Work Number',
                                            name: 'wnumber'
                                        },
                                         {
                                            xtype: 'numberfield',
                                            label: 'Work Contact Number',
                                            name: 'wcnumber'
                                        },
                                        {
                                            xtype: 'label',
                                            html: 'How often are you paid?'
                                        },
                                        {
                                            xtype: 'radiofield',
                                            name : 'step4',
                                            value: 'se',
                                            label: 'Weekly'
                                        },
                                        {
                                            xtype: 'radiofield',
                                            name : 'step4',
                                            value: 'se',
                                            label: 'Twice a Month'
                                        },
                                        {
                                            xtype: 'radiofield',
                                            name : 'step4',
                                            value: 'se',
                                            label: 'Bi-Weekly'
                                        },
                                        {
                                            xtype: 'radiofield',
                                            name : 'step4',
                                            value: 'se',
                                            label: 'Monthly'
                                        },
                                         {
                                            xtype: 'textfield',
                                            name: 'ssn',
                                            label: 'Take Home Paycheck*'
                                        },
                                        {
                                            xtype: 'textfield',
                                            name: 'ssn2',
                                            label: 'Additional Monthly Income'
                                        },
                                         {
                                            xtype: 'textfield',
                                            name: 'dln',
                                            label: 'Driver License Number'
                                        },
                                        {
                                            xtype: 'selectfield',
                                            label: 'Additional Income Source',
                                            options: [
                                                {text: 'First Option',  value: 'first'},
                                                {text: 'Second Option', value: 'second'},
                                                {text: 'Third Option',  value: 'third'}
                                            ]
                                        },
                                        {
                                            xtype: 'panel',
                                            layout: {
                                            type: 'hbox'
                                                },
                                             items: [

                                                {
                                                    xtype: 'button',
                                                    text: 'Back',
                                                    ui: 'back',
                                                    width: 100,
                                                     handler: function() {
                                                        this.parent.parent.parent.parent.previous(); }
                                                },
                                                 {
                                                    xtype: 'spacer'
                                                },
                                                {
                                                    xtype: 'button',
                                                    text: 'Next',
                                                    width: 100,
                                                     handler: function() {
                                                        this.parent.parent.parent.parent.next(); }

                                                }
                                            ]
                                        }
                                    ]
                            }
                        ]
                    }

                    ]
                    }
                    ]
                    },
                    {
                        xtype: 'panel',
                        scrollable: 'vertical',
                        items:[
                            {
                                xtype: 'fieldset',
                                height: '100%',
                                cls: 'sub-headline',
                                title: 'Step 6 - Account Information',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        name : 'password',
                                        label: 'Password'
                                    },
                                    {
                                        xtype: 'textfield',
                                        name : 'password2',
                                        label: 'Confirm Password'
                                    },
                                     {
                                        xtype: 'selectfield',
                                        label: 'Choose a Secret Question',
                                        options: [
                                            {text: 'First Option',  value: 'first'},
                                            {text: 'Second Option', value: 'second'},
                                            {text: 'Third Option',  value: 'third'}
                                        ]
                                    },
                                    {
                                        xtype: 'textfield',
                                        name : 'answer',
                                        label: 'Answer'
                                    },
                                    {
                                        xtype: 'textfield',
                                        name : 'promotecode',
                                        label: 'Promote Code'
                                    },
                                    {
                                        xtype: 'checkboxfield',
                                        name : 'agree1',
                                        label: 'By Clicking "I Agree"',
                                        value: 'agree1'
                                    },
                                    {
                                        xtype: 'checkboxfield',
                                        name : 'agree2',
                                        label: 'By Clicking "I Agree"'
                                    },
                                    {
                                        xtype: 'panel',
                                        layout: 'hbox',
                                         items: [
                                        {   xtype: 'button',
                                            text: 'Back',
                                            align: 'left',
                                            width: 100,
                                            ui: 'back',
                                             handler: function() {

                                                this.parent.parent.parent.parent.previous(); }
                                        },
                                        {
                                            xtype: 'spacer'
                                        },
                                        {
                                            xtype: 'button',
                                            text: 'Apply Now',
                                            ui:'decline',
                                            align: 'right',
                                            width: 100,
                                             handler: function() {
                                              var form = Ext.ComponentQuery.query('formpanel')[0],
                                             values = form.getValues();
                                             console.log(values);



                    }

                        }
                    ]
                    }

                                    ]

                        }
                        ]
                    }
                    ]
                }
                //End Carousel

                ]


            },
            {
                xtype: 'menucard',
                docked: 'bottom'
            }

        ]
    }
});
