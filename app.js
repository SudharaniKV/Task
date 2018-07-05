var app= angular.module("myApp", []);
app.controller("myctr", function($scope, $http){

    $http.get("data.json").then(function(item){
        $scope.users=item.data;
    })

    $scope.removeuser = function(user){
        var removeduser = $scope.users.indexof(user);
        $scope.users.splice(removeduser ,1);
    };

        
    $scope.addusers= function(){
        $scope.users.push({
            Name:$scope.newname,
            Age:$scope.newage,
            Company:$scope.newcompany,
            Salary:$scope.newsalary
        
        })
    };

});