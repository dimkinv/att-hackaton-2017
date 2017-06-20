angular.module('app').controller('actorsCtrl', ($scope) => {
    $scope.actors = data[0].actors;

    let playbackProgress = (param) => {
        param = JSON.parse(param);
        // logger.log(`milliseconds: ${param['playbackProgressMilliseconds']}`);
        let progressInMillis = param['playbackProgressMilliseconds'];
        // logger.log(`progress is: ${progressInMillis}`);


        dataHack.forEach((element) => {
            let actors = element.actors;
            if (stringTimeToMillis(element.startTime) < progressInMillis && stringTimeToMillis(element.endTime) > progressInMillis) {
                if (actors ===  $scope.actors) {
                    return;
                }
                logger.log(`${stringTimeToMillis(element.startTime)} < ${progressInMillis} < ${stringTimeToMillis(element.endTime)}`);
                $scope.actors = actors;
            }
        });
    };

    emitter.on('onPlaybackProgress', playbackProgress);

    $scope.$on("$destroy", function () {
        emitter.off('onPlaybackProgress', playbackProgress);
    });
});