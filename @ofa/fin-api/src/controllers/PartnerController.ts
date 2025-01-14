import { Partner, PartnerRequest } from "@ofa/fin-model";
import {
  Body,
  Controller,
  Delete,
  Example,
  Get,
  Header,
  Path,
  Post,
  Put,
  Query,
  Response,
  Route,
  SuccessResponse,
  Tags
} from "tsoa";

/**
 * Management API for partners.
 */
@Route("api/v1/partner")
@Tags("Partners")
export class PartnerController extends Controller {

  constructor() {
    super();
  }

  /**
   * Get partner by id.
   * @param partnerId The partners's identifier
   * @param clientVersion Obligatory client version header
   * @param locale Obligatory locale query parameter
   */
  @Example<Partner>({
    id: "123e4567-e89b-12d3-a456-426614174000",
    createdAt: "2024-12-18T14:32:05Z",
    updatedAt: "2024-12-18T14:32:05Z",
    code: "PARTNER123",
    name: "Oy Yritys Ab",
    businessId: "1234567-8",
    vatNumber: "FI12345678",
    email: "contact@yritys.fi",
    phone: "+358401234567",
    homepage: "https://yritys.fi",
    language: "fi",
    domicile: "Helsinki",
    country: "FI",
    address: {
      street: "Testikatu 8",
      postalCode: "00100",
      city: "Helsinki",
      countryCode: "FI"
    },
    deliveryAddress: {
      street: "Toimituskatu 3",
      postalCode: "00120",
      city: "Helsinki",
      countryCode: "FI"
    },
    invoiceAddress: {
      street: "Laskutuskatu 5",
      postalCode: "00150",
      city: "Helsinki",
      countryCode: "FI"
    },
    einvoiceAddresses: [
      {
        operator: "E204503",
        address: "003712345678"
      }
    ],
    bankAccounts: [
      {
        iban: "FI1234567890123456",
        bic: "OKOYFIHH"
      }
    ]
  }, "Partner with all data")
  @Get("{partnerId}")
  @SuccessResponse(200, "Success")
  @Response<{ message: NotFoundError }>(404, 'Not Found')
  public async getPartner(
    @Path() partnerId: String,
    @Header() clientVersion?: String,
    @Query() locale?: String
  ): Promise<Partner> {
    return {} as any;
  }

  /**
   * Create a new partner.
   * @param requestBody Partner data
   * @param clientVersion Obligatory client version header
   * @param locale Obligatory locale query parameter
   * @example requestBody {
   *   "code": "PARTNER123",
   *   "name": "Oy Yritys Ab",
   *   "businessId": "1234567-8",
   *   "vatNumber": "FI12345678",
   *   "email": "contact@yritys.fi",
   *   "phone": "+358401234567",
   *   "language": "fi",
   *   "domicile": "Helsinki",
   *   "country": "FI"
   * }
   */
  @Post()
  @SuccessResponse(201, "Created")
  @Response<{ message: ValidationError }>(400, 'Bad Request')
  @Response<{ message: UnauthorizedError }>(401, 'Unauthorized')
  public async createPartner(
    @Body() requestBody: PartnerRequest,
    @Header() clientVersion?: String,
    @Query() locale?: String
  ): Promise<Partner> {
    return {} as any;
  }

  /**
   * Update partner by id.
   * @param partnerId The partner's identifier
   * @param requestBody Updated partner data
   * @param clientVersion Obligatory client version header
   * @param locale Obligatory locale query parameter
   */
  @Put("{partnerId}")
  @SuccessResponse(200, "Success")
  @Response<{ message: NotFoundError }>(404, 'Not Found')
  public async updatePartner(
    @Path() partnerId: String,
    @Body() requestBody: PartnerRequest,
    @Header() clientVersion?: String,
    @Query() locale?: String
  ): Promise<Partner> {
    return {} as any;
  }

  /**
   * Delete partner by id.
   * @param partnerId The partner's identifier
   * @param clientVersion Obligatory client version header
   * @param locale Obligatory locale query parameter
   */
  @Delete("{partnerId}")
  @SuccessResponse(204, "No Content")
  @Response<{ message: NotFoundError }>(404, 'Not Found')
  public async deletePartner(
    @Path() partnerId: String,
    @Header() clientVersion?: String,
    @Query() locale?: String
  ): Promise<void> {
    return;
  }

}

export class CommonParameters {
  locale?: string;
  clientVersion?: string;
}

export class NotFoundError {
  code: "NOT_FOUND";
  message: string;
}

export class ValidationError {
  code: "VALIDATION_ERROR";
  message: string;
  details: string[];
}

export class UnauthorizedError {
  code: "UNAUTHORIZED";
  message: string;
}

export class InternalServerError {
  code: "INTERNAL_SERVER_ERROR";
  message: string;
}