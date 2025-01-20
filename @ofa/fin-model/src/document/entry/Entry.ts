import type { BaseDocument, DimensionItem } from "../index.js";
import type { EntryVatInformation } from "./EntryVatInformation.js";
import type { AccountReference, DocumentReference, PartnerReference } from "./references.js";

/**
 * Debit or credit.
 * 
 * Indicates the direction of the entry.
 * 
 */
export enum DebitOrCredit {
    /** Debit. */
    DEBIT = 'DEBIT',
    /** Credit. */
    CREDIT = 'CREDIT'
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

    /** Entry date in ISO date format.
     * @pattern ^[0-9]{4}-[0-9]{2}-[0-9]{2}$
     * @example "2024-01-01"
     */
    date: string;

    /** Dimensions of the entry.
     * @example [
     *   {
     *     "id": "7382a2ed-2edf-46d1-b5f5-e6b1ec151d38",
     *     "name": "Shop location",
     *     "values": [
     *       {
     *         "id": "f04abc48-fd19-49ba-881d-082c232ff62d",
     *         "name": "Kouvola",
     *       }
     *     ]
     *   }
     * ]
     */
    dimensions: DimensionItem[];

    /** Amount of the entry.
     * @example 125.50
     */
    amount: number;

    /** Debit or credit.
     * @example DEBIT
     */
    debitOrCredit: DebitOrCredit;

    /** Description of the entry.
     * @example "Salary payment"
     */
    description?: string;

    /** Account of the entry.
     * @example {
     *   "number": "1910",
     *   "name": "Bank account"
     * }
     */
    account: AccountReference;

    /** Document that created the entry.
     * @example {
     *   "id": "7bd3ee19-af4b-4afd-b08f-de0646471f54",
     *   "visibleIdentifier": "ML-1/2024"
     * }
     */
    document: DocumentReference; 

    /** Partner of the entry.
     * @example {
     *   "id": "7bd3ee19-af4b-4afd-b08f-de0646471f54",
     *   "name": "Oy Yritys Ab"
     * }
     */
    partner?: PartnerReference;

    /** Vat information of the entry.
     */
    vat?: EntryVatInformation;
}
