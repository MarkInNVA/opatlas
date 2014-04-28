/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('OPAtlas.Application', {
    extend: 'Ext.app.Application',
    
    name: 'OPAtlas',

    views: [ 'help.Help', 'filter.Filter', 'legend.Legend' ],

    controllers: [ 'Root' ],

    stores: [   
                 'TableStore' //, 'MaterialStore', 'BasinStore', 
                // 'AgeStore', 'GroupStore', 'MemberStore', 'FormationStore' 
            ],
    
    launch: function () {
//        Ext.Msg.alert(Ext.os.deviceType);// TODO - Launch the application
    }
});
