# PayPal API

💰Easy to use framework to communicate with the PayPal API.

## Not finished

Actually, the package doesn't support all the endpoints of the PayPal API. Please open an issue if there are endpoints you want to see in.

## Example

```js
const PayPal = require("paypal-api");
const paypal = new PayPal({
    sandboxMode: true,
    clientID: 'paypal client id',
    clientSecret: 'paypal client secret'
});

// Start fetching token (it automatically fetches the token again when it expires)
paypal.fetchToken();

paypal.listProducts().then(console.log);
```
