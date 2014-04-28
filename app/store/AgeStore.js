Ext.define('OPAtlas.store.AgeStore', {
    extend: 'Ext.data.Store',
    storeId: 'AgeStore',

    fields: [ 'name' ],
    data: [
        {name: 'Middle Eocene'  },
        {name: 'Paleocene-Eocene'  },
        {name: 'Paleocene-Eocene; Lower Cretaceous'  },
        {name: 'Upper Cretaceous'  },
        {name: 'Lower Cretaceous'},
        {name: 'Late Devonian' },
        {name: 'Middle Devonian; Late Devonian'  },
        {name: 'Middle Devonian'  }
    ]    
    	
});
