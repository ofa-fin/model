import { Controller, Get, Route, Tags, SuccessResponse, Queries } from "tsoa";
import { HttpUtil } from "../../util/HttpCodeReponse.js";
import type { Transaction, TransactionStatus } from "@ofa/fin-model";

interface GetTransactionsQuery {
    /** Start date in ISO date format. 
     * @pattern ^[0-9]{4}-[0-9]{2}-[0-9]{2}$
     * @example "2024-01-01"
    */
    startDate?: string;
    
    /** End date in ISO date format. 
     * @pattern ^[0-9]{4}-[0-9]{2}-[0-9]{2}$
     * @example "2024-12-31"
    */
    endDate?: string;

    /** Transaction status.
     * @example "UNLINKED"
     */
    status?: TransactionStatus;
}

@Route("api/v1/transactions")
@Tags("Transactions")
export class TransactionController extends Controller {

    constructor() {
        super();
    }        

    /**
     * Get all transactions.
     */
    @Get()
    @SuccessResponse(200, HttpUtil.CODE_200)    
    public async getTransactions(
        @Queries() query: GetTransactionsQuery   
    ): Promise<Transaction[]> { 
        return [];
    }   
}
