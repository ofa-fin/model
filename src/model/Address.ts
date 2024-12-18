import { BaseDocument } from "./BaseDocument.js";

/**
 * Address document.
 */
export interface Address extends BaseDocument {
  
    /** Street address. */
    street?: string;

    /** Street address line 2. */
    street2?: string;

    /** Postal code. */
    postalCode: string;

    /** City */
    city?: string;

    /** Country subdivision, like Pirkanmaa. */
    countrySubdivision?: string;

    /** Country as ISO 3166-1 alpha-2 code, like FI */
    countryCode?: string;

}