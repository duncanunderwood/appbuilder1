'use strict';

app.contact = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_contact
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_contact
(function(parent) {
    var
    /// start global model properties
    /// end global model properties
        dataProvider = app.data.appBuilder1,
        dataSourceOptions = {
            type: 'everlive',
            transport: {
                typeName: 'Users',
                dataProvider: dataProvider
            },
            error: function(e) {
                if (e.xhr) {
                    alert(JSON.stringify(e.xhr));
                }
            }
        },
        contactModel = kendo.observable({
            submit: function() {
                var addFormData = parent.get('addFormData'),
                    addModel = {};

                app.mobileApp.showLoading();

                function saveModel(data) {
                    /// start add form data save
                    addModel.DisplayName = addFormData.email;
                    addModel.DisplayName = addFormData.name;
                    /// end add form data save
                    var dataSource = new kendo.data.DataSource(dataSourceOptions);
                    dataSource.add(addModel);
                    dataSource.one('change', function(e) {
                        // datasource operation finished
                        app.mobileApp.hideLoading();
                    });

                    dataSource.one('error', function(error) {
                        showErrorMessage(error.xhr || error);
                    });

                    dataSource.sync();
                };

                function showErrorMessage(error) {
                    alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
                    app.mobileApp.hideLoading();
                }

                /// start add form save
                /// end add form save
                /// start add form save handler
                saveModel();
                /// end add form save handler
            },
            /// start add model functions
            /// end add model functions

            cancel: function() {
                    /// start add model cancel
                    /// end add model cancel
                }
                /// start add model properties
                /// end add model properties

        });

    /// start form functions
    /// end form functions

    parent.set('onShow', function _onShow() {
        var that = parent;
        that.set('addFormData', {
            email: '',
            text: '',
            name: '',
            /// start add form data init
            /// end add form data init
        });
        /// start add form show
        /// end add form show
    });
    parent.set('contactModel', contactModel);
})(app.contact);

// START_CUSTOM_CODE_contactModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_contactModel