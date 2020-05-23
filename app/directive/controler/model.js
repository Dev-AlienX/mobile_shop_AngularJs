app.directive('modalDialog', function(){
    return{
      restrict: 'E',
      scope:{
       show: '=',
        type:'=',
        msg:'=',
      },
      templateUrl:"app/directive/view/modelTmpl.html",
      transclude: false,
      link:function(scope, elem, attrs){
        
        scope.hideModal = function(){
          scope.show = false;
        };
        // scope.modelTyp = {};
        // if(scope.type === "success"){
        //   scope.modelTyp = "text-success";
        // }
        // if(scope.type === "danger"){
        //   scope.modelTyp = "text-danger";
        // }
      }
    }
  });
  