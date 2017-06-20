var map;
angular.module('app').controller('mapCtrl', ($scope) => {
    setTimeout(() => {
        var uluru = { lat: 0, lng: 0 };
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: uluru
        });
    }, 800);

    var oldLocation = { lat: 0, lng: 0 };
    let playbackProgress = (param) => {
        param = JSON.parse(param);
        // logger.log(`milliseconds: ${param['playbackProgressMilliseconds']}`);
        let progressInMillis = param['playbackProgressMilliseconds'];
        // logger.log(`progress is: ${progressInMillis}`);


        dataHack.forEach((element) => {
            let location = { lat: +element.map.lat, lng: +element.map.lng };
            if (stringTimeToMillis(element.startTime) < progressInMillis && stringTimeToMillis(element.endTime) > progressInMillis) {
                if (oldLocation.lat === location.lat && oldLocation.lng === location.lng) {
                    return;
                }

                logger.log(`${stringTimeToMillis(element.startTime)} < ${progressInMillis} < ${stringTimeToMillis(element.endTime)}`);
                // logger.log(`navigating map to: ${element.map.lat}/${element.map.lng}`);
                var marker = new google.maps.Marker({
                    position: { lat: +element.map.lat, lng: +element.map.lng },
                    map: map
                });
                oldLocation = location;

                map.panTo(marker.position);
                map.setZoom(19);
            }
        });
    };

    emitter.on('onPlaybackProgress', playbackProgress);

    $scope.$on("$destroy", function () {
        emitter.off('onPlaybackProgress', playbackProgress);
    });
});