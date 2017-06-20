angular.module('app').controller('locationCtrl', ($scope) => {
    let data = window.dataHack;
    $scope.locationData = data[1].locationData;

    let playbackProgress = (param) => {
        param = JSON.parse(param);
        let progressInMillis = param['playbackProgressMilliseconds'];

        dataHack.forEach((element) => {
            let locationData = element.locationData;
            if (stringTimeToMillis(element.startTime) < progressInMillis && stringTimeToMillis(element.endTime) > progressInMillis) {
                if (locationData ===  $scope.locationData) {
                    return;
                }
                logger.log(`${stringTimeToMillis(element.startTime)} < ${progressInMillis} < ${stringTimeToMillis(element.endTime)}`);
                $scope.locationData = locationData;
            }
        });
    };

    emitter.on('onPlaybackProgress', playbackProgress);

    $scope.$on("$destroy", function () {
        emitter.off('onPlaybackProgress', playbackProgress);
    });
});