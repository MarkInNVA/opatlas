Ext.define('Ext.ux.AGC', {
	extend: 'Ext.Component',

	alias: 'widget.agc',

  style: {
    height:'100%',
    width: '100%',
    'z-index': 100
  },

  layout: {
      type: 'border'
  },

	config:{
 
		arcMap: null,
		initialExtent: null,

    scaleBar: null,

    theLods: null,   // set in view
    tempLods: null,  // local working copy
    
    thePopup: null,

//    myTemplate: null,

    theMask: null
	},

// --------------------------------------------------

  init: function() {

  },

// --------------------------------------------------

  initComponent: function() {

    dojo.require("esri.map");
    // dojo.require("esri.layers.FeatureLayer");
    // dojo.require("esri.layers.agstiled");
    // dojo.require("esri.layers.agsdynamic");
    // dojo.require("esri.tasks.query");
    dojo.require("esri.dijit.PopupTemplate");
    dojo.require("esri.dijit.Popup");
    dojo.require("esri.dijit.Scalebar");
    dojo.require("esri.dijit.Legend");
    dojo.require("dojo.parser");

    this.callParent(); 
  },

// --------------------------------------------------
 
	onBoxReady: function(t, eOpts){
		var map,  me = this, local_id = this.getId() ;

    // --------------------------------------------------

		function myInit() {

      me.doSetLODS();

      me.doSetPopup();

      me.doSetInitExtent();

      dojo.parser.parse();  // needed for popup placement, make sure dom is ready for map http://forums.arcgis.com/threads/94986-Popups-and-Zoom-are-Not-in-Correct-Spot?highlight=popups+zoom

      // --------------------------------------------------

      map = new esri.Map(local_id, {
        basemap: "topo", 
        extent: me.getInitialExtent(),
        fitExtent: false,
        logo: false,
        showAttribution:false,
        lods: me.getTempLods(),
        infoWindow: me.getThePopup()
      });

      // --------------------------------------------------

      map.on("load", function() {

        me.setArcMap(map);

        if (me.getScaleBar() ) {
          me.showScalebar();
        }

        me.fireEvent('mapLoaded', map); 

      });

      // --------------------------------------------------
    
      // map.on("extent-change", function(e){
      //   var geo = map.extent;
      //   console.log( 'x min :', geo.xmin.toFixed(3),', y min :', geo.ymin.toFixed(3), ', x max :', geo.xmax.toFixed(3), ', y max :',geo.ymax.toFixed(3));
      // });
      
		};

    // --------------------------------------------------

    // console.log('AGC init');
    this.setTheMask( new Ext.LoadMask({
        msg: 'Setting up ...',
        target: this
    }) );

    this.getTheMask().show();

    dojo.ready(myInit);

	},

// --------------------------------------------------

	onResize: function( t, height, width, oldWidth, oldHeight, eOpts ) {    // keeps map & screen coordinated
//    console.log('AGC , resize - width:', width, ', height: ', height, ', oldWidth: ', oldWidth, ', oldHeight: ', oldHeight);

    var m = this.getArcMap();
		if (m) {
      m.resize();			
		}
  },

// --------------------------------------------------

  doSetLODS: function() {
    var lods = [
      { "level":  0, "resolution": 156543.033928000,  "scale": 591657527.591555 },
      { "level":  1, "resolution": 78271.5169639999,  "scale": 295828763.795777 },
      { "level":  2, "resolution": 39135.7584820001,  "scale": 147914381.897889 },
      { "level":  3, "resolution": 19567.8792409999,  "scale": 73957190.948944  },
      { "level":  4, "resolution": 9783.93962049996,  "scale": 36978595.474472  },
      { "level":  5, "resolution": 4891.96981024998,  "scale": 18489297.737236  },
      { "level":  6, "resolution": 2445.98490512499,  "scale": 9244648.868618   },
      { "level":  7, "resolution": 1222.99245256249,  "scale": 4622324.434309   },
      { "level":  8, "resolution": 611.496226281380,  "scale": 2311162.217155   },
      { "level":  9, "resolution": 305.748113140558,  "scale": 1155581.108577   },
      { "level": 10, "resolution": 152.874056570411,  "scale": 577790.554289    },
      { "level": 11, "resolution": 76.43702828507324, "scale": 288895.277144    },
      { "level": 12, "resolution": 38.21851414253662, "scale": 144447.638572    },
      { "level": 13, "resolution": 19.1092570712683,  "scale": 72223.819286     },
      { "level": 14, "resolution": 9.55462853563415,  "scale": 36111.909643     },
      { "level": 15, "resolution": 4.77731426794937,  "scale": 18055.954822     },
      { "level": 16, "resolution": 2.38865713397468,  "scale": 9027.977411      },
      { "level": 17, "resolution": 1.19432856685505,  "scale": 4513.988705      }
    ];

    var lll = [];
    
    if ( this.getTheLods() ) {
      Ext.Array.forEach(this.getTheLods(), function(item, index, theArray) {
        lll.push(lods[item]);
      });

      this.setTempLods(lll);

    } else {
      this.setTempLods(lods);
    };
  },

// --------------------------------------------------

  doSetPopup: function() {
//    console.log( 'popup: ', this.getThePopup() );

    var a = this.getThePopup();

    popup = esri.dijit.Popup({
      titleInBody: false
    }, Ext.Element(document.createElement('div')) );
    
    if (a) {
//      console.log('popup w: ', a.width, ', h: ', a.height);      
      popup.resize( a.width, a.height); // w,h
    } else {
      popup.resize( 200, 150); // w,h
    };

    this.setThePopup(popup);
  },

// "top-right","bottom-right","top-center","bottom-center","bottom-left","top-left"

// --------------------------------------------------

  doSetInitExtent: function() {
    if ( this.getInitialExtent() ) {
      // new Extent(xmin,ymin,xmax,ymax,spatialReference)
      var a = this.getInitialExtent();
      this.setInitialExtent( new esri.geometry.Extent(a.xmin, a.ymin, a.xmax , a.ymax, new esri.SpatialReference({ wkid: 102100})) );
    } else {
 //     console.log('no ie ');
      this.setInitialExtent( new esri.geometry.Extent(-24000000,2100000,-3200000,11000000, new esri.SpatialReference({ wkid: 102100})) );
    }
  },

// --------------------------------------------------

  showScalebar: function() {
    var scalebar = new esri.dijit.Scalebar({

        map: this.getArcMap(),
        attachTo: this.getScaleBar(),
        scalebarUnit: "dual"
    });          
  }

});
