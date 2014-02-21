define(function(require) {
    var $ = require('jquery');
    var _ = require('underscore');

    function SidebarView(sidebar) {
        this.$sidebar = $(sidebar);
        _.bindAll(this);
    }

    SidebarView.prototype.init = function() {
        this.$sidebar.find('button').click(this.buttonClick);
    };

    SidebarView.prototype.buttonClick = function() {
        alert('This is initialized in Modules/SidebarView.js');
    };

    return SidebarView;
})