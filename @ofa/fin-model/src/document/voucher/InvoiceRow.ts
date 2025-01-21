import type { VatInformation } from "../../general/index.js";
import type { DimensionItem } from "../dimension/DimensionItem.js";

/**
 * Invoice row (laskurivi)
 */
export interface InvoiceRow {

  /** Amount of the row */
  amount: number;

  /** The net amount of the row */
  netAmount?: number;

  /** Ledger account number for the row */
  account?: string;

  /** The classification code of the VAT */
  vat?: VatInformation;

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

  /** Values for cost accounting dimensions */
  dimensions?: DimensionItem[];
}