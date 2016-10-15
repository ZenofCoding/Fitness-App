(function() {
    'use strict';

    angular
        .module('app.tables')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', {
            title: 'National Leaderboard',
            state: 'app.table',
            type: 'dropdown',
            iconClass: 'icon-grid',
            position: 7,
            roles: ['*']
        });

        Menus.addSubMenuItem('sidebar', 'app.table', {title: 'Most Fit Companies',     state: 'app.table-ngtable'});
      

    }

})();