Ext.define('OPAtlas.view.table.FilterController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox'
//        'OPAtlas.store.TableStore'
    ],

    alias: 'controller.filter',

    config:{
        theAGC: null,
        theFL: null //
    },
    init: function() {
        this.setTheAGC( Ext.ComponentQuery.query('agc')[0] );
 //       console.log('FilterController, init - agc: ', this.getTheAGC() );

    },

    formSubmit: function() {
 //       console.log('FilterController, formSubmit');
        this.getTheAGC().getThePopup().hide();

        var theStr = '';
        var v1 = this.getReference('materialCombo').getRawValue();
        var v2 = this.getReference('basinCombo').getRawValue();
        var v3 = this.getReference('ageCombo').getRawValue();
        var v4 = this.getReference('groupCombo').getRawValue();
        var v5 = this.getReference('formationCombo').getRawValue();
        var v6 = this.getReference('memberCombo').getRawValue();

        if (v1 != 'All') {
            theStr = "UPPER(material) like UPPER('"  + v1 + "')";
        };
 
        if (v2 != 'All') {
            if (theStr.length > 1) {
                theStr += ' AND ';
            }
            theStr +=  "UPPER(basin) like UPPER('"  + v2 + "')";
        };

        if (v3 != 'All') {
            if (theStr.length > 1) {
                theStr += ' AND ';
            }
            theStr +=  "UPPER(age) like UPPER('"  + v3 + "')";
        };

        if (v4 != 'All') {
            if (theStr.length > 1) {
                theStr += ' AND ';
            }
            theStr +=  "UPPER(group_) like UPPER('%"  + v4 + "%')";
        };

        if (v5 != 'All') {
            if (theStr.length > 1) {
                theStr += ' AND ';
            }
            theStr +=  "UPPER(formation) like UPPER('%"  + v5 + "%')";
        };

        if (v6 != 'All') {
            if (v6 !== 'All') {
                if (theStr.length > 1) {
                    theStr += ' AND ';
                }
                theStr +=  "UPPER(member) like UPPER('%"  + v6 + "%')";
            } else {
                // ???
            }
        }; 

        if (theStr == '') {
            theStr = '1=1';
        };

        console.log('Submit, where :', theStr); //, 'v2.len :', v2.length, 'v3.len :', v3.length, 'v4.len :', v4.length);
        var fl = this.getTheAGC().getArcMap().getLayer("gca");
        fl.setDefinitionExpression(theStr);
console.log('fl: ', fl)

    },

    formReset: function() {
 //       console.log('FilterController, formReset');
        this.getReference('materialCombo').reset();
        this.getReference('basinCombo').reset();
        this.getReference('ageCombo').reset();
        this.getReference('groupCombo').reset();
        this.getReference('formationCombo').reset();
        this.getReference('memberCombo').reset();
        
        console.log('Reset, where : 1=1');
        var fl = this.getTheAGC().getArcMap().getLayer("gca");
        fl.setDefinitionExpression('1=1');
        console.log('formReset view.title: ', this.getView().title)

        this.getView().setTitle('Unfiltered: 48 samples shown');
        console.log('formReset view.title: ', this.getView().title)
   },

    formClose: function() {
 //       console.log('FilterController, formClose');
        this.getView().close();
    }

});