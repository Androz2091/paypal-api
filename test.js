const PayPal = require("./");
const paypal = new PayPal({
    sandboxMode: true,
    clientID: '',
    clientSecret: ''
});

paypal.fetchToken().then(() => {
    console.log(paypal.accessToken);
    paypal.listProducts().then((products) => {
        console.log("Found "+products.length+" products. Fetching plans...");
        products.forEach((product) => {
            paypal.listPlans(product.id).then((plans) => {
                console.log("Found "+plans.length+" plans for product #"+product.id);
            });
        });
    });
});
