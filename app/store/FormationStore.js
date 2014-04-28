Ext.define('OPAtlas.store.FormationStore', {
    extend: 'Ext.data.Store',
    storeId: 'FormationStore',

    fields: [ 'name' ],
    data: [
        {name: 'Marcellus Shale'  },
        {name: 'Ohio Shale'  },
        {name: 'Ohio Shale; West Falls'  },
        {name: 'Ohio Shale; West Falls; Marcellus Shale'  },
        {name: 'Olmos'  },
        {name: 'Pearsall'},
        {name: 'Pearsall; Sligo'  },
        {name: 'West Falls; Marcellus Shale' }
    ]    
    	
});
