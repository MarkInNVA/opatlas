Ext.define('OPAtlas.store.MaterialStore', {
    extend: 'Ext.data.Store',
    storeId: 'MaterialStore',

    fields: [ 'name' ],
    data: [
	    {name: 'Coal' },
	    {name: 'Shale'}
    ]
    	
});
