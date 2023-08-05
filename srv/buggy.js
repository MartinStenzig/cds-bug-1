const cds = require('@sap/cds')

class BuggyReproService extends cds.ApplicationService {
    async init() {

        this.on('postWeatherData', async (req) => {

            // determine url parameters from request
            // const urlParams = req._.req.query
            const   urlParams = { weatherTempOutdoorCelsius: '32.2' }

            // Output trigger information to console
            console.log('Meteobridge request received.', urlParams);

            // Establish connection to CDS Service
            const serviceIotPush = await cds.connect.to('AdminService')

            // Retrieve IotMessages meta data from service
            const { IotMessages } = serviceIotPush.entities();
            //console.log('IotMessages: ', IotMessages)

            const selectStatement = SELECT.from(IotMessages);
            console.log(selectStatement)

            const insertStatement = INSERT.into(IotMessages, urlParams);
            //console.log('Insert Statement: ', insertStatement)

            let serviceResponse = await serviceIotPush.run(insertStatement);
            console.log('Service Response: ', serviceResponse)

            return 'inserted'

        })

        // ensure to call super.init()
        await super.init()

    }
}
module.exports = { BuggyReproService }