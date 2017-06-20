

var $log;

$(function () {
	$log = $('#log_content');
	console.log('ver 1.1.0');
});

function playVideo() {
	try {
		console.log('before switch video clicked');
		DFW.switchChannel('http://tchosted.ucilab.com/video/Inferno_s.mp4', 'Bunny', 1993, 192);
		console.log('after switch video clicked');
	} catch (ex) {
		console.error(ex);
	}
}

function stopVideo() {
	DFW.pause();
}

function resumeVideo() {
	DFW.play();
}

// console.log = function (message) {
// 	if (typeof message !== 'string') {
// 		message = JSON.stringify(message, null, 2);
// 	}
// 	$log.html(`${$log.html()} \n log: ${message}`);
// }

// console.error = function (message) {
// 	$log.html(`${$log.html()} \n error: ${message}`);
// }


function onEvent(evt) {
	console.log(evt);
} 