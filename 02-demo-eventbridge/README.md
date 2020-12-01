## Create Eventbridge

```aws events create-event-bus --name demo-orders --region us-east-2```

## Filtering specific events

```
{
    "detail-type": ["New Order"],
    "source": ["Order Service"]
}
```

## Testing Input Transformer

Provide the below in the Input Transformer as `Input Path`

```
{
    "orderId": "$.detail.orderId",
    "price": "$.detail.price",
    "productId": "$.detail.productId"
}
```

Provide the below as `Input Template`

```
"{\"orderId\": \<orderId\>, \"price\": \<price\>, \"productId\": \<productId\>}"
```
