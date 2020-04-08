// creates Eventbridge

aws events create-event-bus --name demo-orders --region us-east-2

{
    "detail-type": ["New Order"],
    "source": ["Order Service"]
}


// 

{
    "orderId": "$.detail.orderId",
    "price": "$.detail.price",
    "productId": "$.detail.productId"
}

"{\"orderId\": <orderId>, \"price\": <price>, \"productId\": <productId>}"