import { Link } from "./"

export interface Product {
    id: string;
    name: string;
    description: string;
    create_time: string;
    links: Link[];
};
