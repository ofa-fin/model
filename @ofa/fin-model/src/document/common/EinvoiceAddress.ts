/**
 * Einvoice address document.
 */
export interface EinvoiceAddress {

    /** 
     * Einvoice operator code
     * @example "E204503"
     */
    operator: string;

    /**
     * Einvoice address - usually OVT-address
     * @example "003712345678"
     */
    address: string;

}