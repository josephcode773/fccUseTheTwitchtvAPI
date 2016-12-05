var streamsHtmlHead = "https://crossorigin.me/https://wind-bow.hyperdev.space/twitch-api/streams/";

var streamerOne = {
    name: "OgamingSC2",
    currentState: function () {
        $.getJSON(streamsHtmlHead + this.name, function (json) {
            if (json.status === 404) {
                console.log(json.message)
            }
            if (json.stream === null) {
                console.log("Offline")
            } else {
                // console.log(ericHolder.channel.status)
                // $("#sayWord").html(JSON.stringify(json.string.channel.status));
                console.log(json.string.channel.status)
            }
        });
    },
    webLink: function () {
        $.getJSON(streamsHtmlHead + this.name, function (webby) {
            // return webby.string.channel.url
            console.log(webby.string.channel.url)

        })},
    picture: function () {
            $.getJSON(streamsHtmlHead + this.name, function (john) {
                // return john.string.channel.logo
                console.log(john.string.channel.logo)

            })
        }
    };
