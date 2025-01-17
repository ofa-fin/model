import type { DimensionItem } from "../../document/entry/index.js";
import type { AccountReference } from "../../document/entry/references.js";
import type { VatInformation } from "../../index.js";

/** 
 *  Instructions how to book the transaction, entry etc.
 *  
 *  Entries are created with accounting instructions.
 */
export interface AccountingInstruction {
    
    /** Accounting account to be used for the entry. */
    account: AccountReference;

    /** Dimensions of the entry. */
    dimensions?: DimensionItem[];

    /** Amount of the entry. */
    amount?: number;

    /** Net amount of the entry. */
    netAmount?: number;

    /** Vat information of the entry. */
    vat?: VatInformation;

    // TODO: Period
    
}