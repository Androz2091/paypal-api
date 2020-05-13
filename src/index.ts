import fetch from "node-fetch";
import { Product, Plan } from "./types";

interface PayPalOptions {
    sandboxMode: boolean;
    clientID: string;
    clientSecret: string;
};

interface AccessTokenData {
    value: string;
    expiresAt: number;
};

export = class PayPal {

    public sandboxMode: boolean;
    public clientID: string;
    public clientSecret: string;
    public baseURL: string;
    private accessToken?: AccessTokenData;
    private accessTokenResolve: Function;

    constructor(options: PayPalOptions){
        this.sandboxMode = options.sandboxMode;
        this.baseURL = this.sandboxMode ? "https://api.sandbox.paypal.com/v1" : "https://api.paypal.com";
        this.clientID = options.clientID;
        this.clientSecret = options.clientSecret;
    }

    fetchToken(){
        return new Promise(async (resolve) => {
            this.accessTokenResolve = resolve;
            const params = new URLSearchParams();
            params.set("grant_type", "client_credentials");
            const res = await fetch(`${this.baseURL}/oauth2/token`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Accept-Language": "en_US",
                    "Authorization": "Basic "+Buffer.from(`${this.clientID}:${this.clientSecret}`).toString('base64')
                },
                body: params.toString()
            });
            const data = await res.json();
            this.accessToken = {
                value: data.access_token,
                expiresAt: Date.now()+(data.expires_in)
            };
            this.accessTokenResolve();
            setTimeout(() => {
                this.fetchToken();
            }, data.expires_in*1000+500);
        });
    }

    async listProducts(): Promise<Product[]> {
        if(this.accessTokenResolve) await this.accessTokenResolve;
        const res = await fetch(`${this.baseURL}/catalogs/products?page_size=2&page=1&total_required=true`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.accessToken.value}`
            }
        });
        const data = await res.json();
        return data.products;
    }
    
    async listPlans(productID: string): Promise<Plan[]> {
        if(this.accessTokenResolve) await this.accessTokenResolve;
        const res = await fetch(`${this.baseURL}/billing/plans?product_id=${productID}&page_size=2&page=1&total_required=true`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.accessToken.value}`
            }
        });
        const data = await res.json();
        return data.plans;
    }

};
