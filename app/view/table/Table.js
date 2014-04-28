Ext.define('OPAtlas.view.table.Table', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mytable',
    title: 'Sample Sites',
    controller: 'table',
    viewModel: {
        type: 'table'
    },
    // header: {
    //     title: 'Sample Sites',
    //     style: {
    //         'background-color': '#CECECE'
    //     }
    // },
    viewConfig: {
        stripeRows: true
    },
    columnLines: true,

    initComponent: function() {
        this.store = 'TableStore';
 //       this.stripeRows = true,        
        this.columns = [
//           {header: 'ObjectID', dataIndex: 'OBJECTID', width:55},
            { header: 'Well/Mine Name',  dataIndex: 'well_mine_name',          width:225},
            { header: 'Geologic Age',    dataIndex: 'age',                     width:250},
            { header: 'Material',        dataIndex: 'material',                width:100},
            { header: 'Basin',           dataIndex: 'basin',                   width:125},
            { header: 'Group',           dataIndex: 'group_',                  width:125},
            { header: 'Formation',       dataIndex: 'formation',               width:150},
            { header: 'Member',          dataIndex: 'member',                  width:200},
            { text: 'Publication',       dataIndex: 'publication',             width:100,
                renderer: function(value) {
                    if (value.length === 0) {
                        return ' ';
                    } else {
                        return Ext.String.format('<a href="{0}">To Pub</a>', value);
                    }
                }
            },
            { text: 'Photo Gallery',     dataIndex: 'photomicrograph_gallery', width:100,
                renderer: function(value) {
                    if (value.length === 0) {
                        return ' ';
                    } else {
                        return Ext.String.format('<a href="{0}">To Gallery</a>', value);
                    }
                }
            }
        ];

        this.callParent(arguments);
//    console.log(this.store); 
    }
});