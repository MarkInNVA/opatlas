/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('OPAtlas.view.main.Main', {
    extend: 'Ext.container.Container',

    xtype: 'app-main',
    
    controller: 'main',

    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },
//    resizable: false,
    
    items: [
        {
            xtype: 'mytable',
            region: 'south',
            collapsible: true,
            split: true,
            height: 200
        },
        {
            region: 'center',
            xtype: 'map'
        }
    ],
  initComponent: function() {
 //   console.log('Main, init - resizable: ', resizable);
    
    this.callParent(); 
  }

});
