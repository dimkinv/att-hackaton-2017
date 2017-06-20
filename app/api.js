function openMap(){
	$('#response-content')[0].innerText='openMap..';
	var uluru = {lat: -25.363, lng: 131.044};
	var map = new google.maps.Map(document.getElementById('response-content'), {
		zoom: 4,
		center: uluru
	});

	var contentString = '<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
		'<div id="bodyContent">'+
		'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
		'sandstone rock formation in the southern part of the '+
		'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
		'south west of the nearest large town, Alice Springs; 450&#160;km '+
		'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
		'features of the Uluru - Kata Tjuta National Park. Uluru is '+
		'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
		'Aboriginal people of the area. It has many springs, waterholes, '+
		'rock caves and ancient paintings. Uluru is listed as a World '+
		'Heritage Site.</p>'+
		'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
		'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
		'(last visited June 22, 2009).</p>'+
		'</div>'+
		'</div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		title: 'Uluru (Ayers Rock)'
	});
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
}


function openActor(){
	var actors  = [
		{name:"Tom Cruise", picUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_.jpg", description: "In 1976, if you had told fourteen year-old Franciscan seminary student Thomas Cruise Mapother IV that one day in the not too distant future he would be Tom Cruise, one of the top 100 movie stars of all time, he would have probably grinned and told you that his ambition was to join the priesthood. Nonetheless, this sensitive, deeply religious youngster who was born in 1962 in Syracuse, New York, was destined to become one of the highest paid and most sought after actors in screen history."},
		{name:"Denzel Washington", picUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5NDU2Mzc3MV5BMl5BanBnXkFtZTcwNjAwNTE5OQ@@._V1_SY1000_SX750_AL_.jpg", description: "Denzel Washington is an American actor and filmmaker. He has received three Golden Globe awards, a Tony Award, and two Academy Awards: Best Supporting Actor for the historical war drama film Glory (1989) and Best Actor for his role as a corrupt cop in the crime thriller Training Day (2001)."},
		{name:"Gal Gadot", picUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1NDMwNTQ1N15BMl5BanBnXkFtZTgwMjYxNDc1ODE@._V1_SY1000_CR0,0,723,1000_AL_.jpg", description: "Gal Gadot is an Israeli actress, singer, martial artist, and model. She was born in Rosh Ha'ayin, Israel, to a Jewish family (from Poland, Austria, Germany, and Czechoslovakia). She served in the IDF for two years, and won the Miss Israel title in 2004."}
		];

	var table = $("<table></table>");
	var headers = $("<tr>" +
		"<th>Name</th>" +
		"<th>Picture</th>" +
		"<th>Description</th>" +
		"</tr>");
	table.append(headers);

	for (var i=0; i<actors.length; i++){
		var actor = actors[i];
		var row = $("<tr>" +
			"<td>" +  actor.name + "</td>" +
			"<td><img src='" +  actor.picUrl + "' height='150' width='150'></td>" +
			"<td>" +  actor.description + "</td>" +
			"</tr>");
		table.append(row);
	}
	$('#response-content').html(table);
}

function openLocationHistory(){
	var location  = {name: "Yosemite National Park",
		picUrl:"https://www.nps.gov/common/uploads/banner_image/pwr/homepage/F70D1E85-1DD8-B71B-0B330C026FB6CF02.jpg?width=2400&height=700&mode=crop&quality=90", description: "Yosemite National Park (/joʊˈsɛmᵻti/ yoh-SEM-it-ee[4]) is a national park spanning portions of Tuolumne, Mariposa and Madera counties in Northern California.[5][6] The park, which is managed by the National Park Service, covers an area of 747,956 acres (1,168.681 sq mi; 302,687 ha; 3,026.87 km2)[2] and reaches across the western slopes of the Sierra Nevada mountain range.[7] On average, about 4 million people visit Yosemite each year,[3] and most spend the majority of their time in the seven square miles (18 km2) of Yosemite Valley.[8] The park set a visitation record in 2016, surpassing 5 million visitors for the first time in its history. Designated a World Heritage Site in 1984, Yosemite is internationally recognized for its granite cliffs, waterfalls, clear streams, giant sequoia groves, lakes, mountains, glaciers, and biological diversity. Almost 95% of the park is designated wilderness.[10] Yosemite was central to the development of the national park idea. First, Galen Clark and others lobbied to protect Yosemite Valley from development, ultimately leading to President Abraham Lincoln's signing the Yosemite Grant in 1864. Later, John Muir led a successful movement to establish a larger national park encompassing not just the valley, but surrounding mountains and forests as well—paving the way for the United States national park system. Yosemite is one of the largest and least fragmented habitat blocks in the Sierra Nevada, and the park supports a diversity of plants and animals. The park has an elevation range from 2,127 to 13,114 feet (648 to 3,997 m) and contains five major vegetation zones: chaparral/oak woodland, lower montane forest, upper montane forest, subalpine zone, and alpine. Of California's 7,000 plant species, about 50% occur in the Sierra Nevada and more than 20% within Yosemite. There is suitable habitat for more than 160 rare plants in the park, with rare local geologic formations and unique soils characterizing the restricted ranges many of these plants occupy."};

	var content = $("<div></div>");
	var name = $("<label style='font-size: 24px; font-weight: bold;display: block;'></label>");
	name.html(location.name);
	var img = $("<img src='" +  location.picUrl + "' height='300' width='1028' style='padding-top: 10px; padding-bottom: 10px;'>");
	var description = $("<div>" +  location.description + "</div>");


	content.append(name);
	content.append(img);
	content.append(description);
	$('#response-content').html(content);
}


function openMerchandise() {

}














var envUrl='api.cld.dtvce.com';


function getAllChannels()
{
			$('#response-content')[0].innerText='getAllChannels..';
var url='https://'+envUrl+'/discovery/metadata/channel/v1/service/channel?uxReference=CHANNEL.SEARCH&itemCount=99&itemIndex=0&fisProperties=ISF%3A2.0%23chlogo-bwdb-mytv%2C47%2C35%23chlogo-clb-guide%2C60%2C45%23chlogo-cdb-gcd%2C87%2C66%23chlogo-bwdb-player%2C60%2C45%23chlogo-bwdb-fplayer%2C87%2C66&callback=?';
	
	$.ajax( {
		url:url,
		headers : {
		'Authorization' : "Bearer "+JSON.parse(DFW.getToken()).accessToken
	  }
	}
	)
	.done(function( data ) {
		$('#response-content')[0].innerText=JSON.stringify(data);
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
		$('#response-content')[0].innerText=JSON.stringify(data);
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
		$('#response-content')[0].innerText=JSON.stringify(data);
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
		$('#response-content')[0].innerText=JSON.stringify(data);
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
		$('#response-content')[0].innerText=JSON.stringify(data);
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
		$('#response-content')[0].innerText=JSON.stringify(data);
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
		$('#response-content')[0].innerText=JSON.stringify(data);
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
		$('#response-content')[0].innerText=JSON.stringify(data);
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
		$('#response-content')[0].innerText=JSON.stringify(data);
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
		$('#response-content')[0].innerText=JSON.stringify(data);
	});
	});

	
}

function onEvent() {}

function getToken() {
	if(window.DFW) {
			$('#response-content')[0].innerText=JSON.parse(DFW.getToken()).accessToken;
	} else {
		$('#response-content')[0].innerText="no DFW found";
	}
}

window.onerror = function(message) {
		$('#response-content')[0].innerText='error: '+message;
}