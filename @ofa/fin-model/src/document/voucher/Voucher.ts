import type { Invoice, Partner, VoucherType } from "../index.js";
import type { BaseDocument } from "../common/BaseDocument.js";
import type { AccountingInstruction } from "../../general/index.js";

/**
 * Voucher document.
 */
export interface Voucher extends BaseDocument {

    /** Voucher type. */
    type: VoucherType;

    /**
     * Document date in ISO date format.
     * @pattern ^[0-9]{4}-[0-9]{2}-[0-9]{2}$
     * @example "2025-01-01"
     */
    date: string;

    /** Voucher title. */
    title: string;

    /** Voucher description. */
    description?: string;

    /** Voucher status. TODO: string -> object */
    status?: string;

    /** Partner for this voucher. */
    partner: Partner;

    /** Accounting instructions for the voucher. */
    accounting?: AccountingInstruction[];

    /** Invoice data. Populated when voucher type is any kind of invoice. */
    invoice?: Invoice;
    
    transactions?: any[];

    entries?: any[];

    files?: any[];

    history?: any[];

}