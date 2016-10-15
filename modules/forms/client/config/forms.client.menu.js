(function() {
    'use strict';

    angular
        .module('app.forms')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', {
            title: 'Start a Competition',
            state: 'app.form',
            type: 'dropdown',
            iconClass: 'icon-note',
            position: 5,
            roles: ['*']
        });

<<<<<<< HEAD
      
        Menus.addSubMenuItem('sidebar', 'app.form', {title: 'Join a Challenge',  state: 'app.form-extended'});
        Menus.addSubMenuItem('sidebar', 'app.form', {title: 'Create a Group',  state: 'app.form-validation'});
        
=======

        Menus.addSubMenuItem('sidebar', 'app.form', {title: 'Create A Competition',  state: 'app.form-validation'});  
>>>>>>> ee8214c642d25ab3ea8f14b3f7410b166a9c2c8a

    }

})();