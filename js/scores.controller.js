angular.module('scoresApp').controller('mainController', ['$scope', '$window', ScoresController]);
                                                          
                                                          
function ScoresController ($scope, $window){
    
    this.savedStudentData = (localStorageBool) ? localStorage.getItem('studentData') : localStudentData;
    this.studentData = (localStorageBool && localStorage.getItem('studentData')!==null) ? JSON.parse(this.savedStudentData) : localStudentData;
    
    
    this.deleteStudent = function(index){
        //Add comment (/*) block here to enable 'confirm delete'
        if(this.studentData.length === 1){
            this.studentData = [{name: null, score: null}];
        }
        else{
            this.studentData.splice(index, 1);
        }
        this.saveData();
        //Add comment (*/) block here to enable 'confirm delete'
        
        /* REMOVE COMMENT BLOCK To enable 'confirm delete'
        if(this.studentData[index].name !== null && this.studentData[index].score !== null){
            if($window.confirm("Delete student?")){
                if(this.studentData.length === 1){
                    this.studentData = [{name: null, score: null}];
                }
                else{
                    this.studentData.splice(index, 1);
                }
            }
        }
        else{
            if(this.studentData.length === 1){
                this.studentData = [{name: null, score: null}];
            }
            else{
                this.studentData.splice(index, 1);
            }
        }
        REMOVE COMMENT BLOCK to enable 'confirm delete'*/
    };

    this.addStudent = function(){
        this.studentData.push({name: null, score: null});
    };
    

    this.getStats = function(){
        var sum = 0;
        var count = 0;
        var max = 0;
        var min = 100;
        for(var i = 0; i < this.studentData.length; i++){
            var score = this.studentData[i].score;
            if(score !== undefined && score !== null){
                //update sum
                sum += score;
                count++;
                if(score > max){
                    //update max
                    max = score;
                }
                if(score < min){
                    //update min
                    min = score;
                }
            }
        }
                
        var average = this.roundToTwo(sum/count);
        max = this.roundToTwo(max);
        min = this.roundToTwo(min);
        
        if(isNaN(average)){
            average = "-";
        }
        if(count === 0){
            min = "-";
            max = "-";
        }
        return { average: average, max: max, min: min };
    };
    
    this.saveData = function(){
        //console.log("saved!");
        if(localStorageBool){
            localStorage.setItem('studentData', JSON.stringify(this.studentData));
        }
    };
    
    this.clearData = function(){
        
        //if($window.confirm("Delete entire list of students?")){ //Delete comment to enable 'confirm delete'
            this.studentData = [{name: null, score: null}];
            localStudentData = [{name: null, score: null}];
            this.saveData();
        //} //Delete comment to enable 'confirm delete'
    };
    
    this.roundToTwo = function (num){
        num = Math.round(num + "e+2")+"e-2";
        return +num;
    };
}

