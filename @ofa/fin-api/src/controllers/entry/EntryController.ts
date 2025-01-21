import { Entry } from "@ofa/fin-model";
import { Controller, Get, Route, Tags, SuccessResponse, Example, Queries } from "tsoa";
import { HttpUtil } from "../../util/HttpCodeReponse.js";
import { bankDepositEntries, saleEntries } from "./entry.examples.js";


interface GetEntriesQuery {
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

    /** Account number. 
     * @pattern ^[0-9]{1,10}$
     * @example "1910"
     */
    account?: string;

    /** Dimension id (in any level)
     * @example "7382a2ed-2edf-46d1-b5f5-e6b1ec151d38"
     */
    dimension?: string;

    /**
     * Show entries for a specific voucher.
     * 
     * @example "7382a2ed-2edf-46d1-b5f5-e6b1ec151d38"
     */
    voucherid?: string

    /**
     * Show entries for a specific transaction.
     * 
     * @example "7382a2ed-2edf-46d1-b5f5-e6b1ec151d38"
     */
    transactionId?: string
}

@Route("api/v1/entries")
@Tags("Entries")

export class EntryController extends Controller {

    constructor() {
        super();
    }        
    /**
     * Get all entries.
     * 
     * Will have lots of query parameters.
     */
    @Example<Entry[]>(saleEntries, "Entries for simple sale")
    @Example<Entry[]>(bankDepositEntries, "Entries for bank deposit")
    @Get()
    @SuccessResponse(200, HttpUtil.CODE_200)    
    public async getEntries(
        @Queries() query: GetEntriesQuery   
    ): Promise<Entry[]> {
        return [];
    }   
}