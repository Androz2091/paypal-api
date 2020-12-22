import { Link } from './Link'
import { ShippingAddress, ShippingAmount } from './Shipping'

interface Subscriber {
    name: {
        given_name: string
        surname: string
    }
    email_address: string
    payer_id: string
    shipping_address: {
        name: {
            full_name: string
        }
        address: ShippingAddress
    }
}

export interface SubscriptionCreateOptions {
    plan_id: string
    start_time: string
    quantity: string
    shipping_amount: ShippingAmount
    subscriber: Subscriber
    application_context: {
        brand_name: string
        locale: string
        shipping_preference: string
        user_action: string
        payment_method: {
            payer_selected: string
            payee_preferred: string
        }
        return_url: string
        cancel_url: string
    }
}

export interface SubscriptionCreateSuccess {
    id: string
    status: string
    status_update_time: string
    plan_id: string
    start_time: string
    quantity: string
    shipping_amount: ShippingAmount
    subscriber: Subscriber
    create_time: string
    links: Link[]
}

export interface Subscription {
    status: string
    status_update_time: string
    id: string
    plan_id: string
    start_time: string
    quantity: string
    shipping_amount: ShippingAmount
    subscriber: Subscriber
    billing_info: {
        outstanding_balance: ShippingAmount
        cycle_executions: any[]
        last_payment: {
            amount: any
            time: string
        }
        next_billing_time: string
        final_payment_time: string
        failed_payments_count: number
    }
    create_time: string
    update_time: string
    plan_overridden: number
    links: Link[]
}

export interface CapturePaymentOptions {
    note: string;
    amount: ShippingAmount;
    capture_type: string;
}
