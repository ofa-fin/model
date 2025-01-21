import type { PaymentMethodReference } from "../common/PaymentMethod.js";
import type { InvoiceRow } from "./InvoiceRow.js";

/**
 * Sales or purchase invoice etc.
 */
export interface Invoice {

  /**
   * Invoice date in ISO date format.
   * @pattern ^[0-9]{4}-[0-9]{2}-[0-9]{2}$
   * @example "2025-01-01"
  */
  invoiceDate: string;

  /**
   * Due date in ISO date format.
   * @pattern ^[0-9]{4}-[0-9]{2}-[0-9]{2}$
   * @example "2025-01-01"
   */
  dueDate?: string;

  /**
   * Pay date in ISO date format.
   * @pattern ^[0-9]{4}-[0-9]{2}-[0-9]{2}$
   * @example "2025-01-01"
   */
  payDate?: string;

  /**
   * Reference number of the invoice.
   * @minLength 3
   * @maxLength 25
   */
  reference?: string;

  /** Numeric identifier
   * // TODO: is this needed?
  */
  number?: number;

  /** Payment method of the invoice */
  paymentMethodId?: PaymentMethodReference;

  /** Invoice rows */
  rows: InvoiceRow[];

}