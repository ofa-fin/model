/** Enum for accounting voucher types
 * TODO: mitä tarvitaan?
 */
export enum VoucherType {

  /** Muistio */
  ACCOUNTING_MEMO = "ACCOUNTING_MEMO",

  /** Jaksotus */
  ACCRUAL_ENTRY = "ACCRUAL_ENTRY",

  /** Tiliote */
  BANK_STATEMENT = "BANK_STATEMENT",

  /** Hyvityslasku */
  CREDIT_NOTE = "CREDIT_NOTE",

  /** Poistolaskelma */
  DEPRECIATION_CALCULATION = "DEPRECIATION_CALCULATION",

  /** Meno */
  EXPENSE = "EXPENSE",

  /** Kululasku */
  EXPENSE_REPORT = "EXPENSE_REPORT",

  /** Tuonti */
  IMPORT = "IMPORT",

  /** Tulo */
  INCOME = "INCOME",

  /** Tulovero */
  INCOME_TAX = "INCOME_TAX",

  /** Tilin avaus */
  OPENING_ENTRY = "OPENING_ENTRY",

  /** Muu */
  OTHER = "OTHER",

  /** Maksumuistutus */
  PAYMENT_REMINDER = "PAYMENT_REMINDER",

  /** Palkka */
  SALARY = "SALARY",

  /** Myyntilasku */
  SALES_INVOICE = "SALES_INVOICE",

  /** Yhteenvetoilmoitus */
  SUMMARY_REPORT = "SUMMARY_REPORT",

  /** Järjestelmätosite */
  SYSTEM_VOUCHER = "SYSTEM_VOUCHER",

  /** Siirto */
  TRANSFER = "TRANSFER",

  /** ALV-laskelma */
  VAT_REPORT = "VAT_REPORT",

}