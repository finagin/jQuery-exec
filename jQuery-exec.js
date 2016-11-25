(function ($) {

    /**
     * Pipeline applying jQuery method in caret function
     *
     * @param funcName jQuery method name
     * @returns {exec} jQuery method
     */
    $.fn.exec = function (funcName) {

        var self = this,
            exec = function () {

                return self[funcName].apply(self, arguments);

            };

        return exec;

    };

})(jQuery);
