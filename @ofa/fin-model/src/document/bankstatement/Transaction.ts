import type { AccountingInstruction } from "../../general/accounting/AccountingInstruction.js";
import type { Entry } from "../entry/Entry.js";
import type { DocumentReference } from "../entry/references.js";
import type { File } from "../file/File.js";
import type { BaseDocument, PartnerReference } from "../index.js";
import type { StatementReference } from "./StatementReference.js";
import type { StatementTransaction } from "./StatementTransaction.js";

export enum TransactionStatus {
    /** Unlinked - kohdentamaton */
    UNLINKED = "UNLINKED",
    /** Linked - yhdistetty erilliseen tositteeseen (tulo/meno), joka kirjattu pankkitiliä vasten */
    LINKED = "LINKED",
    /** Booken on statement - kirjattu tiliotteen perustella ilman erillistä tositetta */
    BOOKED = "BOOKED",
    /** Matched - kohdistettu osto/myyntilaskuun */    
    MATCHED = "MATCHED",
    /** Ignored as double - käytetään tilioteriville, joka kohdennetaan viitemaksuaineiston perusteella */
    DOUBLE = "DOUBLE"
}


/**
 * One transaction of a bank statement
 * 
 */
export interface TransactionInStatement extends BaseDocument, StatementTransaction {
    
    /** Partner connected to the transaction.
     */
    partner?: PartnerReference;
    
    /** Accounting instructions for the transaction.
     */
    accounting?: AccountingInstruction[];

    /** Document connected to the transaction.
     *  Purchase invoice to be paid or sales invoice to be received.
     */
    linkedDocument?: DocumentReference;

    /** Description written by the user.
     */
    description?: string;

    /** Entries created from the transaction.
     */
    entries?: Entry[];

    /** Booking status of the transaction.
     */
    status: TransactionStatus;

    /** Files attached to the transaction.
     */
    files?: File[];
}

export interface Transaction extends TransactionInStatement {
    /** Statement reference.
     */
    statement?: StatementReference;
}