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
            fixed_price: {
                value: string,
                currency_code: string
            }
        }
    }[],
    payment_preferences: {
        service_type: string,
        auto_bill_outstanding: number,
        setup_fee: {
            value: string,
            currency_code: string
      },
      setup_fee_failure_action: string,
      payment_failure_threshold: number
    },
    quantity_supported: boolean,
    taxes: {
        percentage: string,
        inclusive: boolean,
    }
}

export interface PlanCreateSuccess {
    id: string,
    product_id: string,
    name: string,
    status: string,
    description: string,
    billing_cycles: {
            pricing_scheme: {
                fixed_price: {
                    currency_code: string,
                    value: string
                }
            },
            frequency: {
                interval_unit: string,
                interval_count: 1
            },
            tenure_type: string,
            sequence: number,
            total_cycles: number
    }[],
    payment_preferences: {
        auto_bill_outstanding: boolean,
        setup_fee: {
            currency_code: string,
            value: string
        },
        setup_fee_failure_action: string,
        payment_failure_threshold: number
    },
    taxes: {
        percentage: string,
        inclusive: boolean
    },
    quantity_supported: boolean,
    create_time: string,
    update_time: string,
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

export interface Plan {

};
