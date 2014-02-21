define(function (require) {
    var $ = require('jquery');
    var SidebarView = require('views/SidebarView');
    
    return {
        init: function() {
            $(function() {
                var sidebar = new SidebarView('.js-sidebar');
                sidebar.init();
            });
        }
    };
});