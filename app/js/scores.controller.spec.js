describe('ScoresController', function(){
  var $controller, $scope, controller;

  beforeEach(function(){
    module('scoresApp');
    inject(function (_$controller_){
      $controller = _$controller_;
    });
    $scope = {};
    controller = $controller('ScoresController', {$scope: $scope});
  });

  describe('Initialization', function(){
    it('should have a student array', function(){
      expect(controller.studentData).to.be.a('array');
    });
    it('should have a stats array', function(){
      expect(controller.stats).to.be.a('array');
    });
  });

  describe('addStudent()', function(){
    it('should add a blank student', function(){
      controller.studentData = [];
      controller.addStudent();
      expect(controller.studentData.length).to.equal(1);
      expect(controller.studentData[0].name).to.equal(null);
      expect(controller.studentData[0].score).to.equal(null);
    });
  });
  describe('deleteStudent(index)', function(){
    it('should delete a student', function(){
      controller.studentData = [{name: 'Sally', score: 89}, {name:'Bob', score: 52}];
      controller.deleteStudent(0);
      expect(controller.studentData.length).to.equal(1);
      expect(controller.studentData[0].name).to.equal('Bob');
    });
    it('should create a null student if the last item is deleted', function(){
      controller.studentData = [{name: 'Sally', score: 89}, {name:'Bob', score: 52}];
      controller.deleteStudent(1);
      controller.deleteStudent(0);
      expect(controller.studentData.length).to.equal(1);
      expect(controller.studentData[0].name).to.equal(null);
      expect(controller.studentData[0].score).to.equal(null);
    });
  });
  describe('clearData()', function(){
    it('should clear the entire table of data, except a null student', function(){
      controller.studentData = [{name: 'Sally', score: 89}, {name:'Bob', score: 52}];
      controller.clearData();
      expect(controller.studentData.length).to.equal(1);
      expect(controller.studentData[0].name).to.equal(null);
      expect(controller.studentData[0].score).to.equal(null);
    });
  });
});
