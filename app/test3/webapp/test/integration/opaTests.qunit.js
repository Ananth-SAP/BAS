sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/test3/test3/test/integration/FirstJourney',
		'com/test3/test3/test/integration/pages/customerList',
		'com/test3/test3/test/integration/pages/customerObjectPage'
    ],
    function(JourneyRunner, opaJourney, customerList, customerObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/test3/test3') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThecustomerList: customerList,
					onThecustomerObjectPage: customerObjectPage
                }
            },
            opaJourney.run
        );
    }
);