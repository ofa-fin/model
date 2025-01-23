import { GetVouchersQuery, PaginatedResult, Result, Voucher, VoucherRequest } from "@ofa/fin-model";
import { Body, Controller, Example, Get, Path, Post, Queries, Query, Response, Route, SuccessResponse, Tags } from "tsoa";
import { HttpUtil } from "../../util/HttpCodeReponse.js";
import { emptyResults } from "../common/search.examples.js";
import { InternalServerError, NotFoundError, UnauthorizedError, ValidationError } from "../partner/PartnerController.js";
import { salesInvoiceResult, salesInvoicesResult } from "./voucher.examples.js";

@Route("api/v1/vouchers")
@Tags("Vouchers")
export class VoucherController extends Controller {

    constructor() {
        super();
    }
    /**
     * Find vouchers by query parameters. Returns max 100 vouchers.
     */
    @Example<PaginatedResult<Voucher>>(salesInvoicesResult, "Sales invoices")
    //@Example<PaginatedResult<Voucher>>(purchaseInvoices, "Purchase invoices")
    @Example<PaginatedResult<Voucher>>(emptyResults, "Empty results")
    @Get()
    @SuccessResponse(200, HttpUtil.CODE_200)
    @Response<{ message: UnauthorizedError }>(401, HttpUtil.CODE_401)
    @Response<{ message: InternalServerError }>(500, HttpUtil.CODE_500)
    public async getVouchers(
        @Queries() query: GetVouchersQuery
    ): Promise<PaginatedResult<Voucher>> {
        return emptyResults;
    }

    /**
      * Get voucher by id.
      * @param voucherId The vouchers's identifier - example 123e4567-e89b-12d3-a456-426614174000
      * @param language Obligatory language query parameter as ISO 639-1 code, like fi or en
      */
    @Example<Result<Voucher>>(salesInvoiceResult, "Sales invoice")
    @Get("{voucherId}")
    @SuccessResponse(200, HttpUtil.CODE_200)
    @Response<{ message: UnauthorizedError }>(401, HttpUtil.CODE_401)
    @Response<{ message: NotFoundError }>(404, HttpUtil.CODE_404)
    @Response<{ message: InternalServerError }>(500, HttpUtil.CODE_500)
    public async getVoucher(
        @Path() voucherId: String,
        @Query() language?: String
    ): Promise<Result<Voucher>> {
        return {} as any;
    }

    /**
     * Create a new voucher.
     * @param voucher Voucher data
     * @param language Obligatory language query parameter as ISO 639-1 code, like fi or en
     * @example voucher {
     *   "date": "2023-10-12",
     *   "title": "1001 / Oy Yritys Ab",
     *   "description": "Sales invoice 1001 for Oy Yritys Ab",
     *   "externalId": "SI2023001",
     *   "partner": {
     *     "id": "123e4567-e89b-12d3-a456-426614174000",
     *     "name": "Oy Yritys Ab"
     *   },
     *   "invoice": {
     *     "invoiceDate": "2023-09-15",
     *     "dueDate": "2023-10-15",
     *     "reference": "1234567890",
     *     "number": 1001,
     *     "rows": [
     *       {
     *         "amount": 1000.00,
     *         "vat": {
     *           "mainClass": "SALES",
     *           "rate": 25.5
     *         }
     *       },
     *       {
     *         "amount": 500.00,
     *         "vat": {
     *           "mainClass": "SALES",
     *           "rate": 25.5
     *         }
     *       }
     *     ]
     *   },
     *   "type": "SALES_INVOICE",
     *   "files": [
     *      {
     *       "name": "invoice.pdf",
     *       "type": "application/pdf",
     *       "size": 123456,
     *       "url": "https://example.com/invoice.pdf"
     *     }
     *   ]
     * }
     */
    @Post()
    @SuccessResponse(201, HttpUtil.CODE_201)
    @Response<{ message: ValidationError }>(400, HttpUtil.CODE_400)
    @Response<{ message: UnauthorizedError }>(401, HttpUtil.CODE_401)
    @Response<{ message: InternalServerError }>(500, HttpUtil.CODE_500)
    public async createVoucher(
        @Body() voucher: VoucherRequest,
        @Query() language?: String
    ): Promise<Result<Voucher>> {
        return {} as any;
    }
}