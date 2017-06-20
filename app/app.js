var emitter = new TinyEmitter();
var $log;
var isVideoLoaded;
$(function () {
	$log = $('#log_content');
	logger.log('ver 1.1.1');

	if (isVideoLoaded) {
		return;
	}
	setTimeout(() => {
		loadCustomVideo();
		isVideoLoaded = true;
	}, 3000)
});

let logger = {};
logger.log = function (message) {
	if (typeof message !== 'string') {
		message = JSON.stringify(message, null, 2);
	}
	$log.html(`${$log.html()} \n log: ${message}`);
}

logger.error = function (message) {
	$log.html(`${$log.html()} \n error: ${message}`);
}

function onEvent(evt, param) {
	emitter.emit(evt, param);
}

function initMap() {
	var uluru = { lat: -25.363, lng: 131.044 };
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}

function stringTimeToMillis(stringTime) {
	let parts = stringTime.split(':');
	let time = +parts[1] * 60;

	let millisParts = parts[2].split(',');
	time += +millisParts[0];
	time *= 1000;
	time += +millisParts[1];

	return time;
}