sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.test3.test3',
            componentId: 'customerList',
            contextPath: '/customer'
        },
        CustomPageDefinitions
    );
});