import type { AccountingInstruction, Period } from "../../general/index.js";
import type { BankStatement } from "../bankstatement/BankStatement.js";
import type { AccountReference, File, Invoice, Partner, VoucherType } from "../index.js";

/**
 * Voucher document.
 */
export interface VoucherRequest {

    /** Voucher type. 
     * 
     *  TODO: String, enum or object ?
     *  TODO: Should be in BaseDocument ?
     * 
    */
    type: VoucherType | string;

    /**
     * Document date in ISO date format.
     * @pattern ^[0-9]{4}-[0-9]{2}-[0-9]{2}$
     * @example "2025-01-01"
     */
    date: string;


    /** Visible identifier for the voucher. 
     * 
    */
    visibleIdentifier?: string;

    /** Source information of the voucher. 
     * TODO: Model for source
     */
    source?: any;

    /** Voucher title. */
    title: string;

    /** Voucher description. */
    description?: string;

    /** Voucher status. 
     * TODO: Model for status
     * */
    status?: any;

    /** Partner for this voucher. */
    partner?: Partner;

    /** Period for the voucher. */
    period?: Period;

    /** Accounting instructions for the voucher. */
    accounting?: AccountingInstruction[];

    /** Contra account for the voucher. 
     * TODO: May need own model
     * 
     * TODO: Should be contraAccounting and include f.ex. information
     * the original voucher of credit note etc.
     * 
     * TODO: Should be included in AccountingInstruction ?
    */
    contraAccount?: AccountReference;

    /** Invoice data. Populated when voucher type is any kind of invoice. */
    invoice?: Invoice;

    /** Bank statement data. Populated when voucher type is bank statement. */
    statement?: BankStatement;

    /*
        Some other specific data for other voucher types
        ...
    */

    /** Attached files. */
    files?: File[];

}