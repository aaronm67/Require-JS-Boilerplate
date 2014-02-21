define(function(require) {
    var AnotherView = require('views/AnotherView');
    var $ = require('jquery');

    var Page1 = {
        init: function() {
            $(function() {
                var anotherViews  = $('div.js-another-view').map(function() {
                    var view = new AnotherView('div.js-another-view');
                    view.init();
                    return view;
                }).get();
            })
        }
    };

    return Page1;
});