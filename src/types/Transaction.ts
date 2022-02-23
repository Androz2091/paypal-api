export interface Transaction {
    status: string,
    id: string,
    amount_with_breakdown: object,
    payer_name: object,
    payer_email: string,
    time: string
}