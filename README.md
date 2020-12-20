# PayPal API

💰Easy to use framework to communicate with the PayPal API.

## Only basic endpoints are supported

At this time, the package doesn't support all the endpoints of the PayPal API, as it is made for one of my projects I only built the endpoints I needed. Please open an issue if there are endpoints you want to see in.

## Example

```js
const PayPal = require("paypal-api");
const paypal = new PayPal({
    sandboxMode: true,
    clientID: 'paypal client id',
    clientSecret: 'paypal client secret'
});

paypal.listProducts().then(console.log); // you now have access to all the methods!
```

## Products

### List products
```js
paypal.listProducts().then(console.log);
```

### Create products

```js
paypal.createProduct({
    name: "Video Streaming Service",
    description: "Video streaming service",
    type: "SERVICE",
    category: "SOFTWARE",
    image_url: "https://example.com/streaming.jpg",
    home_url: "https://example.com/home"
})
```

### TODO

* Product details: https://developer.paypal.com/docs/api/catalog-products/v1/#products_get
* Update product: https://developer.paypal.com/docs/api/catalog-products/v1/#products_patch

## Plans

### List plans
```js
paypal.listPlans(productID).then(console.log);
```

### Create plans
```js
paypal.createPlan({
    product_id: 'PROD-XXCD1234QWER65782',
    name: 'Basic Plan',
    description: 'Basic plan',
    billing_cycles: [
        {
            frequency: {
                interval_unit: 'MONTH',
                interval_count: 1
            },
            tenure_type: 'TRIAL',
            sequence: 1,
            total_cycles: 1
        },
        {
            frequency: {
                interval_unit: 'MONTH',
                interval_count: 1
            },
            tenure_type: 'REGULAR',
            sequence: 2,
            total_cycles: 12,
            pricing_scheme: {
                fixed_price: {
                    value: '10',
                    currency_code: 'USD'
                }
            }
        }
    ],
    payment_preferences: {
        service_type: 'PREPAID',
        auto_bill_outstanding: true,
        setup_fee: {
            value: '10',
            currency_code: 'USD'
        },
        setup_fee_failure_action: 'CONTINUE',
        payment_failure_threshold: 3
    },
    quantity_supported: true,
    taxes: {
        percentage: '10',
        inclusive: false
    }
})
```

### TODO

* Plan details: https://developer.paypal.com/docs/api/subscriptions/v1/#plans_get
* Update plan: https://developer.paypal.com/docs/api/subscriptions/v1/#plans_patch
    - update plan pricing: https://developer.paypal.com/docs/api/subscriptions/v1/#plans_update-pricing-schemes
* Activate plan: https://developer.paypal.com/docs/api/subscriptions/v1/#plans_activate
* Deactivate plan: https://developer.paypal.com/docs/api/subscriptions/v1/#plans_deactivate

## Subscriptions

### Create subscription

```js
paypal.createSubscription({
    plan_id: 'P-2UF78835G6983425GLSM44MA',
    start_time: '2020-12-20T16:17:13Z',
    subscriber: {
        name: {
            given_name: 'John',
            surname: 'Doe'
        },
        email_address: 'customer@example.com'
    },
    application_context: {
        brand_name: 'example',
        locale: 'en-US',
        shipping_preference: 'SET_PROVIDED_ADDRESS',
        user_action: 'SUBSCRIBE_NOW',
        payment_method: {
            payer_selected: 'PAYPAL',
            payee_preferred: 'IMMEDIATE_PAYMENT_REQUIRED'
        },
        return_url: 'https://example.com/returnUrl',
        cancel_url: 'https://example.com/cancelUrl'
    }
}
```

### Subscription details

```js
paypal.getSubscription('I-Y3FEL44WUVPU').then(console.log);
```
