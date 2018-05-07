var app = angular.module('RestaurentApp', ['ngResource', 'ngSanitize']);


app.directive( 'editInPlace', function() {
  return {
    restrict: 'E',
    scope: { value: '=' },
    template: '<span ng-click="edit()" ng-bind="value"></span><input ng-model="value"></input>',
    link: function ( $scope, element, attrs ) {
      // Let's get a reference to the input element, as we'll want to reference it.
      var inputElement = angular.element( element.children()[1] );
      
      // This directive should have a set class so we can style it.
      element.addClass( 'edit-in-place' );
      
      // Initially, we're not editing.
      $scope.editing = false;
      
      // ng-click handler to activate edit-in-place
      $scope.edit = function () {
        $scope.editing = true;
        
        // We control display through a class on the directive itself. See the CSS.
        element.addClass( 'active' );
        
        // And we must focus the element. 
        // `angular.element()` provides a chainable array, like jQuery so to access a native DOM function, 
        // we have to reference the first element in the array.
        inputElement[0].focus();
      };
      
      // When we leave the input, we're done editing.
      inputElement.prop( 'onblur', function() {
        $scope.editing = false;
        element.removeClass( 'active' );
      });
    }
  };
});

app.controller('Dashboard', function($scope, $resource, $timeout,$http,$window) {

    /**
     * init controller and set defaults
     */
    function init () {

     
    }

    /**
     * requests and processes tweet data
     */
    
    $scope.editRestaurent=function(id,index){
        console.log(id);
        console.log(index);
        var item=$scope.restaurentListWithEdit[index];
        console.log(item);

        $http.get("/restaurentUpdate?id="+id+"&Name="+item.Name+"&Address="+item.Address+"&open="+item.routine.open+"&close="+item.routine.close).then(function(response){
          console.log(response);
         if(response.data.message=="Successful"){
          $window.alert("Document Update Successful");
         }
        })

    }

    $scope.getUserView=function(){
        $http.get("/restaurent").then(function(response){
            $scope.restaurentList=response.data;
            $scope.restaurentListWithEdit=[];
            console.log(response);
        });
    }

    $scope.getAdminView=function(){
        $http.get("/restaurentAdmin").then(function(response){
            console.log("HI");
            
            $scope.restaurentListWithEdit=response.data;
            $scope.restaurentList=[]
            console.log(response);
        });
    }

    init();
});