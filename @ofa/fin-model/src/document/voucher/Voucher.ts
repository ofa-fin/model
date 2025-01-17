import type { BaseDocument } from "../common/BaseDocument.js";
import type { PartnerReference } from "../entry/references.js";
import type { VoucherRow } from "./VoucherRow.js";
import type { VoucherType } from "./VoucherType.js";

/**
 * Accounting voucher (kirjanpidon tosite)
 * 
 * The accounting voucher is a document that contains the details of a financial transaction.
 * Accounting entries are made from accounting vouchers.
 */
export interface Voucher extends BaseDocument {

  /** Id in external system */
  externalId?: string;

  /**
   * Partner of the voucher.
   * @example {
   *   "id": "7bd3ee19-af4b-4afd-b08f-de0646471f54",
   *   "name": "Oy Yritys Ab"
   * }
   */
  partner?: PartnerReference;

  /**
   * Date of the invoice.
   * @format date
  */
  invoiceDate?: string;

  /**
   * Due date of the invoice.
   * @format date
   */
  dueDate?: string;

  /**
   * Pay date of the invoice.
   * @format date
   */
  payDate?: string;

  /** Reference number of the invoice. */
  reference?: string;

  /**
   * The start date for the period.
   * @format date
   */
  start?: string;

  /**
   * The end date for the period.
   * @format date
   */
  end?: string;

  /** Numberic identifier */
  number?: number;

  /** Account number for the row */
  account?: string;

  /** Contra account number for the row */
  contraAccount?: string;

  /** The classification code of the VAT */
  vatCode?: string;

  /** The VAT percent as 0-100 (e.g. 25.5 for 25.5%) */
  vatPercent?: number;

  /** Accounting voucher type */
  type?: VoucherType;

  /** The id of the payment method */
  paymentMethodId?: string;

  /** Rows in the accounting voucher */
  rows: VoucherRow[];

}