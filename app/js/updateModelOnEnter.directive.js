angular.module('scoresApp').directive("updateModelOnEnter", function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, elem, attrs, ngModelCtrl) {
            elem.bind("keyup",function(e) {
                if (e.keyCode === 13) {
                    ngModelCtrl.$commitViewValue();
                    scope.$apply(ngModelCtrl.$setTouched);
                }
            });
        }
    };
});