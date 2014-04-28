Ext.define('OPAtlas.view.map.Map', {
	extend: 'Ext.panel.Panel',

	alias: 'widget.map',

  controller: 'map',

  layout: {
      type: 'border'
  },

	config:{

	},
  tbar: [
      {   
        xtype: 'tbspacer', width: 20  
      },
      {
          text: 'Initial Extend', handler: 'goInitialExtent'
      },
      {
          xtype: 'splitbutton',
          text : 'Basemap',
          menu:{ //new Ext.menu.Menu({
              items: 
              [
                  // these will render as dropdown menu items when the arrow is clicked:
                  {text: 'Topo',      handler: 'setBasemap' },
                  {text: 'Streets',   handler: 'setBasemap' },
                  {text: 'Satellite', handler: 'setBasemap' },
                  {text: 'Hybrid',    handler: 'setBasemap' },
                  {text: 'Ocean',     handler: 'setBasemap' },
                  {text: 'Nat Geo',   handler: 'setBasemap' }
              ]
          }
      },
      {
        xtype: 'button',
        text: 'Filter',
        handler: 'showFilter'
      },      
      {
        xtype: 'button',
        text: 'Legend',
        handler: 'showLegend'
      },      
      { 
        xtype: 'tbfill' 
      },
      {
        xtype: 'button',
        text: 'Help',
        handler: 'showHelp'
      },
      {   
        xtype: 'tbspacer', width: 20  
      }           
  ],

  items : [
    {
      xtype: 'agc',
      reference: 'agc',
      itemId: 'agc',

      scaleBar: "bottom-left",
      
      theLods: [2,3,4,5,6,7,8,9,10,11],
      
      thePopup: {
        width  : 250,
        height : 250
      },
      
      initialExtent : {
        xmin : -15000000,
        ymin : 2460000,
        xmax : -7000000,
        ymax : 6700000
      }
//  x min : -12037015.646 , y min : 3209396.116 , x max : -8069628.130 , y max : 5322727.074
    }
  ]

});
