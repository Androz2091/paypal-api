import { Link } from './'

export interface ProductCreateOptions {
    name: string,
    description: string,
    type: string,
    category: string,
    image_url: string,
    home_url: string,
}

export interface Product {
    id: string;
    name: string;
    description: string;
    create_time: string;
    links: Link[];
};
