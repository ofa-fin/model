import type { BaseDocument } from "./BaseDocument.js";
import type { DimensionEntry, EntryVatInformation } from "../general/index.js";

enum DebitOrCredit {
    DEBIT = 'DEBIT',
    CREDIT = 'CREDIT'
}

/**
 * Some basic information about an account.
 */
export interface EntryAccountInformation {

    /** Account number. */
    number: string;

    /** Account name. */
    name: string;
}


/** Some basic information about the document that created the entry. 
 * 
 * Infomation in needef for audit trial (kirjausketju) : Every single entry must be traceable to the original document.
 */
export interface EntryDocumentInformation {

    /** Document id in the accounting system, recommended to be a UUID. */
    id: string;

    /** Visible identifier for the document. May have eg. a serie, a number and a financial year part 
    */
    visibleIdentifier: string;
};


/** Some basic information about the partner of the entry. */
export interface EntryPartnerInformation {

    /** Partner id in the accounting system, recommended to be a UUID. */
    id: string;

    /** Partner name. This is stored when document is saved and NOT updated when partner is updated. */
    name: string;
}



/**
 * Accounting entry.
 * 
 * An entry is a single transaction in the accounting system. 
 * Entries will be created by the accounting system when source accounting document is in 'BOOKED' status.
 * This means that the use is usually not creating entries manually, and entries may be in read-only mode.
 * All the reports (balance sheet, income statement, etc.) are based on entries.
 */
export interface Entry extends BaseDocument{

    /** Entry date in ISO date format. */
    date: string;

    /** Dimensions of the entry. */
    dimensions: DimensionEntry[];

    /** Amount of the entry. */
    amount: number;

    /** Debit or credit. */
    debitOrCredit: DebitOrCredit;

    /** Description of the entry. */
    description?: string;

    /** Account of the entry. */
    account: EntryAccountInformation;

    /** Document that created the entry. */
    document: EntryDocumentInformation; 

    /** Partner of the entry. */
    partner?: EntryPartnerInformation;

    /** Vat information of the entry. */
    vat?: EntryVatInformation;
}
