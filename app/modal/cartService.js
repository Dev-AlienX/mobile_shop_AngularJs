app.factory('newCart', function(){
  // debugger;
    var newCart = {
      'list':[],
      'modalArr':[],
      'compare':[],
    };
    newCart.add = function(){
      // debugger;
      // newCart.list.push($scope.cart);
    };
  
    return newCart;
  });