import { PaginatedItems } from "./search.interfaces.js";

export const emptyResults: PaginatedItems<any> = {
    limit: 0,
    offset: 0,
    total: 0,
    items: []
}
