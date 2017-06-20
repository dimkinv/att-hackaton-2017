angular.module('app').controller('mapCtrl', ($scope) => {
    setTimeout(() => {
        var uluru = { lat: -25.363, lng: 131.044 };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }, 800);


    let playbackProgress = (param) => {
        param = JSON.parse(param);
        logger.log(`got event onPlaybackProgress with params ${param}`)
        logger.log(`milliseconds: ${param['playbackProgressMilliseconds']}`);
        let progressInSec = param['playbackProgressMilliseconds'] / 1000;
        logger.log(`progress is: ${progressInSec}`);
    };

    emitter.on('onPlaybackProgress', playbackProgress);

    $scope.$on("$destroy", function () {
        emitter.off('onPlaybackProgress', playbackProgress);
    });
});