Ext.define('OPAtlas.view.table.TableController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox'
//        'OPAtlas.store.TableStore'
    ],

    alias: 'controller.table',

    listen: {
        controller: {
            map: {
                mapclick: 'onMapClick'
            }
        }
    },

    config : {
        control : {
            'grid' : {
                itemclick : 'onItemClick'
            }
        }
    },

    init: function() {    
//        console.log('TableController init! ');
    },

    onItemClick: function(t,r ) {
//        console.log('TableController/onItemClick');
        this.fireEvent('gridclick', r);
    },

    onMapClick: function(attributes) {
//        console.log('TableController onMapClick attributes: ', attributes);
        var pv = this.getView();
        var store = Ext.data.StoreManager.lookup('TableStore');

//        console.log('TableController onMapClick store: ', store);

        var ans = store.find('OBJECTID',attributes.OBJECTID);
        pv.getSelectionModel().select(ans);

    }

});
