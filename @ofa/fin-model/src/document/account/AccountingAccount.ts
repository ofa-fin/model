import type { VatInformation } from "../../general/index.js";
import type { BaseDocument } from "../index.js";

export interface AccountingAccount extends BaseDocument {

    /** Name of the account, language as key and name as value.
     * @example { "fi": "Ostot", "en": "Purchases", "sv": "Köp" }
     */
    name: Record<string, string>;

    // TODO: Account type

    // TODO: Account group
    
    /** Number of the account. */
    number: string;

    defaultVat?: VatInformation;

}