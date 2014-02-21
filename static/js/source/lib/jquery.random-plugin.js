(function($) {

    $.fn.blink = function() {
        return this.each(function() {
            this.toggle().toggle();
        });
    }
})(jQuery);