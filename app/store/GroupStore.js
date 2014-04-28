Ext.define('OPAtlas.store.GroupStore', {
    extend: 'Ext.data.Store',
    storeId: 'GroupStore',

    fields: [ 'name' ],
    data: [
        {name: 'Claiborne'  },
        {name: 'Hamilton'  },
        {name: 'Jackson'  },
        {name: 'Navarro'  },
        {name: 'Trinity'},
        {name: 'Wilcox'  },
        {name: 'Wilcox; Trinity' }
    ]    
    	
});
