/**
 * Base query parameters for search endpoints including pagination.
 */
export interface BaseQuery {
    /** Limit of the result set.
     * @example "100"
     */
    limit?: number;

    /** Offset of the result set.
     * @example "0"
     */
    offset?: number;
}

/**
 * Sortable query parameters.
 */
export interface SortableQuery extends BaseQuery {
    /** Sort field.
     * @example "name"
     */
    sort?: string;

    /** Sort order.
     * @example "asc"
     */
    order?: "asc" | "desc";
}

/**
 * Date range query parameters.
 */
export interface DateRangeQuery extends SortableQuery {
    /** Start date in ISO date format. 
    * @pattern ^[0-9]{4}-[0-9]{2}-[0-9]{2}$
    * @example "2024-01-01"
    */
    startDate?: string;

    /** End date in ISO date format. 
     * @pattern ^[0-9]{4}-[0-9]{2}-[0-9]{2}$
     * @example "2024-12-31"
     */
    endDate?: string;
}

/**
 * Paginated items result.
 */
export interface PaginatedItems<T> {
    /** Items in the result set. */
    items: T[];

    /** Number of items (possible limited) in the result set.
     * @example "100"
     */
    limit: number;

    /** Offset of the result set.
     * @example "0"
     */
    offset: number;

    /** Total number of matching items in the database.
     * @example "1485"
     */
    total: number;
}
