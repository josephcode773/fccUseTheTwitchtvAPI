// var twitchStreamers = ["OgamingSC2", "freecodecamp", "comster404"];
// var streamName = twitchStreamers[0];
// var ericHolder = "";
var streamsHtmlHead = "https://cors-anywhere.herokuapp.com/https://wind-bow.hyperdev.space/twitch-api/streams/";
$.getJSON(streamsHtmlHead + "OgamingSC2", function (json) {
    if (json.status === 404) {
        // console.log(json.message)
        $("#foxStatusOne").html(JSON.stringify(json.message));
    }
    if (json.stream === null) {
        // console.log("Offline")
        $("#foxStatusOne").html("OFFLINE");
    } else {
        // console.log(ericHolder.channel.status)
        $("#foxStatusOne").html(JSON.stringify(json.stream.channel.status));
    }
    $("#foxNameOne").html("OgamingSC2");
    $("#foxIconOne").html(JSON.stringify(json.stream.channel.logo));
    $("#foxLinkOne").html(JSON.stringify(json._links.channel));
});


$.getJSON(streamsHtmlHead + "freecodecamp", function (json2) {
    if (json2.status === 404) {
        // console.log(json2.message)
        $("#foxStatusTwo").html(JSON.stringify(json2.message));
    }
    if (json2.stream === null) {
        // console.log("Offline")
        $("#foxStatusTwo").html("OFFLINE");
    } else {
        // console.log(ericHolder.channel.status)
        $("#foxStatusTwo").html(JSON.stringify(json2.stream.channel.status));
    }
    $("#foxNameTwo").html("freecodecamp");
    $("#foxIconTwo").html(JSON.stringify(json2.stream.channel.logo));
    $("#foxLinkTwo").html(JSON.stringify(json2._links.channel));
});


$.getJSON(streamsHtmlHead + "comster404", function (json3) {
    if (json3.status === 404) {
        // console.log(json3.message)
        $("#foxStatusThree").html(JSON.stringify(json3.message));
    }
    if (json3.stream === null) {
        // console.log("Offline")
        $("#foxStatusThree").html("OFFLINE");
    } else {
        // console.log(ericHolder.channel.status)
        $("#foxStatusThree").html(JSON.stringify(json3.stream.channel.status));
    }
    $("#foxNameThree").text("comster404");
    $("#foxIconThree").html(JSON.stringify(json3.stream.channel.logo));
    $("#foxLinkThree").html(JSON.stringify(json3._links.channel));
});