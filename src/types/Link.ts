export interface Link {
    href: string
    rel: string
    method: string
};

enum LinkDescriptionMethod {
    "GET",
    "POST",
    "PUT",
    "DELETE",
    "HEAD",
    "CONNECT",
    "OPTIONS",
    "PATCH"
}

export interface LinkDescription {
    href: string,
    rel: string,
    method: LinkDescriptionMethod
}
