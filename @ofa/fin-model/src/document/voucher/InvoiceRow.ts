import type { AccountingInstruction, Period } from "../../general/index.js";
import type { ProductReference } from "../product/Product.js";

/**
 * Invoice row (laskurivi)
 */
export interface InvoiceRow {
  
  /** Name/description of the row. */
  name: string;

  /** Product added to this row. */
  product?: ProductReference;

  /** Accounting instruction for the row. */
  accounting?: AccountingInstruction;

  /** Period for the invoice row. */
  period?: Period;

}