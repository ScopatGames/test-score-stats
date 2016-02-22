(function (){
    angular
        .module('scoresApp')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$window'];

    function dataservice($window){
        var service = {
            getStudentData: getStudentData,
            saveStudentData: saveStudentData
        };

        //Default student data
        var defaultStudentData = [{
                name: 'Sudsy McDerman',
                score: 64.00
            }, {
                name: 'Boxtrod Folly',
                score: 100.00
        }];

        return service;

        function getStudentData(){
            return ((typeof($window.Storage) !== "undefined" && localStorage.getItem('studentData')!==null) ? JSON.parse(localStorage.getItem('studentData')) : defaultStudentData);
        }

        function saveStudentData(saveData){
            if(typeof($window.Storage) !== "undefined"){
                localStorage.setItem('studentData', JSON.stringify(saveData));
            }
        }
    }
})();
