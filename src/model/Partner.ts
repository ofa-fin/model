import { BaseDocument } from "./BaseDocument.js";
import { Address } from "./Address.js";
import { BankAccount } from "./BankAccount.js";

/**
 * Partner document.
 */
export interface Partner extends BaseDocument {
  
    /** Partner's code. */
    code?: string;

    /** Partner's name. */
    name: string;

    /** Partner's business id. */
    businessId?: string;

    /** Partner's vat number. */
    vatNumber?: string;

    /** Partner's email. */
    email?: string;

    /** Partner's phone number. */
    phone?: string;

    /** Partner's homepage. */
    homepage?: string;

    /** Partner's language as ISO 639-1 code, like fi */
    language?: string;

    /** Partner's domicile. */
    domicile?: string;

    /** Partner's country as ISO 3166-1 alpha-2 code, like FI */
    country?: string;

    /** Partner's address. */
    address?: Address;

    /** Partner's delivery address. */
    deliveryAddress?: Address;

    /** Partner's invoice address. */
    invoiceAddress?: Address;
    
    /** TODO */
    einvoiceAddress?: any;

    /** TODO: Do we need array? */
    bankAccounts: BankAccount[];

}