import type { DimensionItem } from "../dimension/DimensionItem.js";

/**
 * Accounting voucher row (kirjanpidon tositerivi)
 * 
 * Accounting entries are made from accounting voucher rows.
 */
export interface VoucherRow {

  /** The accounting (net) value. */
  accountingValue?: number;

  /** Ledger account number for the row */
  account?: string;

  /** The classification code of the VAT */
  vatCode: string;

  /** The VAT percent as 0-100 (e.g. 25.5 for 25.5%) */
  vatPercent?: number;

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