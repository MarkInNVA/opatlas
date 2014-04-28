Ext.define('OPAtlas.view.filter.FilterModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.filter',

    data: {
        name: 'OPAtlas'
    },

    stores: {
        materialStore: {
 		    storeId: 'MaterialStore',
            fields: [ 'name' ],
            data: [
			    {name: 'All' },
			    {name: 'Coal' },
			    {name: 'Shale'}
	        ]
        },
        basinStore: {
		    storeId: 'BasinStore',
		    fields: [ 'name' ],
		    data: [
		    	{name: 'All'},
		    	{name: 'Appalachian'},
		        {name: 'Gulf Coast'}
		    ]
        },
        ageStore: {
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
        },
        groupStore: {
		    storeId: 'GroupStore',
		    fields: [ 'name' ],
		    data: [
		        {name: 'All' },
		        {name: 'Claiborne'  },
		        {name: 'Hamilton'  },
		        {name: 'Jackson'  },
		        {name: 'Navarro'  },
		        {name: 'Trinity'},
		        {name: 'Wilcox'  }
		    ]
        },
        formationStore: {
		    storeId: 'FormationStore',
		    fields: [ 'name' ],
		    data: [
		        {name: 'All' },
		        {name: 'Marcellus Shale'  },
		        {name: 'Ohio Shale'  },
		        {name: 'Olmos'  },
		        {name: 'Pearsall'},
		        {name: 'Sligo'  },
		        {name: 'West Falls' }
		    ]
        },
        memberStore: {
		    storeId: 'MemberStore',
		    fields: [ 'name' ],
		    data: [
		        {name: 'All'  },
		        {name: 'Bexar'  },
		        {name: 'Huron'  },
		        {name: 'James'  },
		        {name: 'Pine Island'  },
		        {name: 'Rhinestreet' }
		    ]
        }
    }    
});

		        // {name: 'Claiborne'  },
		        // {name: 'Hamilton'  },
		        // {name: 'Jackson'  },
		        // {name: 'Navarro'  },
		        // {name: 'Trinity'},
		        // {name: 'Wilcox'  },
		        // {name: 'Wilcox; Trinity' }

		        // {name: 'Marcellus Shale'  },
		        // {name: 'Ohio Shale'  },
		        // {name: 'Ohio Shale; West Falls'  },
		        // {name: 'Ohio Shale; West Falls; Marcellus Shale'  },
		        // {name: 'Olmos'  },
		        // {name: 'Pearsall'},
		        // {name: 'Pearsall; Sligo'  },
		        // {name: 'West Falls; Marcellus Shale' }


		        // {name: 'Bexar'  },
		        // {name: 'Bexar; James'  },
		        // {name: 'Bexar; James; Pine Island'  },
		        // {name: 'Huron'  },
		        // {name: 'Huron; Rhinestreet'  },
		        // {name: 'James; Pine Island'},
		        // {name: 'Pine Island'  },
		        // {name: 'Rhinestreet' }


