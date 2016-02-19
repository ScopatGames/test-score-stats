(function(){
    angular
        .module('scoresApp')
        .factory('getStatsFactory', getStatsFactory);
    
    function getStatsFactory(){
        
        var service = {
            getStats: getStats
        };
        
        return service;
        
        //////////////////////
        
        function getStats(data){
                var sum = 0;
                var count = 0;
                var max = 0;
                var min = 100;

                data.forEach(function(entry){
                    if(entry.score !== undefined && entry.score !== null){
                        //update sum
                        sum += entry.score;
                        count++;
                        if(entry.score > max){
                            //update max
                            max = entry.score;
                        }
                        if(entry.score < min){
                            //update min
                            min = entry.score;
                        }
                    }
                });

                var average = roundToTwo(sum/count);
                max = roundToTwo(max);
                min = roundToTwo(min);

                if(isNaN(average)){
                    average = "-";
                }
                if(count === 0){
                    min = "-";
                    max = "-";
                }
                
                var stats = [{
                    title: "Avg",
                    data: average
                }, {
                    title: "Max",
                    data: max
                }, {
                    title: "Min",
                    data: min 
                }];
            
                return stats;
        }
            
        
        function roundToTwo(num){
            num = Math.round(num + "e+2")+"e-2";
            return +num;
        }
        
        
    }
})();