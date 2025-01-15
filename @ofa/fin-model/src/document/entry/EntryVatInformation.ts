import type { VatInformation } from "../../general/VatInformation.js";

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

/**
 * Vat information for an entry.
 * 
 * Extends VatInformation with bookingType, which is used to indicate the type of VAT related accounting entry.
 */
export interface EntryVatInformation extends VatInformation {
    /** Type of VAT related accounting entry. */
    bookingType?: VatEntryType;
}