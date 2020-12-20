export interface SubscriptionCreateOptions {
    plan_id: string,
    start_time: string,
    quantity: string,
    shipping_amount: {
        currency_code: string,
        value: string
    },
    subscriber: {
        name: {
            given_name: string,
            surname: string
        },
        email_address: string,
        shipping_address: {
            name: {
                full_name: string
            },
            address: {
                address_line_1: string
                address_line_2: string,
                admin_area_2: string,
                admin_area_1: string,
                postal_code: string,
                country_code: string
            }
        }
    },
    application_context: {
        brand_name: string,
        locale: string,
        shipping_preference: string,
        user_action: string,
        payment_method: {
            payer_selected: string,
            payee_preferred: string
        },
        return_url: string,
        cancel_url: string
    }
}

export interface SubscriptionCreateSuccess {
    id: string,
    status: string,
    status_update_time: string,
    plan_id: string,
    start_time: string,
    quantity: string,
    shipping_amount: {
        currency_code: string,
        value: string
    },
    subscriber: {
        name: {
            given_name: string,
            surname: string
        },
        email_address: string,
        shipping_address: {
            name: {
                full_name: string
            },
            address: {
                address_line_1: string,
                address_line_2: string,
                admin_area_2: string,
                admin_area_1: string,
                postal_code: string,
                country_code: string
            }
        }
    },
    create_time: string,
    links: [
        {
            href: string,
            rel: string,
            method: string
        },
        {
            href: string,
            rel: string,
            method: string
        },
        {
            href: string,
            rel: string,
            method: string
        }
    ]
}

export interface Subscription {
    id: string,
    status: string,
    status_update_time: string,
    plan_id: string,
    start_time: string,
    quantity: string,
    shipping_amount: {
        currency_code: string,
        value: string
    },
    subscriber: {
        name: {
            given_name: string,
            surname: string
        },
        email_address: string,
        shipping_address: {
            name: {
                full_name: string
            },
            address: {
                address_line_1: string,
                address_line_2: string,
                admin_area_2: string,
                admin_area_1: string,
                postal_code: string,
                country_code: string
            }
        }
    },
    create_time: string,
    links: [
        {
            href: string,
            rel: string,
            method: string
        },
        {
            href: string,
            rel: string,
            method: string
        },
        {
            href: string,
            rel: string,
            method: string
        }
    ]
}
