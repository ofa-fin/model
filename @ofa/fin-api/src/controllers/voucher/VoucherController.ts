import { Voucher, VoucherType } from "@ofa/fin-model";
import { Controller, Example, Get, Queries, Response, Route, SuccessResponse, Tags } from "tsoa";
import { HttpUtil } from "../../util/HttpCodeReponse.js";
import { emptyResults } from "../common/search.examples.js";
import { DateRangeQuery, PaginatedItems } from "../common/search.interfaces.js";
import { InternalServerError, UnauthorizedError } from "../partner/PartnerController.js";
import { salesInvoices } from "./voucher.examples.js";

interface GetVouchersQuery extends DateRangeQuery {
    /** Voucher type
     * @example "SALES_INVOICE"
     */
    voucherType?: VoucherType;
}

@Route("api/v1/vouchers")
@Tags("Vouchers")
export class VoucherController extends Controller {

    constructor() {
        super();
    }
    /**
     * Find vouchers by query parameters. Returns max 100 vouchers.
     */
    @Example<PaginatedItems<Voucher>>(salesInvoices, "Sales invoices")
    //@Example<PaginatedItems<Voucher>>(purchaseInvoices, "Purchase invoices")
    @Example<PaginatedItems<Voucher>>(emptyResults, "Empty results")
    @Get()
    @SuccessResponse(200, HttpUtil.CODE_200)
    @Response<{ message: UnauthorizedError }>(401, HttpUtil.CODE_401)
    @Response<{ message: InternalServerError }>(500, HttpUtil.CODE_500)
    public async getVouchers(
        @Queries() query: GetVouchersQuery
    ): Promise<PaginatedItems<Voucher>> {
        return emptyResults;
    }
}