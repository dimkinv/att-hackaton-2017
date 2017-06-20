function loadCustomVideo() {
	try {
		logger.log('before switch video clicked');
		DFW.switchChannel('http://tchosted.ucilab.com/video/Inferno_s.mp4', 'Bunny', 1993, 192);
		logger.log('after switch video clicked');
	} catch (ex) {
		logger.error(ex);
	}
}

function stopVideo() {
	DFW.pause();
}

function resumeVideo() {
	DFW.play();
}