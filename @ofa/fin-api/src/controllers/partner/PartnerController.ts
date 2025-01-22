import { OrderableQuery, PaginatedResult, Partner, PartnerRequest, Result } from "@ofa/fin-model";
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
  Queries,
  Query,
  Response,
  Route,
  SuccessResponse,
  Tags
} from "tsoa";
import { HttpUtil } from "../../util/HttpCodeReponse.js";
import { emptyResults } from "../common/search.examples.js";
import { partnerList, partnerWithAllData } from "./partner.examples.js";

/**
 * Management API for partners.
 */
@Route("api/v1/partners")
@Tags("Partners")
export class PartnerController extends Controller {

  constructor() {
    super();
  }

  /**
   * List all partners.
   */
  @Example<PaginatedResult<Partner>>(partnerList, "Example list of partners")
  @Example<PaginatedResult<Partner>>(emptyResults, "Empty list of partners")
  @Get()
  @SuccessResponse(200, HttpUtil.CODE_200)
  // TODO validation tms error, jos esim. limit liian suuri tai sortattu väärän kentän mukaan
  @Response<{ message: UnauthorizedError }>(401, HttpUtil.CODE_401)
  @Response<{ message: InternalServerError }>(500, HttpUtil.CODE_500)
  public async listPartners(
    @Queries() query: OrderableQuery,
  ): Promise<PaginatedResult<Partner>> {
    return emptyResults;
  }

  /**
   * Get partner by id.
   * @param partnerId The partners's identifier - example 123e4567-e89b-12d3-a456-426614174000
   * @param language Obligatory language query parameter as ISO 639-1 code, like fi or en
   */
  @Example<Result<Partner>>(partnerWithAllData, "Partner with all data")
  @Get("{partnerId}")
  @SuccessResponse(200, HttpUtil.CODE_200)
  @Response<{ message: UnauthorizedError }>(401, HttpUtil.CODE_401)
  @Response<{ message: NotFoundError }>(404, HttpUtil.CODE_404)
  @Response<{ message: InternalServerError }>(500, HttpUtil.CODE_500)
  public async getPartner(
    @Path() partnerId: String,
    @Query() language?: String
  ): Promise<Result<Partner>> {
    return {} as any;
  }

  /**
   * Create a new partner.
   * @param requestBody Partner data
   * @param language Obligatory language query parameter as ISO 639-1 code, like fi or en
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
  @SuccessResponse(201, HttpUtil.CODE_201)
  @Response<{ message: ValidationError }>(400, HttpUtil.CODE_400)
  @Response<{ message: UnauthorizedError }>(401, HttpUtil.CODE_401)
  @Response<{ message: InternalServerError }>(500, HttpUtil.CODE_500)
  public async createPartner(
    @Body() requestBody: PartnerRequest,
    @Query() language?: String
  ): Promise<Result<Partner>> {
    return {} as any;
  }

  /**
   * Update partner by id.
   * @param partnerId The partner's identifier
   * @param requestBody Updated partner data
   * @param language Obligatory language query parameter as ISO 639-1 code, like fi or en
   */
  @Put("{partnerId}")
  @SuccessResponse(200, "Success")
  @Response<{ message: ValidationError }>(400, HttpUtil.CODE_400)
  @Response<{ message: UnauthorizedError }>(401, HttpUtil.CODE_401)
  @Response<{ message: NotFoundError }>(404, HttpUtil.CODE_404)
  @Response<{ message: InternalServerError }>(500, HttpUtil.CODE_500)
  public async updatePartner(
    @Path() partnerId: String,
    @Body() requestBody: PartnerRequest,
    @Query() language?: String
  ): Promise<Result<Partner>> {
    return {} as any;
  }

  /**
   * Delete partner by id.
   * @param partnerId The partner's identifier
   */
  @Delete("{partnerId}")
  @SuccessResponse(204, HttpUtil.CODE_204)
  @Response<{ message: UnauthorizedError }>(401, HttpUtil.CODE_401)
  @Response<{ message: NotFoundError }>(404, HttpUtil.CODE_404)
  @Response<{ message: InternalServerError }>(500, HttpUtil.CODE_500)
  public async deletePartner(
    @Path() partnerId: String
  ): Promise<void> {
    return;
  }
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