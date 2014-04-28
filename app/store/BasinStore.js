Ext.define('OPAtlas.store.BasinStore', {
    extend: 'Ext.data.Store',
    storeId: 'BasinStore',

    fields: [ 'name' ],
    data: [
    	{name: 'Appalachian'},
        {name: 'Gulf Coast'}
    ]
//    model: 'opAtlas.model.ApointModel'  
    	
});
