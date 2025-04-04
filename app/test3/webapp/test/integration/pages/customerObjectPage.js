sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.test3.test3',
            componentId: 'customerObjectPage',
            contextPath: '/customer'
        },
        CustomPageDefinitions
    );
});