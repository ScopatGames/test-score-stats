(function(){
    angular
        .module('scoresApp')
        .directive('statsCell', statsCell);
    
    function statsCell(){
        return {
            restrict: 'E',
            templateUrl: 'directives/statsCell.html',
            replace: true,
            scope: {
                statObject: "=",
            }
        };
    }
    
})();

