import type { Period } from "../../general/accounting/Period.js";
import type { Transaction } from "../index.js";
import type { StatementBankAccountReference } from "./StatementReference.js";

export interface BankStatementIdentifier {
    /** Identifier of the statement, given by the bank.
     */
    identifier?: string;

    /** Legal sequence number of the statement.
     */
    legalSequenceNumber?: string;

    /** Electronic sequence number of the statement.
     */
    electronicSequenceNumber?: string;
}

