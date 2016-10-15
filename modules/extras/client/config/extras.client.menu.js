(function() {
    'use strict';

    angular
        .module('app.extras')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', {
            title: 'extras',
            state: 'app.extras',
            type: 'dropdown',
            iconClass: 'icon-cup',
            position: 9,
            roles: ['*']
        });

       
   
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Todo List',   state:'app.todo'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Profile',     state:'app.userprofile'});
        Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Settings',        state:'app.usersettings'});
        
        //Menus.addSubMenuItem('sidebar', 'app.extras', {title: 'Team Viewer',     state:'app.team-viewer'});
        

    }

})();
