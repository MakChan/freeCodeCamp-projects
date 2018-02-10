
usernames = ["freecodecamp", "ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

var apiURL = "https://wind-bow.glitch.me/twitch-api/streams/"



function updateHTML(id, data) {
	$("#channel-"+id).html(data);
	$("#channel-box-"+id).css({
		"background-color": "#7fdeba",
		"color": "#b49272"
		});
}

function processData(channel_id, json) {
    var data = json["stream"];
    if (data != null) {
    	updateHTML(channel_id, data["game"]);
    }
}

function getData() {

	$.each(usernames, function(i, item) {
		var url = apiURL+item+'?callback=?'
		$.getJSON(url, function(data) {
		  processData(i, data);
		});		
	});
}


getData()


