(function(){
    angular
        .module('scoresApp')
        .controller('mainController', ['getStatsFactory', ScoresController]);

    function ScoresController (getStatsFactory){ 
        var vm = this;
        
        vm.addStudent = addStudent;
        vm.clearData = clearData;
        vm.deleteStudent = deleteStudent;
        vm.getStats = getStats;
        vm.saveData = saveData;
        vm.studentData = getStudentData();
        
        /////////////////
        
        function addStudent(){
            vm.studentData.push({name: null, score: null});
        }
        
        function clearData(){
                vm.studentData = [{name: null, score: null}];
                localStudentData = [{name: null, score: null}];
                vm.saveData();
        }
        
        function deleteStudent (index){
            if(vm.studentData.length === 1){
                vm.studentData = [{name: null, score: null}];
            }
            else{
                vm.studentData.splice(index, 1);
            }
            vm.saveData();
        }
        
        function getStudentData(){
            return ((localStorageBool && localStorage.getItem('studentData')!==null) ? JSON.parse(getSavedStudentData()) : localStudentData);
        }
        
        function getSavedStudentData(){
            return ((localStorageBool) ? localStorage.getItem('studentData') : localStudentData);
        }
        
        function getStats(){
            return getStatsFactory.getStats(vm.studentData);
        }

        function saveData(){
            if(localStorageBool){
                localStorage.setItem('studentData', JSON.stringify(vm.studentData));
            }
        }
    }
})();

