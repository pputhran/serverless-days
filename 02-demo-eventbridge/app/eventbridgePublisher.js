const EventBridge = require('aws-sdk/clients/eventbridge')
const ev = new EventBridge();

exports.handler = async (event) => {

    const orderDetails = {
        orderId: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
        productId: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
        price: Math.floor(Math.random() * (200 - 100 + 1)) + 100,
        customer: {
            name : 'Pawan Puthran',
            customerId: Math.floor(Math.random() * (10000 - 100 + 1)) + 100,
            address: "141 Alexandra Avenue, NA2 9PX"
        }
    }

    const params = {
        Entries: [ /* required */
          {
            Source: 'Order Service',
            DetailType: 'New Order',
            EventBusName: 'demo-orders',
            Detail: JSON.stringify(orderDetails)
          }        
        ]
      };

      try {
        const response = await ev.putEvents(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(response)
        }
      } catch (error) {
          throw new Error(JSON.stringify(error));
      }
}