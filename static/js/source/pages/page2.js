define(function(require) {
    var serverVars = require('serverVars');
    var $ = require('jquery');

    var Page2 = {
        init: function() {
            $(function() {
                $('.js-stuff').html(serverVars.baseUrl);
            });
        }
    };

    return Page2;
});