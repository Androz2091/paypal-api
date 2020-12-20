import { Link } from './Link'
import { ShippingAmount } from './Shipping'

export interface PlanCreateOptions {
    product_id: string,
    name: string,
    description:string,
    billing_cycles: {
        frequency: {
            interval_unit: string,
            interval_count: number
        },
        tenure_type: string,
        sequence: number,
        total_cycles: number,
        pricing_scheme: {
            fixed_price: ShippingAmount
        }
    }[]
    payment_preferences: {
        service_type: string,
        auto_bill_outstanding: boolean,
        setup_fee: ShippingAmount,
        setup_fee_failure_action: string,
        payment_failure_threshold: number
    },
    quantity_supported: boolean,
    taxes: {
        percentage: string,
        inclusive: boolean,
    }
}

export interface PlanCreateSuccess extends PlanCreateOptions {
    id: string,
    status: string,
    create_time: string,
    update_time: string,
    links: Link[]
}

export interface Plan extends PlanCreateSuccess {
};
