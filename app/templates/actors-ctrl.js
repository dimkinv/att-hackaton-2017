angular.module('app').controller('actorsCtrl', ($scope) => {
    $scope.actors = data[0].actors;
    let playbackProgress = (param) => {
        param = JSON.parse(param);
        logger.log(`got event onPlaybackProgress with params ${param}`);
        logger.log(`milliseconds: ${param['playbackProgressMilliseconds']}`);
        let progressInSec = param['playbackProgressMilliseconds'] / 1000;
        logger.log(`progress is: ${progressInSec}`);
    };

    emitter.on('onPlaybackProgress', playbackProgress);

    $scope.$on("$destroy", function () {
        emitter.off('onPlaybackProgress', playbackProgress);
    });
});