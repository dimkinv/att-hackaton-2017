angular.module('app', []).controller('mainCtrl', ($scope) => {
    $scope.currentTemplate = 'templates/maps.html';
    
    $scope.changeScreen = function (screen) {
        switch (screen) {
            case 'maps':
                $scope.currentTemplate = 'templates/maps.html';
                break;
            case 'actors':
                $scope.currentTemplate = 'templates/actors.html'
                break;
        }
    }
});
