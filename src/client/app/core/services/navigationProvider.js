(function(ng) {
  'use strict';

  ng.module('app.core')
    .provider('navigation', [function() {
      var navItems = [{
        name: 'HOME',
        order: 1,
        level: 1,
        parent: null,
        uisref: 'home'
      }, {
        name: 'DASHBOARD',
        order: 2,
        level: 1,
        parent: null,
        uisref: 'dashboard'
      }];
      this.addHeaderNavItem = function(item) {
        navItems.push(item);
        return 1;
      };

      this.$get = function() {
        return {
          navItems: navItems
        };
      };
    }]);

})(angular);

//TODO: make breadcrump service/directive that works
