Ext.define('OPAtlas.store.TableStore', {
    extend: 'Ext.data.ArrayStore',

    storeId: 'TableStore',
    sorters: 'well_mine_name',
    sortOnLoad: true,
    model: 'OPAtlas.model.TableModel'  
    	
});
