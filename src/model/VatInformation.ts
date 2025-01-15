
/**
 * Vat main class.
 */
export enum VatMainClass {
    SALES = 'SALES',
    PURCHASES = 'PURCHASES',
    NO_VAT = 'NO_VAT'
}

export enum VatSubClass {
    /** Domestic VAT, in net method */
    NORMAL = 'NORMAL',
    /** Marginal VAT. Reason should be set for sales invoices- */
    MARGINAL = 'MARGINAL',
    /** EU reverse VAT. Goods or services should be set. */
    EU = 'EU',
    /** Building reverse VAT. */
    BUILDING = 'BUILDING',
    /** Vat for import. Will be reported in domestic VAT */
    IMPORT = 'IMPORT',
    /** Zero based VAT. (Nollaverokannan alainen myynti) */
    ZERO_BASED = 'ZERO_BASED',
}

export enum GoodsOrServices {
    GOODS = 'GOODS',
    SERVICES = 'SERVICES',
}

export enum VatLevel {
    /** Hight rate (25,5 or 24%) */
    HIGH = 'HIGH',
    /** Medium rate (14%) */
    MEDIUM = 'MEDIUM',
    /** Low rate (10%) */
    LOW = 'LOW'
}

export enum MarginalVatReason {
    SECOND_HAND = 'SECOND_HAND',
    COLLECTION = 'COLLECTION',
    ART = 'ART',
}

export interface VatInformation {
    mainClass: VatMainClass;
    subClass?: VatSubClass;
    goodsOrServices?: GoodsOrServices;
    marginalVatReason?: MarginalVatReason;
    vatLevel?: VatLevel;
    vatRate: number;
    /** Percentage (0 to 100) of the VAT amount that is returned. Default is 100. */
    returnPercentage?: number;
}

/**
 * Vat entry type.
 * 
 * Type of VAT related accounting entry.
 * DRAFT.
 * 
 */
export enum VatEntryType {
    /** Base amount (vat excluded). Informational. */
    BASE = 'BASE',
    /** Vat amount, accounted to Arvonlisäverovelka. */
    VAT = 'VAT',
    /** Return amount, accounted to Arvonlisäverosaamiset. */    
    RETURN = 'RETURN',    
    /** In reverse VAT, if no rights to VAT return, the VAT part will be accounted to salary account. */
    NO_RETURN_PART = 'NO_RETURN_PART',
}

export interface EntryVatInformation extends VatInformation {
    bookingType?: VatEntryType;
}