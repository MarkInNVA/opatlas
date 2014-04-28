Ext.define('OPAtlas.view.legend.Legend', {
    extend: 'Ext.window.Window',
    alias: 'widget.legend',

    title : 'Legend',
    height: 246,
    width : 225,
    x: 25,
    y: 150,
//    bodyPadding: 10,
    layout: 'hbox',
    closeAction: 'hide',
    autoScroll: true,

    initComponent: function() {
//        console.log('Help Controller - initComponent');
        this.items = 
        [
            // {
            //     xtype: 'image',
            //     src: 'resources/images/legend3.png',
            //     width: 212,

            //     height: 214
            // }
            {
                xtype: 'panel',
                help: 'Put image here!'
            }
        ];
        this.callParent(arguments);  
    }
});