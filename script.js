var twitchStreamers = ["OgamingSC2", "freecodecamp", "comster404"];
var streamName = twitchStreamers[0];
var ericHolder = "";
var streamsHtmlHead = "https://cors-anywhere.herokuapp.com/https://wind-bow.hyperdev.space/twitch-api/streams/";
var usersHtmlHead = "https://crossorigin.me/https://wind-bow.hyperdev.space/twitch-api/users/";
var streamStatus = function () {
    $.getJSON(streamsHtmlHead + streamName, function (json) {
        ericHolder = json;
        if (json.status === 404) {
            console.log(json.message)
        }
        if (json.stream === null) {
            console.log("Offline")
        } else {
// console.log(ericHolder.channel.status)
            $("#sayWord").html(JSON.stringify(json.stream.channel.status));
        }
    });
};
