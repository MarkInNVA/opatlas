Ext.define('OPAtlas.view.help.Help', {
    extend: 'Ext.window.Window',
    alias: 'widget.help',

    controller: 'help',
    itemId : 'help',
    title : 'Help',
    height: 175,
    width : 375,
//    bodyPadding: 5,
    layout: 'fit',
    closeAction: 'hide',

    initComponent: function() {
//        console.log('Help Controller - initComponent');
        this.items = 
        [
            {
                xtype: 'panel',
                autoScroll: true,
                bodyPadding: 5,
                html:   'To make the map interactive, the numbers of samples in the viewport must be reduced to below 1000. Either filter (menu bar) the number of samples shows or change the map extent by panning or zooming.' +
                        '<p>Use "+" and "-"  buttons to zoom in and out.' +
                        '<p>Place mouse pointer on map, push and hold left mount button, and drag to pan the map.' +
                        '<p>Click on Initial Extent button to go back to full map view.'  
            }
        ];
        this.callParent(arguments);  
    }
});



