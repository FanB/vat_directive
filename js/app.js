var vat = angular.module('vat',[]);

vat.directive('vatCheck', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/directives/vat.html',
    scope: {
      vatNumber: '=',
      valid: '='
    },
    link: function(scope,element,attrs)
    {
      
    }
  }
});
