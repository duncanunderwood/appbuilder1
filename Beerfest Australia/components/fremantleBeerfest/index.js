'use strict';

app.fremantleBeerfest = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_fremantleBeerfest
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_fremantleBeerfest
(function(parent) {
    var
    /// start global model properties
    /// end global model properties
        fremantleBeerfestModel = kendo.observable({
        /// start add model functions
        /// end add model functions

    });

    /// start form functions
    /// end form functions

    parent.set('onShow', function _onShow() {
        var that = parent;
        that.set('addFormData', {
            fremantleStallHolders: '',
            fremantleTickets: '',
            fremantleEventInfo: '',
            /// start add form data init
            /// end add form data init
        });
        /// start add form show
        /// end add form show
    });
    parent.set('fremantleBeerfestModel', fremantleBeerfestModel);
})(app.fremantleBeerfest);

// START_CUSTOM_CODE_fremantleBeerfestModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_fremantleBeerfestModel