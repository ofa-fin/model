import { BaseDocument } from "./BaseDocument.js";

/**
 * Bank account document.
 */
export interface BankAccount extends BaseDocument {
  
    /** IBAN account number. */
    iban: string;

    /** BIC code. */
    bic?: string;

    /** Bank name. */
    bankName?: string;

    /** Currency as ISO 4217 code, like EUR. */
    currency?: string;

    /** Tells if current bank account is preferred one */
    preferred?: boolean;

}