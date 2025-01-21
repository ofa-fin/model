import type { VoucherType } from "../../document/index.js";
import type { SORT_VOUCHER } from "./sort.enums.js";

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
 * Orderable query parameters.
 */
export interface OrderableQuery extends BaseQuery {
    /** Sort order.
     * @example "asc"
     */
    order?: "asc" | "desc";
}

/**
 * Date range query parameters.
 */
export interface DateRangeQuery extends OrderableQuery {
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

export interface GetVouchersQuery extends DateRangeQuery {
    /** Voucher type
     * @example "SALES_INVOICE"
     */
    voucherType?: VoucherType;

     /** Sort field.
     * @example "name"
     */
     sort?: SORT_VOUCHER;
}
