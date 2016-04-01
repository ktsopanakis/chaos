(function(ng) {
  'use strict';



  function NavigationProvider(headerNavItems) {
    this.headerNavItems = [{
      name: 'Home',
      order: 1,
      level: 1,
      parent: null,
      uisref: 'home'
    }, {
      name: 'Dashboard',
      order: 2,
      level: 1,
      parent: null,
      uisref: 'dashboard'
    }];
  }

  ng.module('app.core')
    .provider('navigation', [function() {

      var headerNavItems = [];

      this.addHeaderNavItem = function(item) {
        // TODO:validate if item has all the information needed

        // TODO:append item to headerNavItems
        headerNavItems.push(item);

        // TODO:return status code according to success or failure
        return 1;
      };

      this.$get = [function() {
        return new NavigationProvider(headerNavItems);
      }];
    }])
    .factory('navigationService', [function() {
      return {
        headerNavItems: headerNavItems
      };
    }]);
})(angular);

//TODO: make breadcrump service/directive that works
