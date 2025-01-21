
/**
 * Vat main class.
 */
export enum VatMainClass {
    SALES = 'SALES',
    PURCHASES = 'PURCHASES',
    NO_VAT = 'NO_VAT'
}

/**
 * Vat sub class.
 * 
 * Not used for NO_VAT
 */
export enum VatSubClass {
    /** Domestic VAT, in net method */
    NORMAL = 'NORMAL',
    /** Domestic VAT, in gross method */
    GROSS = 'GROSS',
    /** Marginal VAT. Reason should be set for sales invoices- */
    MARGINAL = 'MARGINAL',
    /** EU reverse VAT. Goods or services should be set. */
    EU = 'EU',
    /** Building reverse VAT. */
    BUILDING = 'BUILDING',
    /** Vat for import. Will be reported in domestic VAT */
    IMPORT = 'IMPORT',
}

/**
 * Goods or services.
 * Only for EU VAT.
 */
export enum GoodsOrServices {
    /** Goods */
    GOODS = 'GOODS',
    /** Services */
    SERVICES = 'SERVICES',
}

/**
 * Vat level.
 * 
 */
export enum VatLevel {
    /** Hight rate (25,5 or 24%) */
    HIGH = 'HIGH',
    /** Medium rate (14%) */
    MEDIUM = 'MEDIUM',
    /** Low rate (10%) */
    LOW = 'LOW',
    /** Nollaverokannan alainen myynti (Should this be as VatSubClass?) */
    ZERO = 'ZERO',
}

/**
 * Marginal VAT reason.
 * Only for MARGINAL VAT.
 */
export enum MarginalVatReason {
    SECOND_HAND = 'SECOND_HAND',
    COLLECTION = 'COLLECTION',
    ART = 'ART',
}

/**
 * Vat information.
 * 
 * All the combinations are not allowed.
 */
export interface VatInformation {
    /** Main class of the VAT. 
     * @example SALES
    */
    mainClass: VatMainClass;

    /** Sub class of the VAT.
     * @example NORMAL
    */
    subClass?: VatSubClass;

    /** Goods or services.
     * Only for EU VAT. 
     * @example undefined
    */
    goodsOrServices?: GoodsOrServices;

    /** Marginal VAT reason.
     * Only for MARGINAL VAT.
     * @example undefined
    */
    marginalVatReason?: MarginalVatReason;

    /** Vat level.  
     * @example HIGH
    */
    level?: VatLevel;

    /** Vat rate.
     * @example 25.5
    */
    rate: number;

    /** Percentage (0 to 100) of the VAT amount that is returned. Default is 100. 
     * @example undefined
    */
    returnPercentage?: number;
}

