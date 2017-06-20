var envUrl='api.cld.dtvce.com';


function getAllChannels()
{
			$('div')[0].innerText='getAllChannels..';
var url='https://'+envUrl+'/discovery/metadata/channel/v1/service/channel?uxReference=CHANNEL.SEARCH&itemCount=99&itemIndex=0&fisProperties=ISF%3A2.0%23chlogo-bwdb-mytv%2C47%2C35%23chlogo-clb-guide%2C60%2C45%23chlogo-cdb-gcd%2C87%2C66%23chlogo-bwdb-player%2C60%2C45%23chlogo-bwdb-fplayer%2C87%2C66&callback=?';
	
	$.ajax( {
		url:url,
		headers : {
		'Authorization' : "Bearer "+JSON.parse(DFW.getToken()).accessToken
	  }
	}
	)
	.done(function( data ) {
		$('div')[0].innerText=JSON.stringify(data);
	});
}

function getChannelSchedule(channelResourceId)
{
	var startTime = Date.now();
	var endTime = Date.now()+(2*60*60*1000); // 2 hours from now
	var url='https://'+envUrl+'/discovery/metadata/schedule/v1/service/schedule?channelIds='+channelResourceId+'&startTime='+startTime+'&endTime='+endTime
	
	$.ajax( {
		url:url,
		crossDomain:true,
		headers : {
		'Authorization' : "Bearer "+JSON.parse(DFW.getToken()).accessToken
	  }
	}
	)
	.done(function( data ) {
		console.info(data);
		$('div')[0].innerText=JSON.stringify(data);
});
}

function getProgramDetails(itemType, programResourceId)
{
	var url='https://'+envUrl+'/discovery/metadata/program/v1/service/details/'+itemType+'/'+programResourceId;
	var url='https://'+envUrl+'/discovery/metadata/program/v1/service/details/'+itemType+'/'+programResourceId;
	
	$.ajax( {
		url:url,
		crossDomain:true,
		headers : {
		'Authorization' : "Bearer " +JSON.parse(DFW.getToken()).accessToken
	  }
	}
	)
	.done(function( data ) {
		console.info(data);
		$('div')[0].innerText=JSON.stringify(data);
	});
}

function getSeriesDetails(seriesResourceId)
{
	 var url='https://'+envUrl+'/discovery/metadata/series/v1/service/details/VIDEO_CONTENT/'+seriesResourceId;
	
	$.ajax( {
		url:url,
		crossDomain:true,
		headers : {
		'Authorization' : "Bearer " +JSON.parse(DFW.getToken()).accessToken
	  }
	}
	)
	.done(function( data ) {
		console.info(data);
		$('div')[0].innerText=JSON.stringify(data);
	});
}

function getSeasonDetails(seriesResourceId, seasonNumber)
{
	var url='https://'+envUrl+'/discovery/metadata/series/v1/service/episodes?resourceId='+seriesResourceId+'&seasonList='+seasonNumber+'&clientContext=DevType:MOBILE&itemIndex=1';
	
	$.ajax( {
		url:url,
		crossDomain:true,
		headers : {
		'Authorization' : "Bearer " +JSON.parse(DFW.getToken()).accessToken
	  }
	}
	)
	.done(function( data ) {
		console.info(data);
		$('div')[0].innerText=JSON.stringify(data);
	});
}

function getGuide(favoritesOnly)
{
	var startTime = Date.now();
	var endTime = Date.now()+(2*60*60*1000); // 2 hours from now
	var url='https://'+envUrl+'/discovery/metadata/schedule/v1/service/guideSchedule?uxReference=LIVE.SEARCH&itemIndex=0&itemCount=10&startTime='+startTime+'&endTime='+endTime+'&fisProperties=MOV:poster,297,222&sort=ChannelName';
	if(favoritesOnly){
		url+='&filter=favoriteChannel';
	}
	
	$.ajax( {
		url:url,
		crossDomain:true,
		headers : {
		'Authorization' : "Bearer " +JSON.parse(DFW.getToken()).accessToken
	  }
	}
	)
	.done(function( data ) {
		console.info(data);
		$('div')[0].innerText=JSON.stringify(data);
});
}

function getLastWatched()
{
	var url='https://'+envUrl+'/discovery/collection/carousel/v1/service/carousels/last-watched-channel?clientContext=Phone&itemIndex=0&itemCount=1';
	
	
	$.ajax( {
		url:url,
		crossDomain:true,
		headers : {
		'Authorization' : "Bearer " +JSON.parse(DFW.getToken()).accessToken
	  }
	}
	)
	.done(function( data ) {
		console.info(data);
		$('div')[0].innerText=JSON.stringify(data);
	});
}

function search(query)
{
	var url='https://'+envUrl+'/discovery/search/keyword-search/v1/service/keyword?query='+query;
	
	$.ajax( {
		url:url,
		crossDomain:true,
		headers : {
		'Authorization' : "Bearer " +JSON.parse(DFW.getToken()).accessToken
	  }
	}
	)
	.done(function( data ) {
		console.info(data);
		$('div')[0].innerText=JSON.stringify(data);
});
}

function getWhatsOnNow()
{
		var url='https://'+envUrl+'/discovery/uiux/layout/v1/service/layouts/MyTVReference?clientContext=DevType:MOBILE';
	
	$.ajax( {
		url:url,
		crossDomain:true,
		headers : {
		'Authorization' : "Bearer " +JSON.parse(DFW.getToken()).accessToken
	  }
	}
	)
	.done(function( data ) {
		url='https://'+envUrl+'/discovery/collection/carousel/v1/service/carousels/recently-watched?sectionId='+data.page.sections[0].sectionId+'&pageReference=MyTVReference&clientContext=DevType:MOBILE&fisProperties=Poster,200,300';
		
	$.ajax( {
		url:url,
		crossDomain:true,
		headers : {
		'Authorization' : "Bearer " +JSON.parse(DFW.getToken()).accessToken
	  }
	}
	)
	.done(function( data ) {
			console.info(data);
		$('div')[0].innerText=JSON.stringify(data);
	});
	});

}

function getContinueWatching()
{
	getCarousel(1);
}

function getTopPicks()
{
	getCarousel(2);
}

function getPopularNow()
{
	getCarousel(3);
}

function getCarousel(carouselId)
{
	var url='https://'+envUrl+'/discovery/uiux/layout/v1/service/layouts/MyTVReference?clientContext=DevType:MOBILE';
	
	$.ajax( {
		url:url,
		crossDomain:true,
		headers : {
		'Authorization' : "Bearer " +JSON.parse(DFW.getToken()).accessToken
	  }
	}
	)
	.done(function( data ) {
		url='https://'+envUrl+'/discovery/collection/carousel/v1/service/carousels/generic?sectionId='+data.page.sections[carouselId].sectionId+'&pageReference=MyTVReference&clientContext=DevType:MOBILE&fisProperties=Poster,200,300';
		
	$.ajax( {
		url:url,
		crossDomain:true,
		headers : {
		'Authorization' : "Bearer " +JSON.parse(DFW.getToken()).accessToken
	  }
	}
	)
	.done(function( data ) {
			console.info(data);
		$('div')[0].innerText=JSON.stringify(data);
	});
	});

	
}

function onEvent() {}

function getToken() {
	if(window.DFW) {
			$('div')[0].innerText=JSON.parse(DFW.getToken()).accessToken;
	} else {
		$('div')[0].innerText="no DFW found";
	}
}

window.onerror = function(message) {
		$('div')[0].innerText='error: '+message;
}