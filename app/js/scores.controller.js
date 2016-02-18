(function(){
    angular
        .module('scoresApp')
        .controller('ScoresController', ScoresController);
    
    ScoresController.$inject = ['dataservice', 'getStatsFactory'];

    function ScoresController (dataservice, getStatsFactory){
        "ngInject";
        
        var vm = this;
        
        vm.addStudent = addStudent;
        vm.clearData = clearData;
        vm.deleteStudent = deleteStudent;
        vm.getStats = getStats;
        vm.saveData = saveData;
        vm.studentData = [];
        
        initializeStudentData();
        
        /////////////////
        
        function addStudent(){
            vm.studentData.push({name: null, score: null});
        }
        
        function clearData(){
                vm.studentData = [{name: null, score: null}];
                saveData();
        }
        
        function deleteStudent (index){
            if(vm.studentData.length === 1){
                vm.studentData = [{name: null, score: null}];
            }
            else{
                vm.studentData.splice(index, 1);
            }
            saveData();
        }
        
        function getStats(){
            return getStatsFactory.getStats(vm.studentData);
        }
        
        function initializeStudentData(){
            vm.studentData = dataservice.getStudentData();
        }

        function saveData(){
            dataservice.saveStudentData(vm.studentData);
        }
    }
})();
