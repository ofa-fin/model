import type { AccountReference } from "../entry/references.js";
import type { DocumentReference } from "../entry/references.js";

export interface StatementBankAccountReference {
    iban: string;
    accounting: AccountReference;
}

export interface StatementReference  extends DocumentReference {
    account: StatementBankAccountReference;
}