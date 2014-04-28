Ext.define('OPAtlas.view.map.MapController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox',
        'Ext.toolbar.Spacer'
    ],

    alias: 'controller.map',

    listen: {
        controller: {
            table: {
                gridclick: 'onGridClick'
            }
        }
    },

    config : {
        theMap: null,
        theAGC: null,
        theMapView: null,
        theHelp: null,
        theLegend: null,
        theFilter: null,
        theTotalCount: null,

        gcaURL   : "http://eerscmap.usgs.gov/arcgis/rest/services/gca/gca_20140425/MapServer/0",
        kbgURL  : "http://eerscmap.usgs.gov/arcgis/rest/services/gca/kbge/MapServer"

    },

    init: function() {
    // included in agc : esri.map, esri.dijit.PopupTemplate, esri.dijit.Popup, 
    //                   esri.dijit.Scalebar, esri.dijit.Legend, dojo.parser
    
  //      console.log('MapController init ');
        dojo.require("esri.layers.FeatureLayer");
        // dojo.require("esri.layers.agstiled");
        // dojo.require("esri.layers.agsdynamic");
        dojo.require("esri.tasks.query");

        this.setTheHelp( Ext.widget('help') );
        this.setTheFilter( Ext.widget('filter') );
        this.setTheLegend( Ext.widget('legend') );

        this.setTheMapView( this.getView() );
        this.setTheAGC( this.getReference('agc') );
        this.getTheAGC().on("mapLoaded", this.mapReady, this);

    },

    mapReady: function(m) {
        this.setTheMap(m);
        this.addOperationalLayers();
    },

    goInitialExtent: function() {
        // console.log('ie: ');       
        this.getTheMap().setExtent( this.getTheAGC().getInitialExtent() );
    },

    setBasemap: function (e) {
        // console.log('setBasemap e: ', e.text);

        switch(e.text) {
            case 'Streets'  : this.getReference('agc').getArcMap().setBasemap('streets');               break;
            case 'Topo'     : this.getReference('agc').getArcMap().setBasemap('topo');                  break;
            case 'Satellite': this.getReference('agc').getArcMap().setBasemap('satellite');             break;
            case 'Hybrid'   : this.getReference('agc').getArcMap().setBasemap('hybrid');                break;
            case 'Ocean'    : this.getReference('agc').getArcMap().setBasemap('oceans');                break;
            case 'Nat Geo'  : this.getReference('agc').getArcMap().setBasemap('national-geographic');   break;
        }        
    },

    showHelp: function() {
//        console.log('showHelp');
        if ( this.getTheHelp().isVisible() ) {
            this.getTheHelp().hide();            
        } else {
            this.getTheHelp().show();
        }
    },

    showLegend: function() {
//        console.log('showHelp');
        if ( this.getTheLegend().isVisible() ) {
            this.getTheLegend().hide();            
        } else {
            this.getTheLegend().show();
        }
    },

    showFilter: function() {
//        console.log('showHelp');
        if ( this.getTheFilter().isVisible() ) {
            this.getTheFilter().hide();            
        } else {
            this.getTheFilter().show();
        }
    },

    addOperationalLayers: function() {
        var me = this;

        var template = new esri.dijit.PopupTemplate({
            title: "{well_mine_name}",
            description: "<table border=2 width='100%' cellspacing='2' >" + 
  
            "<tr><th colspan=2>Sample Information</th></tr>" + 

            "<tr><th width='30%'>Field</th><th width='70%'>Value</th></tr>" +

            "<tr><td class='right'>Well Name</td><td class='right'>{well_mine_name}</td></tr>" +
            "<tr><td class='right'>County/Parish</td><td class='right'>{county_parish}</td></tr>" +
            "<tr><td class='right'>State</td><td class='right'>{state}</td></tr>" +
            "<tr><td class='right'>Lease</td><td class='right'>{lease}</td></tr>" +
            "<tr><td class='right'>API Number</td><td class='right'>{api_number}</td></tr>" +
            "<tr><td class='right'>Basin</td><td class='right'>{basin}</td></tr>" +
            "<tr><td class='right'>Material</td><td class='right'>{material}</td></tr>" +
            "<tr><td class='right'>Age</td><td class='right'>{age}</td></tr>" +
            "<tr><td class='right'>Group</td><td class='right'>{group_}</td></tr>" +
            "<tr><td class='right'>Formation</td><td class='right'>{formation}</td></tr>" +
            "<tr><td class='right'>Member</td><td class='right'>{member}</td></tr>" +
          "</table>"

        });

        var gcaLayer = new esri.layers.FeatureLayer( me.getGcaURL(), { 
            id: "gca",
            infoTemplate: template,
            mode: esri.layers.FeatureLayer.MODE_ONDEMAND,  // ONDEMAND    SNAPSHOT    SELECTION
            outFields: ["*"] 
        });      

        // gcaLayer.on("load", function(o) {
        //     console.log('MapController, load - o: ', o);
        // });


        gcaLayer.on("update-end", function(o) {
            me.getTheAGC().getTheMask().hide();

            var b = [];
            var g =o.target.graphics;
            var i=0,len=g.length;

            if (me.getTheTotalCount() == null) {
                me.setTheTotalCount(len);
                console.log('MapController, gca on update-end  tc: ', me.getTheTotalCount());
            }

            for (; i<len; ) {   
                var a = [];
                a.push(g[i].attributes.OBJECTID , g[i].attributes.well_mine_name, g[i].attributes.age, g[i].attributes.group_, g[i].attributes.formation, g[i].attributes.publication, g[i].attributes.photomicrograph_gallery, g[i].attributes.basin,g[i].attributes.material, g[i].attributes.member);     
        //          console.log(g[i].attributes.OBJECTID,', ',g[i].attributes.well_mine_name);
                b.push(a);

                i++;
            }

            var s = Ext.data.StoreManager.lookup('TableStore');

            //s.loadData(g.attributes);
            s.loadData(b);
           // s.sort('well_mine_name');
        });
 
        gcaLayer.on("click", function(e){
            me.fireEvent('mapclick', e.graphic.attributes);
        });

        this.getTheAGC().getThePopup().resize(350, 350);
        this.getTheMap().addLayer(gcaLayer);

    },
    onGridClick: function(rec) {
  //      console.log('MapController/onGridClick objId: ', objId, ', rec.data: ', rec.data);

        var fl = this.getTheMap().getLayer("gca");
        var q = new esri.tasks.Query();
        var p = this.getTheAGC().getThePopup();

        q.objectIds = [ rec.data.OBJECTID ];

        fl.selectFeatures(q, esri.layers.FeatureLayer.SELECTION_NEW, function(featureSet) {
          var pp = new esri.geometry.Point(featureSet[0].geometry.x,featureSet[0].geometry.y,  featureSet[0].geometry.spatialReference);
          p.clearFeatures();
          p.setFeatures(featureSet);
          p.show(pp);
        });
    }
});
