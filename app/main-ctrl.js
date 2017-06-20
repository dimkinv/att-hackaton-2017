angular.module('app', []).controller('mainCtrl', ($scope) => {
    $scope.currentTemplate = 'templates/maps.html';
    $scope.data = window.dataHack;
    $scope.changeScreen = function (screen) {
        switch (screen) {
            case 'maps':
                $scope.currentTemplate = 'templates/maps.html';
                break;
            case 'actors':
                $scope.currentTemplate = 'templates/actors.html';
                break;
            case 'location':
                $scope.currentTemplate = 'templates/location.html';
                break;
            case 'merchandise':
                $scope.currentTemplate = 'templates/merchandise.html';
                break;
        }
    }
});
