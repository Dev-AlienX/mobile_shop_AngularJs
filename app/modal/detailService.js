app.factory('productDetail', function(){
    var productDetail = {
      'listTwo':[]
    };
    productDetail.add = function(){
      productDetail.listTwo.push($scope.detailView);
    };
  
    return productDetail;
  });