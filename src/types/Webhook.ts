import { Link } from "./Link";

interface EventType {
    name: string
}

export interface WebhookCreateOptions {
    url: string
    event_types: EventType[]
};

export interface Webhook {
    id: string,
    url: string,
    event_types: EventType[];
    links: Link[]
}
