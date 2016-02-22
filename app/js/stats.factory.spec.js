describe("StatsFactory", function() {
   var getStatsFactory;
   beforeEach(function(){
     module('scoresApp');
     inject(function(_getStatsFactory_){
       getStatsFactory = _getStatsFactory_;
     });
   });
   describe('getStats()', function(){


      //Initialize tests
      var data;
      var stats;
      beforeEach(function(){
        // test data
        data =  [{
                 name: 'Sudsy McDerman',
                 score: 64.00
             }, {
                 name: 'Boxtrod Folly',
                 score: 100.00
         }];
        stats = getStatsFactory.getStats(data);
      });

      afterEach(function(){
        stats = null;
      });

      //Tests
      it('should return an array', function(){
        expect(stats).to.be.a('array');
      });

      it('should return an array of size 3', function(){
          expect(stats).to.have.lengthOf(3);
      });

      it('should return array of objects with properties', function(){
        expect(stats[0]).to.have.property('title').and.equal('Avg');
        expect(stats[0]).to.have.property('data');
        expect(stats[1]).to.have.property('title').and.equal('Max');
        expect(stats[1]).to.have.property('data');
        expect(stats[2]).to.have.property('title').and.equal('Min');
        expect(stats[2]).to.have.property('data');
      });

      it('should calculate the average, max, and min', function(){
        expect(stats[0].data).to.equal(82); // average
        expect(stats[1].data).to.equal(100); // max
        expect(stats[2].data).to.equal(64); // min
      });

      it('should return "-" if input array is empty', function(){
        stats = getStatsFactory.getStats([]);
        expect(stats[0].data).to.equal('-');
        expect(stats[1].data).to.equal('-');
        expect(stats[2].data).to.equal('-');
      });

      it('should round returned values to two decimal places', function(){
          data[0].score = 5.11111;
          data[1].score = 99.99999;
          stats = getStatsFactory.getStats(data);
          expect(stats[1].data).to.equal(100);
          expect(stats[2].data).to.equal(5.11);
      });
   });
});
