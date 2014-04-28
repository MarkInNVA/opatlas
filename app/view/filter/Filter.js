Ext.define('OPAtlas.view.filter.Filter', {
    extend: 'Ext.window.Window',
    alias: 'widget.filter',

    requires:[ 'Ext.form.field.ComboBox', 'Ext.form.Panel' ],

    controller: 'filter',

    viewModel: {
        type: 'filter'
    },

    closeAction: 'hide',

    title: 'Filter',
    layout: 'border',
    autoShow: true,
    bodyPadding: 5,
    x: 25,
    y: 130,
    height: 335,
    width: 390,

    items: {
        xtype: 'form',
        reference: 'form',
        height: 240,
        width: 375,
        bodyPadding: 5,
        layout: 'vbox',
        standardSubmit : true,
        items: 
        [
           {
                layout: 'hbox',
                bodyPadding: 5,
                border: true,
                items: [
                    {
                        xtype: 'combo',
                        reference: 'materialCombo',
                        bind: {
                            store: '{materialStore}'
                        },
                        queryMode: 'local',
                        displayField: 'name',
                        editable: false,
                        value:'All',
                        valueField: 'name',
                        fieldLabel: 'Material',
                        labelWidth:75,
                        width: 165

                    },
                    {   xtype: 'tbspacer', width: 10  },
                    {
                        xtype: 'combo',
                        reference: 'basinCombo',
                        bind: {
                            store: '{basinStore}'
                        },
                        queryMode: 'local',
                        displayField: 'name',
                        editable: false,
                        value:'All',
                        valueField: 'name',
                        fieldLabel: 'Basin',
                        labelWidth: 40,
                        width: 175

                    }
                ]
            },
            {
                layout: 'hbox',
                bodyPadding: 5,
                border: true,
                items: [
                    {
                        xtype: 'combo',
                        reference: 'ageCombo',
                        bind: {
                            store: '{ageStore}'
                        },
                        queryMode: 'local',
                        displayField: 'name',
                        editable: false,
                        value:'All',
                        valueField: 'name',
                        fieldLabel: 'Age',
                        labelWidth: 75,
                        width: 350
                    }  
                ]
            },
            {
                layout: 'hbox',
                bodyPadding: 5,
                border: true,
                items: [
                    {
                        xtype: 'combo',
                        reference: 'groupCombo',
                        bind: {
                            store: '{groupStore}'
                        },
                        queryMode: 'local',
                        displayField: 'name',
                        editable: false,
                        valueField: 'name',
                        value:'All',
                        fieldLabel: 'Group',
                        labelWidth: 75,
                        width: 350
                    } 
                ]
            },
            {
                layout: 'hbox',
                bodyPadding: 5,
                border: true,
                items: [
                    {
                        xtype: 'combo',
                        reference: 'formationCombo',
                        bind: {
                            store: '{formationStore}'
                        },
                        queryMode: 'local',
                        displayField: 'name',
                        value:'All',
                        editable: false,
                        valueField: 'name',
                        fieldLabel: 'Formation',
                        labelWidth: 75,
                        width: 350
                    } 
                ]
            }, 
            {
                layout: 'hbox',
                bodyPadding: 5,
                border: true,
                items: [
                    {
                        xtype: 'combo',
                        reference: 'memberCombo',
                        bind : {
                            store: '{memberStore}'
                        },
                        queryMode: 'local',
                        displayField: 'name',
                        editable: false,
                        value:'All',
                        valueField: 'name',
                        fieldLabel: 'Member',
                        labelWidth: 75,
                        width: 350
                    } 
                ]
            }                    
        ]
    },

    buttons: 
    [
        {
            text: 'Submit',
            flex: 1,
            handler: 'formSubmit'
        },
        {
            text: 'Reset',
            flex: 1,
            handler: 'formReset'
        },
        {
            text: 'Close',
            flex: 1,
            handler: 'formClose'
        }
    ]

});

