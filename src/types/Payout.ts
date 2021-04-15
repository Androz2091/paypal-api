interface PayoutItem {
    recipient_type: string;
    amount: {
        value: string;
        currency: string;
    };
    note: string;
    sender_item_id: string;
    receiver: string;
};

export interface PayoutCreateOptions {
    sender_batch_header: {
        sender_batch_id: string;
        email_subject: string;
        email_message: string;
    },
    items: PayoutItem[];
};
