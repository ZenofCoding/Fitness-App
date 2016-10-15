(function() {
    'use strict';

    angular
        .module('app.forms')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', {
            title: 'Forms',
            state: 'app.form',
            type: 'dropdown',
            iconClass: 'icon-note',
            position: 5,
            roles: ['*']
        });


        Menus.addSubMenuItem('sidebar', 'app.form', {title: 'Create A Competition',  state: 'app.form-validation'});  

    }

})();