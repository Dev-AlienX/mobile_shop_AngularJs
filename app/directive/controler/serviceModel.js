app.directive('notifyMe', function(){
    return{
      restrict: 'E',
      scope:false,
      templateUrl:"app/directive/view/modelTmpl.html",
      link:function(scope, elem, attrs){
        
        // scope.hideModal = function(){
        //     notify.queue.length  = 0;
        // };
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
