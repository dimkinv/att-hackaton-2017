var $log;

$(function () {
	$log = $('#log_content');
	logger.log('ver 1.1.1');

	loadCustomVideo();
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

function onEvent(evt) {
	logger.log(evt);
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