define(function(require) {

    function AnotherView(selector) {
        this.$selector = $(selector);
    }

    AnotherView.prototype.init = function() {
        this.$selector.css('background', 'purple');
    };

    return AnotherView;

});