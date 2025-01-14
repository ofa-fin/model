import type { Address } from "./Address.js";
import type { BankAccount } from "./BankAccount.js";
import type { EinvoiceAddress } from "./EinvoiceAddress.js";

/**
 * Partner request document.
 */
export interface PartnerRequest {

    /** Partner's code. */
    code?: string;

    /** Partner's name. */
    name: string;

    /**
     * Partner's business id.
     * @pattern ^[0-9]{7}-[0-9]$
     * @example "1234567-8"
     */
    businessId?: string;

    /**
     * Partner's vat number.
     * @example "FI12345678"
     */
    vatNumber?: string;

    /**
     * Partner's email.
     * @pattern ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     * @example "info@yritys.fi"
     */
    email?: string;

    /**
     * Partner's phone number.
     * @pattern ^\+[0-9]{1,3}[0-9]{3,14}$
     * @example "+358401234567"
     */
    phone?: string;

    /** Partner's homepage. */
    homepage?: string;

    /**
     * Partner's language as ISO 639-1 code
     * @pattern ^[a-z]{2}$
     * @example "fi"
     */
    language?: string;

    /** Partner's domicile. */
    domicile?: string;

    /**
     * Partner's country as ISO 3166-1 alpha-2 code
     * @pattern ^[A-Z]{2}$
     * @example "FI"
     */
    country?: string;

    /** Partner's address. */
    address?: Address;

    /** Partner's delivery address. */
    deliveryAddress?: Address;

    /** Partner's invoice address. */
    invoiceAddress?: Address;

    /** Partner's einvoice addresses */
    einvoiceAddresses?: EinvoiceAddress[];

    /** TODO: Do we need array? */
    bankAccounts?: BankAccount[];

}