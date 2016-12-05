var twitchStreamers = ["OgamingSC2", "freecodecamp", "comster404"];
var streamName = twitchStreamers[0];
var ericHolder = "";
var streamsHtmlHead = "https://crossorigin.me/https://wind-bow.hyperdev.space/twitch-api/streams/";
var usersHtmlHead = "https://crossorigin.me/https://wind-bow.hyperdev.space/twitch-api/users/";
var streamStatus = function() {
    $.getJSON(streamsHtmlHead+streamName, function(json) {
        ericHolder = json.stream;
        if (json.status === 404) {
            console.log(json.message)
        }
        if (ericHolder === null) {
            console.log("Offline")
        } else {
            // console.log(ericHolder.channel.status)
            //return ericHolder.channel.status;
            debugger;
            $("#sayWord").html(JSON.stringify(ericHolder.channel.status));
        }
    });
};
// var status
// var logo
/* streamer: OgamingSC2 -- status/currently_playing: json.stream.channel.status -- weblink: */
// $("#newQuote").click(function () {
//     $("#sayWord").text(streamStatus());
// });

$("#sayWord").html(JSON.stringify());
//$("#quoteText").html(JSON.stringify(json.quoteText));