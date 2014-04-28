Ext.define('OPAtlas.model.TableModel', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'OBJECTID', type: 'int' },
        { name: 'well_mine_name', type: 'string'} ,
        { name: 'age', type: 'string'},
        { name: 'group_', type: 'string'},
        { name: 'formation', type: 'string'},
        { name: 'publication', type: 'string'},
        { name: 'photomicrograph_gallery', type: 'string'},
        { name: 'basin', type: 'string'},
        { name: 'material', type: 'string'},
        { name: 'member', type: 'string'}
        // { name: 'county_parish', type: 'string'},
        // { name: 'state', type: 'string'},
        // { name: 'country', type: 'string'},
        // { name: 'latitude', type: 'float'},
        // { name: 'longitude', type: 'float'},
        // { name: 'lease', type: 'string'},
        // { name: 'api_number', type: 'string'},

    ]
});