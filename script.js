var streamsHtmlHead = "https://wind-bow.gomix.me/twitch-api/streams/";

$.getJSON(streamsHtmlHead + "OgamingSC2" + "?callback=?", function (json) {
    if (json.status === 404) {
        $(".foxStatusOne").html(JSON.stringify(json.message));
        $(".foxNameOne").html("OgamingSC2");
    }
    if (json.stream === null) {
        $(".foxStatusOne").html("OFFLINE");
        $(".foxNameOne").html('<a href='+ json._links.channel +'>OgamingSC2</a>');
    } else {
        $(".foxStatusOne").html(JSON.stringify(json.stream.channel.status));
        $(".foxNameOne").html('<a href='+ json._links.channel +'>OgamingSC2</a>');
    }
});

$.getJSON(streamsHtmlHead + "freecodecamp"+"?callback=?", function (json) {
    if (json.status === 404) {
        $(".foxStatusTwo").html(JSON.stringify(json.message));
        $(".foxNameTwo").html("freecodecamp");
    }
    if (json.stream === null) {
        $(".foxStatusTwo").html("OFFLINE");
        $(".foxNameTwo").html('<a href='+ json._links.channel +'>freecodecamp</a>');
    } else {
        $(".foxStatusTwo").html(JSON.stringify(json.stream.channel.status));
        $(".foxNameTwo").html('<a href='+ json._links.channel +'>freecodecamp</a>');
    }
});

$.getJSON(streamsHtmlHead + "comster404"+"?callback=?", function (json) {
    if (json.status === 404) {
        $(".foxStatusThree").html(JSON.stringify(json.message));
        $(".foxNameThree").html("comster404");
    }
    if (json.stream === null) {
        $(".foxStatusThree").html("OFFLINE");
        $(".foxNameThree").html('<a href='+ json._links.channel +'>comster404</a>');
    } else {
        //$("#foxNameThree").html("comster404");
        $(".foxStatusThree").html(JSON.stringify(json.stream.channel.status));
        $(".foxNameThree").html('<a href='+ json._links.channel +'>comster404</a>');
    }
});


// - Bootstrap Theme Stuff -

/**
 *   I don't recommend using this plugin on large tables, I just wrote it to make the demo useable. It will work fine for smaller tables
 *   but will likely encounter performance issues on larger tables.
 *
 *		<input type="text" class="form-control" id="dev-table-filter" data-action="filter" data-filters="#dev-table" placeholder="Filter Developers" />
 *		$(input-element).filterTable()
 *
 *	The important attributes are 'data-action="filter"' and 'data-filters="#table-selector"'
 */
(function(){
    'use strict';
    var $ = jQuery;
    $.fn.extend({
        filterTable: function(){
            return this.each(function(){
                $(this).on('keyup', function(e){
                    $('.filterTable_no_results').remove();
                    var $this = $(this),
                        search = $this.val().toLowerCase(),
                        target = $this.attr('data-filters'),
                        $target = $(target),
                        $rows = $target.find('tbody tr');

                    if(search == '') {
                        $rows.show();
                    } else {
                        $rows.each(function(){
                            var $this = $(this);
                            $this.text().toLowerCase().indexOf(search) === -1 ? $this.hide() : $this.show();
                        })
                        if($target.find('tbody tr:visible').size() === 0) {
                            var col_count = $target.find('tr').first().find('td').size();
                            var no_results = $('<tr class="filterTable_no_results"><td colspan="'+col_count+'">No results found</td></tr>')
                            $target.find('tbody').append(no_results);
                        }
                    }
                });
            });
        }
    });
    $('[data-action="filter"]').filterTable();
})(jQuery);

$(function(){
    // attach table filter plugin to inputs
    $('[data-action="filter"]').filterTable();

    $('.container').on('click', '.panel-heading span.filter', function(e){
        var $this = $(this),
            $panel = $this.parents('.panel');

        $panel.find('.panel-body').slideToggle();
        if($this.css('display') != 'none') {
            $panel.find('.panel-body input').focus();
        }
    });
    $('[data-toggle="tooltip"]').tooltip();
});