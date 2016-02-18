(function(){
    // Directive creates attribute that updates the model when the 'enter' key is pressed
    
    angular
        .module('scoresApp')
        .directive("updateModelOnEnter", updateOnEnterDirective);
                                          
    function updateOnEnterDirective() {
        var directive = {
            restrict: 'A',
            require: 'ngModel',
            link: link
        };
        return directive;
        
        function link(scope, elem, attrs, ngModelCtrl) {
            elem.bind("keyup",function(e) {
                if (e.keyCode === 13) {
                    ngModelCtrl.$commitViewValue();
                    scope.$apply(ngModelCtrl.$setTouched);
                }
            });
        }
    }
})();