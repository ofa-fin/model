/**
 * Paginated items result.
 */
export interface PaginatedResult<T> {
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
