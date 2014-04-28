Ext.define('OPAtlas.store.MemberStore', {
    extend: 'Ext.data.Store',
    storeId: 'MemberStore',

    fields: [ 'name' ],
    data: [
        {name: 'Bexar'  },
        {name: 'Bexar; James'  },
        {name: 'Bexar; James; Pine Island'  },
        {name: 'Huron'  },
        {name: 'Huron; Rhinestreet'  },
        {name: 'James; Pine Island'},
        {name: 'Pine Island'  },
        {name: 'Rhinestreet' }
    ]    
    	
});