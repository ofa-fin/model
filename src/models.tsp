import "@typespec/http";

using TypeSpec.Http;

model CommonParameters {
  @query
  locale?: string;

  @header
  clientVersion?: string;
}

/**
 * Base model for document.
 */
model BaseDocument {
  /**
   * Document id as GUID.
   * Read-only. Will be generated after creation.
   */
  id?: string;

  /**
   * Document creation time in ISO 8601 format. Ex. 2024-12-18T14:32:05Z.
   * May be read-only depending on the implementation.
   */
  createdAt?: string;

  /**
   * Document update time in ISO 8601 format. Ex. 2024-12-18T14:32:05Z.
   * May be read-only depending on the implementation.
   */
  updatedAt?: string;

}

model Address {
  /** Street address. */
  street?: string;

  /** Street address line 2. */
  street2?: string;

  /** Postal code. */
  postalCode: string;

  /** City */
  city?: string;

  /** Country subdivision, like Pirkanmaa. */
  countrySubdivision?: string;

  /** Country as ISO 3166-1 alpha-2 code, like FI */
  countryCode?: string;
}

/**
 * Bank account document.
 */
model BankAccount extends BaseDocument {
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

/**
 * Partner document.
 */
@example(#{ name: "Laskupiste Oy", businessId: "2936138-7", homepage: "https://www.laskupiste.fi" })
model Partner extends BaseDocument {
  /** Partner's code. */
  code?: string;

  /** Partner's name. */
  @example("Laskupiste Oy")
  name: string;

  /** Partner's business id. */
  @example("2936138-7")
  businessId?: string;

  /** Partner's vat number. */
  vatNumber?: string;

  /** Partner's email. */
  email?: string;

  /** Partner's phone number. */
  phone?: string;

  /** Partner's homepage. */
  @example("https://www.laskupiste.fi")
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
  einvoiceAddress?: unknown;

  /** TODO: Do we need array? */
  bankAccounts?: BankAccount[];
}

/**
 * Reference to a partner.
 * 
 * In example, in entries we don't include all the partner information, but only the id and name.
 * Name is stored when saving a object and will NOT be updated when the partner is updated.
 */
model PartnerRef {
  /** Partner id. */
  @example("123e4567-e89b-12d3-a456-426614174000")
  id?: string;

  /** Partner name. 
   * 
   * Stored when saving a object and will NOT be updated when the partner is updated.
  */
  @example("Laskupiste Oy")
  name: string;
}

@error
model NotFoundError {
  code: "NOT_FOUND";
  message: string;
}

@error
model ValidationError {
  code: "VALIDATION_ERROR";
  message: string;
  details: string[];
}

@error
model UnauthorizedError {
  code: "UNAUTHORIZED";
  message: string;
}

@error
model InternalServerError {
  code: "INTERNAL_SERVER_ERROR";
  message: string;
}

model InternalServerErrorResponse {
  @statusCode statusCode: 500;
  @body error: InternalServerError;
}
