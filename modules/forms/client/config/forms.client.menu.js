(function() {
    'use strict';

    angular
        .module('app.forms')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', {
            title: 'Challenges',
            state: 'app.form',
            type: 'dropdown',
            iconClass: 'icon-note',
            position: 5,
            roles: ['*']
        });


      
        Menus.addSubMenuItem('sidebar', 'app.form', {title: 'Join a Challenge',  state: 'app.form-extended'});
        Menus.addSubMenuItem('sidebar', 'app.form', {title: 'Create a Challenge',  state: 'app.form-validation'});
        


    }

})();