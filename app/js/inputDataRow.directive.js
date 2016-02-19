(function(){
    angular
        .module('scoresApp')
        .directive('inputDataRow', inputDataRow);
    
    function inputDataRow(){
        return {
            restrict: 'E',
            templateUrl: 'directives/inputDataRow.html',
            replace: true,
            scope: {
                studentObject: "=",
                saveDataFunction: "&",
                deleteStudentFunction: "&",
                index: '@'
            }
        };
    }
    
})();

